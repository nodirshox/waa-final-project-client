import Button from '@mui/material/Button';
import { AxiosClient } from '../../axios';
import * as React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function UpdateImageProperty() {
  const [selectedFile, setSelectedFile] = React.useState(null);
  const params = useParams();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData();
    formData.append("file", selectedFile);

    const response = await AxiosClient({
      method: "POST",
      url: "/files",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    });

    const updateImage = await AxiosClient.patch(`/properties/${params.id}/images`, [
      {
        awsUrl: response.data.awsUrl,
        type: "MAIN"
      }
    ])
    navigate(`/properties/${params.id}`);
  }

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0])
  }

  return (
    <>
      <h1 className='upload-image'>Update pictures of property</h1>
      <div className="upload-image">
        <div>
          <form onSubmit={handleSubmit}>
            <Button
              variant="contained"
              component="label"
            >
              <input type="file" onChange={handleFileSelect} />
            </Button>
            <Button variant="contained" component="label" style={{ margin: '0 10px' }}>
              <input type="submit" value="Upload File" />
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}