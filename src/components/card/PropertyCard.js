import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";

const PropertyCard = ({image, price, type, listingType, numberOfRooms, address, owner}) => {
    return (
        <Card raised margin="20px" padding="20px">
          <CardActionArea>
            <CardMedia
              component="img"
            //   height='100%'
              width='100%'
              image={image}
              alt="house photo"
            />
            <CardContent margin="0">
              <Typography gutterBottom variant="h5" component="div">
                $ {price}
              </Typography>
              <Typography variant="body2" >
                <span className="card-span">{numberOfRooms} Rooms</span> |
                <span className="card-span"> {type} For {listingType}</span>
              </Typography>
              <Typography variant="body2">
                <p>{address.street}, {address.city}, {address.state} {address.zip}</p>
              </Typography>

              <Typography variant="body2" color="text.secondary">
                <p>{owner.name}</p>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      );
}

export default PropertyCard;

export const exampleProps = {
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3465&q=80",
    price: 300000,
    type: "Condo",
    listingType: "Rent",
    numberOfRooms: 4,
    address: {
        street: "Yagir 2",
        city: "Fairfield",
        state: "IA",
        zip: "52557"
    }, 
    owner: {
        name: "John Doe Industries"
    }
}