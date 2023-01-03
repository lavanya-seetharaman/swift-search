import { Avatar, Box, Chip, Stack, Typography } from '@mui/material';
import React from 'react';

export const OwnMessage = () => {
  return (
    <Stack direction="row-reverse" spacing={1} p={1}>
        <Box>
            <Avatar sx={{height: "30px", width: "30px"}} alt="oliver_the_raccoon" src="https://static.boredpanda.com/blog/wp-content/uploads/2021/08/clipimage-611a0de7d6bc7__700.jpg" />
            <Typography variant='caption' component="span" color="text.secondary">Just now</Typography>
        </Box>
        <Chip label="Hey, Its nice to see you Mate!" sx={{backgroundColor: "buttonPrimary.main", color: "secondary.main"}} />
    </Stack>
  )
}