import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Container, Stack } from '@mui/material';

import { styled } from '@mui/material/styles';
import { rows } from '../../dummydata';


const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    marginBottom: theme.spacing(0, 0, 10, 0),
  },
}));

const tableCellStyle = {
  border: '1px solid #0000001a'
};


export default function AccessibleTable() {
  return (
    <RootStyle>
      <Container>
        <Stack width={1} py={10}>
          <Paper sx={{ paddingBottom: "40px", border: "1px solid #0000001a" }}>
            <TableContainer>
              <Table aria-label="caption table">
                <TableHead>
                  <TableRow>
                    <TableCell style={tableCellStyle}>N/A</TableCell>
                    <TableCell align="left" style={tableCellStyle}>Nom</TableCell>
                    <TableCell align="left" style={tableCellStyle}>Nombres de chambres disponibles</TableCell>
                    <TableCell align="left" style={tableCellStyle}>Type de chambres</TableCell>
                    <TableCell align="left" style={tableCellStyle}>Prix ​​Conférence District 18 (Fcfa)</TableCell>
                    <TableCell align="left" style={tableCellStyle}>Lien site web ou booking.com</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row" style={tableCellStyle}>{row.na}</TableCell>
                      <TableCell align="left" style={tableCellStyle}>{row.name}</TableCell>
                      <TableCell align="left" style={tableCellStyle}>{row.number}</TableCell>
                      <TableCell align="left" style={tableCellStyle}>{row.type}</TableCell>
                      <TableCell align="left" style={tableCellStyle}>{row.price}</TableCell>
                      <TableCell align="left" style={tableCellStyle}><a href={row.link} target='_blank' rel="noopener noreferrer">{row.link}</a></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Stack>
      </Container>
    </RootStyle>
  );
}
