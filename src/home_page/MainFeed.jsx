import React from 'react';
import { Box, Typography, styled } from '@mui/material';
import { Post } from './Post';
import { useSelector } from 'react-redux';
import { BASE_URL } from '../lib/constants/constants';
import "../css/loader.css";


export const MainFeed = ({setOpenRightBar, youtubeVideoList, searchQuery}) => {
  
  let jsx;

  if(youtubeVideoList.loading){
    jsx = (<div style={{marginTop: "200px"}} className="loader"></div>)
  }

  if(youtubeVideoList.error){
    jsx = (<p>{youtubeVideoList.errorMessage}</p>)
  }

  if(youtubeVideoList.success){
    jsx = youtubeVideoList.data.map(card => (
      <Post 
        key={card.videoId} 
        setOpenRightBar={setOpenRightBar}
        values={card}
      />
    ))
  }

  return (
    <>
    <Box
      flex={6} 
      pt={3}
      pb={10}
      px={{xs : 0, sm : 12}}
      sx={{
          backgroundColor: "primary.light",
          height: "100vh",
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
      {youtubeVideoList.data.length > 0 && (
        <Typography sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "70%",
          mx:  "auto",
          py: 1
        }} variant='body1' color="text.primary">
          Results for Search Query: {searchQuery}
        </Typography>
      )}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "30px",
          // border: "1px solid black",
        }} 
      >
        {jsx}
      </Box>
    </Box>
    </>
  )
}
