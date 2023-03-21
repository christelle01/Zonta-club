import React from 'react'
import { Box, Paper,  Stack } from '@mui/material';


export default function TabButton({title, value, selected=false, onClick}) {

 const handleClick = () => onClick(value);


  return (
    <Stack alignItems='center'>
        <Box 
            p={2} 
            variant='outlined'
            component={Paper} 
            onClick={handleClick} 
            sx ={{
                 cursor: 'pointer', 
                 ...(selected && {
                    bgcolor: '#802528', 
                    color: 'white'
                }) 
            }}
        >
            {title}
        </Box>
       {selected && (
       <Box 
          variant='outlined'
          component={Paper}  
          sx={{
            mt:-0.1,
            width: 0,
            height: 0,
            borderLeft: "12px solid transparent",
            borderRight: "12px solid transparent",
            borderTop: "15px solid #802528",
         }}
      />)}
    </Stack>
  )
}
