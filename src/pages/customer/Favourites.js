import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import { AxiosClient } from '../../axios';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

export default function Favourites() {
  const [list, setList] = React.useState([]);
  const deleteHandler = async (id) => {
    await AxiosClient.post(`/favourites/property/${id}/remove`, {
      email: localStorage.getItem("email")
    })
    setList([...list.filter(function (item) {
      return item.id !== Number.parseInt(id)
    })]);
  }
  const fetchFavourites = async () => {
    const response = await AxiosClient.get('/favourites', {
      params: {
        email: localStorage.getItem("email")
      }
    })
    setList(response.data);
  }
  React.useEffect(() => {
    fetchFavourites();
  }, [])
  return (
    <>
      <h1 className='favourites-header'>Favourite List</h1>
      <div className="favourites">
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          {list.map((value, index) => (
            <ListItem
              key={value.id}
              disableGutters
              secondaryAction={
                <IconButton aria-label="comment">
                  <RemoveCircleIcon />
                </IconButton>
              }
              onClick={() => { deleteHandler(value.id) }}
            >
              <ListItemText primary={`${index + 1}. ${value.type}(${value.numberOfRooms}) ${value.price}$ for ${value.listingType} at ${value.address.state}, ${value.address.city}`} />
            </ListItem>
          ))}
        </List>
      </div>
    </>
  )
}