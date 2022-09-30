import "./detail.css";

export const Detail = ({ price, address, type, numberOfRooms, listingType, createdAt }) => {
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
        <img src="https://photos.zillowstatic.com/fp/a382f363a22f1b54f0abe5d8c4a53320-cc_ft_1536.webp" alt="House" />
      </p>
    </div>
  )
}