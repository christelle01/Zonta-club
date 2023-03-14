import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Container } from '@mui/material';

import { styled } from '@mui/material/styles';
import "../../components/hotels/Hotels.css"
import { rows } from '../../dummydata';


const RootStyle = styled('div')(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(0, 0, 10, 0),
    },
  }));


export default function AccessibleTable() {
  return (
    <RootStyle>
        <Container>
        <TableContainer component={Paper} sx={{ paddingBottom: "40"}}>
      <Table aria-label="caption table">
        <TableHead>
          <TableRow>
            <TableCell>N/A</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Number of rooms available	</TableCell>
            <TableCell align="left">Type of room</TableCell>
            <TableCell align="left">Toastmasters Conference price (Fcfa)</TableCell>
            <TableCell align="left">Link website or booking.com</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">{row.na}</TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.number}</TableCell>
              <TableCell align="right">{row.type}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.link}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </Container>
    </RootStyle>
  );
}