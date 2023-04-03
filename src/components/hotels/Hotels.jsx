import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Container, Stack } from '@mui/material';

import { styled } from '@mui/material/styles';
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
        <Stack width={1} py={10}>
          <TableContainer component={Paper} sx={{ paddingBottom: "40" }}>
            <Table aria-label="caption table">
              <TableHead>
                <TableRow>
                  <TableCell>N/A</TableCell>
                  <TableCell align="left">Nom</TableCell>
                  <TableCell align="left">Nombres de chambres disponibles</TableCell>
                  <TableCell align="left">Type de chambres</TableCell>
                  <TableCell align="left">Prix ​​Conférence District 18 (Fcfa)</TableCell>
                  <TableCell align="left">Lien site web ou booking.com</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">{row.na}</TableCell>
                    <TableCell align="left">{row.name}</TableCell>
                    <TableCell align="left">{row.number}</TableCell>
                    <TableCell align="left">{row.type}</TableCell>
                    <TableCell align="left">{row.price}</TableCell>
                    <TableCell align="left">{row.link}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Stack>
      </Container>
    </RootStyle>
  );
}