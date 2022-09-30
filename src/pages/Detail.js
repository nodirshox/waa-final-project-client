import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Detail as DetailComponent } from '../components/detail/Detail';
import { AxiosClient } from "../axios";
import { CONFIG } from "../core/config";

function Detail() {
  const [property, setProperty] = useState({});
  const [thumbnail, setThumbnail] = useState(CONFIG.DEFAULT_IMAGE);
  const params = useParams();

  const fetchProperty = async () => {
    const result = await AxiosClient.get(`/properties/${params.id}`);
    setProperty(result.data);

    let thumbnails = result.data.pictures.filter((img) => img.type === "MAIN");
    if (thumbnails.length > 0) {
      setThumbnail(thumbnails[0].awsUrl);
    }
  }

  useEffect(() => {
    fetchProperty();
  }, []);

  return (
    <div className='detail'>
      <DetailComponent
        price={property.price}
        numberOfRooms={property.numberOfRooms}
        type={property.type}
        address={{
          ...property.address
        }}
        listingType={property.listingType}
        createdAt={property.createdAt}
        thumbnail={thumbnail}
      />
    </div>
  );
}

export default Detail;