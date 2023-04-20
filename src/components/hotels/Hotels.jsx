import * as React from "react";
import {
  Box, 
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Container,
  Stack,
} from "@mui/material";

import { styled } from "@mui/material/styles";
import { rowBigHotel, rowSmallHotel, rowFurnished } from "../../dummydata";

const RootStyle = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    marginBottom: theme.spacing(0, 0, 10, 0),
  },
}));

const tableCellStyle = {
  border: "1px solid #0000001a",
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
                    <TableCell align="left" style={tableCellStyle}>
                      Nom
                    </TableCell>
                    <TableCell align="left" style={tableCellStyle}>
                      Nombres de chambres disponibles
                    </TableCell>
                    <TableCell align="left" style={tableCellStyle}>
                      Type de chambres
                    </TableCell>
                    <TableCell align="left" style={tableCellStyle}>
                      Prix ​​Conférence District 18 (Fcfa)
                    </TableCell>
                    <TableCell align="left" style={tableCellStyle}>
                      Prix ​​Conférence District 18 (USD)
                    </TableCell>
                    <TableCell align="left" style={tableCellStyle}>
                      Lien site web ou booking.com
                    </TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  <TableRow>
                    <TableCell colSpan={6} align="center" sx={{fontWeight: 'bold', fontSize: 20}}>Grands hotels</TableCell>
                  </TableRow>
                  {rowBigHotel.map((row, index) => (
                    <TableRow key={row.name+index}>
                      <TableCell
                        component="th"
                        scope="row"
                        style={tableCellStyle}
                      >
                        {row.na}
                      </TableCell>
                      <TableCell align="left" style={tableCellStyle}>
                        {row.name}
                      </TableCell>
                      <TableCell align="center" style={tableCellStyle} sx={{ width: 100}}>
                        {row.number}
                      </TableCell>

                      <TableCell style={tableCellStyle} sx={{p:0,  width: 200}} >
                        {row.rooms.map((room, index) => (
                          <Box key={room.type+index} sx={{ borderBottom: (index === 0 && row.rooms.length > 1) ? `1px solid #0000001a`: 'none',  }}>  <TableCell align="left" >{room.type}</TableCell> </Box>
                        ))}
                      </TableCell>

                      <TableCell style={tableCellStyle} sx={{p:0}} >
                          {row.rooms.map((room, index) => (
                            <Box width={1} key={room.price+index}  sx={{ borderBottom: (index === 0 && row.rooms.length > 1) ? `1px solid #0000001a`: 'none'  }}>  <TableCell  sx={{p: 0, py: 2 }}>{room.price}</TableCell></Box>
                          ))} 
                      </TableCell>
                      <TableCell style={tableCellStyle} sx={{p:0}} >
                          {row.dollars.map((dollar, index) => (
                            <Box width={1} key={dollar.price+index}  sx={{ borderBottom: (index === 0 && row.dollars.length > 1) ? `1px solid #0000001a`: 'none'  }}>  <TableCell  sx={{p: 0, py: 2 }}>{dollar.price}</TableCell></Box>
                          ))} 
                      </TableCell>

                      <TableCell align="left" style={tableCellStyle}>
                        <a
                          href={row.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {row.link}
                        </a>
                      </TableCell>
                    </TableRow>
                  ))}

                  <TableRow>
                    <TableCell colSpan={6} align="center" sx={{fontWeight: 'bold', fontSize: 20}}>Petits hotels</TableCell>
                  </TableRow>
                  {rowSmallHotel.map((row, index) => (
                    <TableRow key={row.name+index}>
                      <TableCell
                        component="th"
                        scope="row"
                        style={tableCellStyle}
                      >
                        {row.na}
                      </TableCell>
                      <TableCell align="left" style={tableCellStyle}>
                        {row.name}
                      </TableCell>
                      <TableCell align="center" style={tableCellStyle} sx={{ width: 100}}>
                        {row.number}
                      </TableCell>

                      <TableCell style={tableCellStyle} sx={{p:0,  width: 200}} >
                        {row.rooms.map((room, index) => (
                          <Box key={room.type+index} sx={{ borderBottom: (index === 0 && row.rooms.length > 1) ? `1px solid #0000001a`: 'none',  }}>  <TableCell align="left" >{room.type}</TableCell> </Box>
                        ))}
                      </TableCell>

                      <TableCell style={tableCellStyle} sx={{p:0}} >
                          {row.rooms.map((room, index) => (
                            <Box width={1} key={room.price+index}  sx={{ borderBottom: (index === 0 && row.rooms.length > 1) ? `1px solid #0000001a`: 'none'  }}>  <TableCell  sx={{p: 0, py: 2 }}>{room.price}</TableCell></Box>
                          ))} 
                      </TableCell>
                      <TableCell style={tableCellStyle} sx={{p:0}} >
                          {row.dollars.map((dollar, index) => (
                            <Box width={1} key={dollar.price+index}  sx={{ borderBottom: (index === 0 && row.dollars.length > 1) ? `1px solid #0000001a`: 'none'  }}>  <TableCell  sx={{p: 0, py: 2 }}>{dollar.price}</TableCell></Box>
                          ))} 
                      </TableCell>

                      <TableCell align="left" style={tableCellStyle}>
                        <a
                          href={row.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {row.link}
                        </a>
                      </TableCell>
                    </TableRow>
                  ))}

                  <TableRow>
                    <TableCell colSpan={6} align="center" sx={{fontWeight: 'bold', fontSize: 20}}> Appartements meublés </TableCell>
                  </TableRow>
                  {rowFurnished.map((row, index) => (
                    <TableRow key={row.name+index}>
                      <TableCell
                        component="th"
                        scope="row"
                        style={tableCellStyle}
                      >
                        {row.na}
                      </TableCell>
                      <TableCell align="left" style={tableCellStyle}>
                        {row.name}
                      </TableCell>
                      <TableCell align="center" style={tableCellStyle} sx={{ width: 100}}>
                        {row.number}
                      </TableCell>

                      <TableCell style={tableCellStyle} sx={{p:0,  width: 200}} >
                        {row.rooms.map((room, index) => (
                          <Box key={room.type+index} sx={{ borderBottom: (index === 1 || row.rooms.length > 2) ? `1px solid #0000001a`: 'none',  }}>  <TableCell align="left" >{room.type}</TableCell> </Box>
                        ))}
                      </TableCell>

                      <TableCell style={tableCellStyle} sx={{p:0}} >
                          {row.rooms.map((room, index) => (
                            <Box width={1} key={room.price+index}  sx={{ borderBottom: (index === 1 || row.rooms.length > 2) ? `1px solid #0000001a`: 'none'  }}>  <TableCell  sx={{p: 0, py: 3.4 }}>{room.price}</TableCell></Box>
                          ))} 
                      </TableCell>
                      <TableCell style={tableCellStyle} sx={{p:0}} >
                          {row.dollars.map((dollar, index) => (
                            <Box width={1} key={dollar.price+index}  sx={{ borderBottom: (index === 1 || row.dollars.length > 2) ? `1px solid #0000001a`: 'none'  }}>  <TableCell  sx={{p: 0, py: 3.4 }}>{dollar.price}</TableCell></Box>
                          ))} 
                      </TableCell>

                      <TableCell align="left" style={tableCellStyle}>
                        <a
                          href={row.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {row.link}
                        </a>
                      </TableCell>
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
