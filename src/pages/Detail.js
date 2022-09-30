import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Detail as DetailComponent } from '../components/detail/Detail';
import { AxiosClient } from "../axios";

function Detail() {
  const [property, setProperty] = useState({});
  const params = useParams();

  const fetchProperty = async () => {
    const result = await AxiosClient.get(`/properties/${params.id}`);
    setProperty(result.data);
  }

  useEffect(() => {
    fetchProperty();
    console.log(property);
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
      />
    </div>
  );
}

export default Detail;