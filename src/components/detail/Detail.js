import "./detail.css";

export const Detail = ({ price, address, type, numberOfRooms, listingType, createdAt, thumbnail, pictures }) => {
  const date = new Date(createdAt);
  const month = date.toLocaleString('default', { month: 'long' });
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