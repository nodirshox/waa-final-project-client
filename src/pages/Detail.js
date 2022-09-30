import { Detail as DetailComponent } from '../components/detail/Detail';

function Detail() {
  console.log('Detail');
  const address = {
    "state": "IA",
    "city": "Fairfield",
    "zip": "52557",
    "street": "North Street"
  }

  return (
    <div className='detail'>
      <DetailComponent
        price="899"
        numberOfRooms="3"
        type="HOUSE"
        address={address}
        createdAt="2022-09-26T09:52:27.2269153"
      />
    </div>
  );
}

export default Detail;