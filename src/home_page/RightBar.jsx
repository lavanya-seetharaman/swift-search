import React from 'react';
import { Avatar, AvatarGroup, Box, Button, Card, CardContent, Divider, IconButton, List, ListItem, ListItemAvatar, ListItemText, styled, Typography } from '@mui/material';
import { ArrowForwardIos } from '@mui/icons-material';
import { motion } from "framer-motion";
import axios from 'axios';
import { useSelector } from 'react-redux';
import { BASE_URL } from '../lib/constants/constants';
import "../css/loader.css";


export const RightBar = ({openRightBar, setOpenRightBar, youtubeVideoList}) => {

  const variants = {
    initial: {
      flexGrow: 0,
      // display: "none",
    },
    animate: {
      flexGrow: 4,
    },
  }
  const { auth, data: videoId } = useSelector(state => state);
  const [ videoTranscript, setVideoTranscript ] = React.useState({
    error: false,
    errorMessage: "",
    success: false,
    loading: false,
    data: {}
  })
  const [ transcriptedString, setTranscriptedString ] = React.useState({
    error: false,
    errorMessage: "",
    success: false,
    loading: false,
    data: {}
  });


  // React.useEffect(() => {
  //   (async () => {
  //     // let raw = JSON.stringify({videoId: videoId.videoId})
  //     try{
  //       setVideoTranscript(prev => ({...prev, success: false, loading: true, error: false, errorMessage: "", data: {}}));
  //       const { data, status } = await axios({
  //         method: 'post',
  //         maxBodyLength: Infinity,
  //         url: `${BASE_URL}/v1/getaudio`,
  //         headers: { 
  //           'Authorization': `Bearer ${auth.user_token}`
  //         },
  //         data : {videoId: videoId.videoId}
  //       })

  //       if(status === 200){
  //         setTranscriptedString(prev => ({...prev, loading: false, data: data, success: true}));
  //       }
  //     }catch(error){
  //       setTranscriptedString(prev => ({...prev, loading: false, error: true, errorMessage: error.response.data.message}));
  //       console.log(error);
  //     }
  //   })()
  // }, [videoId.videoId]);


  async function summarizeText(text){

    let raw = JSON.stringify({ transcribe_txt: text });

    try{
      setTranscriptedString(prev => ({...prev, success: false, loading: true, error: false, errorMessage: "", data: {}}));
      const { data, status } = await axios({
        method: 'post',
        maxBodyLength: Infinity,
        url: `${BASE_URL}/v1/getsummary`,
        headers: { 
          'Content-Type': 'application/json', 
          'Authorization': `Bearer ${auth.user_token}`
        },
        data : raw
      })

      if(status === 200){
        setTranscriptedString(prev => ({...prev, loading: false, data: data, success: true}));
      }
    }catch(error){
      setTranscriptedString(prev => ({...prev, loading: false, error: true, errorMessage: error.response.data.message}));
      console.log(error);
    }
  }


  let summaryText;

  if(transcriptedString.loading){
    summaryText = (<div className="loader"></div>)
  }
  
  if(transcriptedString.error){
    summaryText = (<Typography variant='subtitle2'>{transcriptedString.errorMessage}</Typography>)
  }

  if(transcriptedString.success){
    summaryText = (
      <Box 
        sx={{
          p: 2, 
          border: "1px solid #B2B2B2",
          backgroundColor: "primary.main"

        }}
      >
          <Typography>Quick summary:</Typography>    
          <Typography color="text.secondary">
            {transcriptedString.data.completion}
          </Typography>
      </Box>)
  }


  let transcript = "";

  if(videoTranscript.loading){
    transcript = (<div className="loader"></div>)
  }

  if(videoTranscript.error){
    transcript = (<Typography variant='subtitle2'>{videoTranscript.errorMessage}</Typography>)

  }

  if(videoTranscript.success){
    transcript = (
      <Box 
        sx={{
          p: 2, 
          border: "1px solid #B2B2B2",
          backgroundColor: "primary.main"

        }}
      >
          <Typography>Video transcription:</Typography>    
          <Typography color="text.secondary">
            {videoTranscript.data.text}
          </Typography>
      </Box>)
  }

  return (
    <Box
      component={motion.div}
      variants={variants}
      animate={openRightBar ? "animate" : "initial"}
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "primary.light",
        borderLeft: "1px solid #B2B2B2",
        maxHeight: "90vh",
        color: "text.primary",
        overflowY: "scroll", 
        position: "relative",
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
      flex={4}
      gap={3}
      px={openRightBar ? 2 : 0}
      py={5}
    >
      {openRightBar && (
        <>
          <Box 
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Typography sx={{fontWeight: "bold"}}>
              Best Nostalgia Video Games Music / Realxing Music Game for Studying, Sleep, Work
            </Typography>
            <IconButton onClick={() => setOpenRightBar(false)}>
              <ArrowForwardIos/>
            </IconButton>
          </Box>

          {transcript}
          
          <Button 
            sx={{color: "white"}} 
            variant='contained' 
            color="buttonPrimary"
            onClick={() => summarizeText("The first step before anybody else in the world believes it is you have to believe it. There's no reason to have a plan B because it distracts from plan A. I think that there's a certain delusional quality that all successful people have to have. You have to believe that something different than what has happened for the last fifty years of history. You have to believe that something different can happen. Confucius said he who says he can and he who says he can't are both usually right.")}
          >
            Summarize it
          </Button>

          {summaryText}
        </>
      )}
    </Box>
  )
}
