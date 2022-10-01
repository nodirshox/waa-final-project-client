import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { AxiosClient } from '../../axios';

export default function Applications() {
  const [list, setList] = React.useState([]);

  const getApplications = async () => {
    const response = await AxiosClient.post("/properties/owner", {
      email: localStorage.getItem("email")
    })
    setList(response.data);
  }

  React.useEffect(() => {
    getApplications()
  }, []);

  return (
    <>
      <div>
        <h1>Properties</h1>
      </div>
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Property</TableCell>
                <TableCell align="right">Rooms</TableCell>
                <TableCell align="right">Status</TableCell>
                <TableCell align="right">Type</TableCell>
                <TableCell align="right">Created</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {list.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="left">(#{row.id}) {row.address.state}, {row.address.city} {row.address.street}, {row.price}$</TableCell>
                  <TableCell align="right">{row.numberOfRooms}</TableCell>
                  <TableCell align="right">{row.status}</TableCell>
                  <TableCell align="right">{row.type}</TableCell>
                  <TableCell align="right">{row.createdAt}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  )
}