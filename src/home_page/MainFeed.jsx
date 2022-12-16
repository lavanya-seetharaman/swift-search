import React from 'react';
import { Box, styled } from '@mui/material';
import { Post } from './Post';

// const BoxEn = styled(Box)(({theme}) => ({
//   backgroundColor: theme.status.danger
// }))
export const MainFeed = () => {
  return (
    <>
    <Box
      flex={6} 
      pt={5}
      pb={20}
      px={{xs : 0, sm : 2}}
      sx={{
          backgroundColor: "primary.light",
          height: "110vh",
          overflowY: "scroll",
          '&::-webkit-scrollbar': {
            width: '5px',
          },
          '&::-webkit-scrollbar-track': {
            boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
            webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'gray',
            outline: '1px solid slategrey'
          }
        }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "30px",
        }} 
      >
        <Post/>
        <Post/>
        <Post/>
      </Box>
    </Box>
    </>
  )
}
