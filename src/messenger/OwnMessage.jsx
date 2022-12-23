import { Avatar, Box, Stack, Typography } from '@mui/material';
import React from 'react';

export const OwnMessage = () => {
  return (
    <Stack direction="row-reverse" spacing={1} p={1}>
        <Box>
            <Avatar sx={{height: "30px", width: "30px"}} alt="oliver_the_raccoon" src="https://static.boredpanda.com/blog/wp-content/uploads/2021/08/clipimage-611a0de7d6bc7__700.jpg" />
            <Typography variant='caption' component="span" color="text.secondary">Just now</Typography>
        </Box>
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                border: "1px solid #B2B2B2",
                borderRadius: "25px",
                height: "25px",
                width: "auto",
                p: 2,
            }}
        >
            <Typography fontSize={14} variant='subtitle2' color="text.primary" component="p">Nice seeing you Mate!</Typography>
        </Box>
    </Stack>
  )
}