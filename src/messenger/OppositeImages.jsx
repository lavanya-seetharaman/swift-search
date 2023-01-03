import { Avatar, Box, Stack, Typography } from '@mui/material';
import React from 'react';

export const OppositeImages = () => {
  return (
    <Stack 
        direction="row" 
        spacing={1} 
        p={1} 
        sx={{
            display: "flex",
            alignItems: "baseline"
        }}
    >
        <Box>
            <Avatar sx={{height: "30px", width: "30px"}} alt="rocket_raccoon" src="https://images.immediate.co.uk/production/volatile/sites/3/2019/05/EBC1840_v228.1047-eb60675.jpg?quality=90&resize=980,654" />
            <Typography variant='caption' component="span" color="text.secondary">Just now</Typography>
        </Box>
        <Box sx={{
            height: "230px",
            width: "230px",
            overflow: "hidden",
        }}>
          <img style={{
                display: "block",
                height: "100%", 
                width: "100%", 
                objectFit: "cover",
                borderRadius: "10px",
                // margin: "5px"
            }} 
            src="https://images.immediate.co.uk/production/volatile/sites/3/2019/05/EBC1840_v228.1047-eb60675.jpg?quality=90&resize=980,654" 
            alt="img" 
          />
        </Box>
    </Stack>
  )
}
