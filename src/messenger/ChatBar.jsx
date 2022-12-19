import React from 'react';
import { Box, Divider } from '@mui/material';
import { TitleBar } from './TitleBar';
import { SearchUserBar } from './SearchUserBar';
import { ChatList } from './ChatList';

export const ChatBar = () => {
  return (
    <Box
      sx={{
        height: "65%",
        flex: 2,
        border: "1px solid #B2B2B2",
        bgcolor: "primary.main",
        display: "flex",
        flexDirection: "column",
        // gap: "20px"
      }}
    >
      <TitleBar></TitleBar>
      <SearchUserBar></SearchUserBar>
      <ChatList></ChatList>
    </Box>
  )
}
