import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import * as React from 'react';
import Button from '@mui/material/Button';

export default function CreateProperty() {
  const [type, setType] = React.useState('HOUSE');
  const [listingType, setListingType] = React.useState('RENT');
  const [state, setState] = React.useState('');
  const [city, setCity] = React.useState('');
  const [street, setStreet] = React.useState('');
  const [zip, setZip] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [numberOfRooms, setNumberOfRooms] = React.useState('');

  const types = [
    {
      value: 'HOUSE',
      label: 'House',
    },
    {
      value: 'CONDO',
      label: 'Condo',
    },
    {
      value: 'APARTMENT',
      label: 'Apartment',
    }
  ];

  const listingTypes = [
    {
      value: 'RENT',
      label: 'Rent',
    },
    {
      value: 'SALE',
      label: 'Sale',
    }
  ];
  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleListingTypeChange = (event) => {
    setListingType(event.target.value);
  };

  const createHandler = () => {
    console.log(state);
  }

  return (
    <div className="create-property">
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <h1>Create Listing Property</h1>
        <div>
          <TextField
            required
            id="outlined-required"
            label="State"
            onChange={(e) => setState(e.target.value)}
            inputProps={{ maxLength: 2 }}
          />
          <TextField
            required
            id="outlined-required"
            label="City"
            onChange={(e) => setCity(e.target.value)}
          />
          <TextField
            required
            id="outlined-required"
            label="Street"
            onChange={(e) => setStreet(e.target.value)}
          />
          <TextField
            required
            id="outlined-required"
            label="Zip"
            onChange={(e) => setZip(e.target.value)}
          />
          <TextField
            id="outlined-number"
            label="Price"
            type="number"
            onChange={(e) => setPrice(e.target.value)}
            required
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="outlined-number"
            label="Number of rooms"
            type="number"
            onChange={(e) => setNumberOfRooms(e.target.value)}
            required
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="outlined-select-currency"
            select
            label="Type"
            value={type}
            onChange={handleTypeChange}
          >
            {types.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="outlined-select-currency"
            select
            label="Listing type"
            value={listingType}
            onChange={handleListingTypeChange}
          >
            {listingTypes.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <Button variant="contained" onClick={createHandler}>Create</Button>
      </Box>
    </div>
  )
}