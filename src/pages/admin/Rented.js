import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { AxiosClient } from '../../axios';

export default function Rented() {
  const [list, setList] = React.useState([]);

  const fetchProperties = async () => {
    const response = await AxiosClient.get("/properties/latest-rented");
    setList(response.data);
  }

  React.useEffect(() => {
    fetchProperties();
  }, []);

  return (
    <>
      <div>
        <h1>Latest 10 Rented Properties</h1>
      </div>
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Address</TableCell>
                <TableCell align="right">Listing</TableCell>
                <TableCell align="right">Rooms</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Type</TableCell>
                <TableCell align="right">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {list.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.address.state}, {row.address.city}
                  </TableCell>
                  <TableCell align="right">{row.listingType}</TableCell>
                  <TableCell align="right">{row.numberOfRooms}</TableCell>
                  <TableCell align="right">{row.price}$</TableCell>
                  <TableCell align="right">{row.type}</TableCell>
                  <TableCell align="right">{row.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}