import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { AxiosClient } from '../../axios';
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function Rented() {
  const [list, setList] = React.useState([]);

  const fetchProperties = async () => {
    const response = await AxiosClient.get("/users/latest-customers");
    setList(response.data);
  }

  React.useEffect(() => {
    fetchProperties();
  }, []);

  return (
    <>
      <div>
        <h1>Latest Customers</h1>
      </div>
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">ID</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Type</TableCell>
                <TableCell align="right">Activate</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {list.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="right">{row.id}</TableCell>
                  <TableCell align="right">{row.name}</TableCell>
                  <TableCell align="right">{row.email}</TableCell>
                  <TableCell align="right">{row.type}</TableCell>
                  <TableCell align="right">
                    <div><Switch {...label} defaultChecked /></div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}