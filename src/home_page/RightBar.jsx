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


  // React.useEffect(() => {
  //   (async () => {

  //     let data = new FormData();
  //     data.append("url", "https://rr7---sn-gwpa-h55e7.googlevideo.com/videoplayback?expire=1685876439&ei=dxp8ZIiGLLiV3LUP2-m1uA0&ip=49.43.249.57&id=o-ADi_0ZLttQrCslzf5pgzpVJ07TjSHoqheGzRtf2VzA5A&itag=251&source=youtube&requiressl=yes&mh=BG&mm=31%2C26&mn=sn-gwpa-h55e7%2Csn-cvhelnls&ms=au%2Conr&mv=m&mvi=7&pl=21&initcwndbps=811250&spc=qEK7BzNgfM7_rn_9TzD9MjgFYfoM_YSBbl10zmtD6w&vprv=1&svpuc=1&mime=audio%2Fwebm&ns=2kmQj2Vxwmfiy5OzUu4jnu8N&gir=yes&clen=1129540&dur=70.541&lmt=1442570144686061&mt=1685854359&fvip=2&keepalive=yes&fexp=24007246%2C24363392%2C51000014&beids=24350018&c=WEB&n=GDQNA7U0EtB8vA&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRgIhAIFS45UipJ6TO2q8ptzjMMfc9uR3Ru0ZPFQRFwLXwMulAiEA_KziUf-0M2VnRspwGSFjIygUFyE97vbT71dMnj-cYD0%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRAIgGLN1pKsyqJa2sSlLBOtz-NJShqLhavzhqFWXDbqtmBwCIDz21VZCVssuQAYpxZ73J8IxkgttNLW5niJmiVBnwbNn");
  //     let config = {
  //       method: "post",
  //       maxBodyLength: Infinity,
  //       url: "https://transcribe.whisperapi.com",
  //       headers: {
  //         Authorization: `Bearer 8W12U3XRLI8ZJSLTY9DTIMCQDLHLDHRX`,
  //       },
  //       data: data,
  //     };

  //     try{
  //       const response = await axios(config);
  //       console.log(response);
  //     }catch(error){
  //       console.log(error);
  //     }
  //     // await axios
  //     //   .request(config)
  //     //   .then((response) => {
  //     //     // result_txt = {
  //     //     //   text: response.data.text,
  //     //     //   language: response.data.language,
  //     //     // };
  //     //     console.log(response);
  //     //   })
  //     //   .catch((error) => {
  //     //     console.log(error);
  //     //     // return error;
  //     //   });
  //     // return result_txt;
  //   })()
  // }, [])

  React.useState(() => {
    (async () => {
      let myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer 8W12U3XRLI8ZJSLTY9DTIMCQDLHLDHRX");

      let formdata = new FormData();
      formdata.append("url", "https://rr7---sn-gwpa-h55e7.googlevideo.com/videoplayback?expire=1685876439&ei=dxp8ZIiGLLiV3LUP2-m1uA0&ip=49.43.249.57&id=o-ADi_0ZLttQrCslzf5pgzpVJ07TjSHoqheGzRtf2VzA5A&itag=251&source=youtube&requiressl=yes&mh=BG&mm=31%2C26&mn=sn-gwpa-h55e7%2Csn-cvhelnls&ms=au%2Conr&mv=m&mvi=7&pl=21&initcwndbps=811250&spc=qEK7BzNgfM7_rn_9TzD9MjgFYfoM_YSBbl10zmtD6w&vprv=1&svpuc=1&mime=audio%2Fwebm&ns=2kmQj2Vxwmfiy5OzUu4jnu8N&gir=yes&clen=1129540&dur=70.541&lmt=1442570144686061&mt=1685854359&fvip=2&keepalive=yes&fexp=24007246%2C24363392%2C51000014&beids=24350018&c=WEB&n=GDQNA7U0EtB8vA&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRgIhAIFS45UipJ6TO2q8ptzjMMfc9uR3Ru0ZPFQRFwLXwMulAiEA_KziUf-0M2VnRspwGSFjIygUFyE97vbT71dMnj-cYD0%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRAIgGLN1pKsyqJa2sSlLBOtz-NJShqLhavzhqFWXDbqtmBwCIDz21VZCVssuQAYpxZ73J8IxkgttNLW5niJmiVBnwbNn");

      let requestOptions = {
        method: 'POST',
        mode: 'cors',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
      };

      fetch("https://transcribe.whisperapi.com", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    })()
  },[])


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
