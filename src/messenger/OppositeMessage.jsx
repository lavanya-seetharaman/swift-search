import { Avatar, Box, Chip, Stack, Typography } from '@mui/material';
import React from 'react';

export const OppositeMessage = () => {
  return (
    <>
    <Stack direction="row" spacing={1} p={1}>
        <Box>
            <Avatar sx={{height: "30px", width: "30px"}} alt="rocket_raccoon" src="https://images.immediate.co.uk/production/volatile/sites/3/2019/05/EBC1840_v228.1047-eb60675.jpg?quality=90&resize=980,654" />
            <Typography variant='caption' component="span" color="text.secondary">Just now</Typography>
        </Box>
        <Chip label="Hi, Hello there" sx={{backgroundColor: "buttonPrimary.main", color: "secondary.main"}} />
    </Stack>
    </>
  )
}
