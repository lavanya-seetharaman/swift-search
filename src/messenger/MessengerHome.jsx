import { Box, Stack } from '@mui/material';
import React from 'react';
import { ChatBar } from './ChatBar';
import { ChatBox } from './ChatBox';

export const MessengerHome = () => {
  return (
    <Stack 
        flex="auto"
        px={15}
        // pb={5}
        pt={2}
        bgcolor="primary.light"
        direction="row"
    >   
        <ChatBox></ChatBox>
        <ChatBar></ChatBar>
    </Stack>
  )
}
