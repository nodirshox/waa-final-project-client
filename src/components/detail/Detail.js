import { Button } from "@mui/material";
import "./detail.css";
import { AxiosClient } from "../../axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const Detail = ({ price, address, type, numberOfRooms, listingType, createdAt, thumbnail, pictures }) => {
  const params = useParams();
  const [isSend, setIsSend] = useState(false);
  const [isSendApplication, setIsSendApplication] = useState(true);
  const date = new Date(createdAt);
  const month = date.toLocaleString('default', { month: 'long' });
  const userRole = localStorage.getItem("user_role");

  const addToFavourites = async () => {
    await AxiosClient.post(`/favourites/property/${params.id}`, {
      email: localStorage.getItem("email")
    })
    setIsSend(true);
  }

  const removeFromFavourites = async () => {
    await AxiosClient.post(`/favourites/property/${params.id}/remove`, {
      email: localStorage.getItem("email")
    })
    setIsSend(false);
  }

  const sendApplication = async () => {
    await AxiosClient.post(`/properties/applications/${params.id}`, {
      email: localStorage.getItem("email")
    })
    setIsSendApplication(false);
  }

  const fetchFavourites = async () => {
    const response = await AxiosClient.get("favourites", {
      params: {
        email: localStorage.getItem("email")
      }
    })
    let found = response.data.filter((e) => e.id === Number.parseInt(params.id));

    if (found.length > 0) {
      setIsSend(true);
    }
  }
  useEffect(() => {
    fetchFavourites();
  }, []);

  return (
    <div className="detail">
      <p>
        <b>Listing: </b>
        {listingType}
      </p>
      <p>
        <b>Price: </b>
        ${price}
      </p>
      <p>
        <b>Address: </b>
        {address.street}, {address.city}, {address.state} {address.zip}
      </p>
      <p>
        <b>Type: </b>
        {type}
      </p>
      <p>
        <b>Rooms: </b>
        {numberOfRooms}
      </p>
      <p>
        <b>Listed: </b>
        {month} {date.getDay()}, {date.getFullYear()}
      </p>
      <p>
        <b>Action</b>
      </p>
      <p>
        {userRole === "customer" ? isSend === false ? <Button variant="contained" onClick={addToFavourites}>Add to favourites</Button> : <Button variant="contained" onClick={removeFromFavourites}>Remove from favourites</Button> : <></>}
      </p>
      <p>{userRole === "customer" && isSendApplication ? <Button variant="contained" onClick={sendApplication}>Send Application</Button> : <></>}</p>
      <p>
        <img src={thumbnail} alt="House" className="center" height="350px" width="auto" />
      </p>
      <p>
        {
          pictures.map((pic) => {
            return (
              <img src={pic.awsUrl} alt="House" height="180px" width="auto" style={{ margin: "5px" }} />
            )
          })
        }
      </p>
    </div>
  )
}