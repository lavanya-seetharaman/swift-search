import { Avatar, Box, Stack, Typography } from '@mui/material';
import React from 'react';

export const OwnImages = () => {
  return (
    <Stack 
        direction="row-reverse" 
        spacing={1} 
        p={1} 
        sx={{
            display: "flex",
            alignItems: "baseline"
        }}
    >
        <Box>
            <Avatar sx={{height: "30px", width: "30px"}} alt="oliver_the_raccoon" src="https://static.boredpanda.com/blog/wp-content/uploads/2021/08/clipimage-611a0de7d6bc7__700.jpg" />
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
            src="https://static.boredpanda.com/blog/wp-content/uploads/2021/08/clipimage-611a0de7d6bc7__700.jpg" 
            alt="img" 
          />
        </Box>
    </Stack>
  )
}
