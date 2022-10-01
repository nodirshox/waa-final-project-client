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
    const response = await AxiosClient.post("/properties/applications", {
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
        <h1>Applications</h1>
      </div>
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">Property</TableCell>
                <TableCell align="right">User</TableCell>
                <TableCell align="right">Submitted</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {list.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="right">(#{row.property.id}) {row.property.address.state}, {row.property.address.city}, {row.property.price}$</TableCell>
                  <TableCell align="right">{row.user.name} ({row.user.email})</TableCell>
                  <TableCell align="right">{row.submittedAt}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  )
}