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
  const { auth, data: videoDetails } = useSelector(state => state);
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

  console.log(videoTranscript);

  React.useEffect(() => {
    if(videoDetails.video.videoUrl){
      (async () => {
        let raw = JSON.stringify({
          "data": [
            videoDetails.video.videoUrl
          ]
        });
        
        let config = {
          method: 'post',
          maxBodyLength: Infinity,
          url: 'https://lavan2012-free-fast-youtube-url-video-to-text-us-642486d.hf.space/run/transcribetext',
          headers: { 
            'Content-type': 'application/json'
          },
          data : raw
        };
  
        try{
          setTranscriptedString(prev => ({...prev, success: false, loading: false, error: false, errorMessage: "", data: {}}));
          setVideoTranscript(prev => ({...prev, success: false, loading: true, error: false, errorMessage: "", data: {}}));
          let { data, status } = await axios(config);
  
          if(status === 200){
            setVideoTranscript(prev => ({...prev, loading: false, data: data.data[0], success: true}));
          }
        }catch(error){
          setVideoTranscript(prev => ({...prev, loading: false, error: true, errorMessage: "Sorry, An error happened on our side"}));
          console.log(error);
        }
      })()
    }
  }, [videoDetails.video.videoUrl])


  async function summarizeText(){

    let raw = JSON.stringify({ transcribe_txt: videoTranscript.data });

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
            {transcriptedString.data.completion.split("</summary>")[0]}
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
            {videoTranscript.data}
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
              justifyContent: "space-between"
            }}
          >
            <Typography sx={{fontWeight: "bold"}}>
              {videoDetails.video.videoTitle}
            </Typography>
            <IconButton onClick={() => setOpenRightBar(false)}>
              <ArrowForwardIos/>
            </IconButton>
          </Box>

          {transcript}
          
          {videoTranscript.success &&  
            <Button
              disabled={transcriptedString.loading} 
              sx={{color: "white"}} 
              variant='contained' 
              color="buttonPrimary"
              onClick={summarizeText}
            >
              Get Summary
            </Button>}

            {summaryText}
        </>
      )}
    </Box>
  )
}
