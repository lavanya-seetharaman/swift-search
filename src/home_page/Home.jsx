import React from 'react'
import { NavBar } from './NavBar'
import { SideBar } from './SideBar'
import { MainFeed } from './MainFeed'
import { RightBar } from './RightBar'
import { Stack } from '@mui/material'

function Home() {

  const [ openRightBar, setOpenRightBar ] = React.useState(false);
  const [ searchQuery, setSearchQuery ] = React.useState("");
  const [ youtubeVideoList, setYoutubeVideoList ] = React.useState([]);

  return (
    <>
        <Stack>
            <NavBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            ></NavBar>
        </Stack>
        <Stack direction="row" sx={{overflowX: "hidden"}}>
            <SideBar></SideBar>
            <MainFeed 
              setOpenRightBar={setOpenRightBar}
              youtubeVideoList={youtubeVideoList}
              setYoutubeVideoList={setYoutubeVideoList}
              searchQuery={searchQuery}
            ></MainFeed>
            <RightBar openRightBar={openRightBar} setOpenRightBar={setOpenRightBar}></RightBar>  
        </Stack>
    </>
  )
}

export default Home