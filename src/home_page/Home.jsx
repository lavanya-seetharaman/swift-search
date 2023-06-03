import React, { useState } from 'react'
import { NavBar } from './NavBar'
import { SideBar } from './SideBar'
import { MainFeed } from './MainFeed'
import { RightBar } from './RightBar'
import { Stack } from '@mui/material'

function Home() {

  const [ openRightBar, setOpenRightBar ] = React.useState(false);
  const [ searchQuery, setSearchQuery ] = React.useState("");
  const [ youtubeVideoList, setYoutubeVideoList ] = React.useState({
    error: false,
    errorMessage: "",
    success: false,
    loading: false,
    data: []
  });

  return (
    <>
        <Stack>
            <NavBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              setYoutubeVideoList={setYoutubeVideoList}
            ></NavBar>
        </Stack>
        <Stack direction="row" sx={{overflowX: "hidden"}}>
            <SideBar></SideBar>
            <MainFeed 
              setOpenRightBar={setOpenRightBar}
              youtubeVideoList={youtubeVideoList}
              searchQuery={searchQuery}
            ></MainFeed>
            <RightBar 
              openRightBar={openRightBar} 
              setOpenRightBar={setOpenRightBar}
              youtubeVideoList={youtubeVideoList}
            ></RightBar>  
        </Stack>
    </>
  )
}

export default Home