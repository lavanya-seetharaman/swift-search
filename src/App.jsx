import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./home_page/NavBar";
import { MainFeed } from "./home_page/MainFeed";
import { RightBar } from "./home_page/RightBar";
import { SideBar } from "./home_page/SideBar";
import {Box, createTheme, Stack, colors, ThemeProvider} from "@mui/material";
import { Login } from "./login/Login";
import { Register } from "./login/Register";

//css
import "./css/style.css"

//Redux
import { useSelector } from "react-redux";
import { MessengerHome } from "./messenger/MessengerHome";

const lightTheme = createTheme({
  status: { //add new property insite theme
    danger: "#f50057",
    warning: "#d500f9"
  },
  palette: {
    mode: "light",
    primary: {
      main: "#FFFFFF",
      light: "#FAFAFA"
    },
    secondary: {
      main: "#FAFAFA"
    },
    buttonPrimary: {
      main: "#e91e63",
      light: "#ec407a"
    },
    text: {
      primary: "#1E1E1E",
      secondary: "#707070",
    },
    // neutral: { //add new property inside palette
    //   light: "#e0e0e0",
    //   dark: "#616161"
    // }
  }
})

const darkTheme = createTheme({
  status: { //add new property inside theme
    danger: "#f50057",
    warning: "#d500f9"
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#1E1E1E",
    },
    secondary: {
      main: "#FAFAFA"
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#bdbdbd",
      black: "#1E1E1E"
    },
    buttonPrimary: {
      main: "#e91e63",
      light: "#ec407a"
    }
    
  }
})


function App() {
  const {mode} = useSelector(state => state);
  const [ openRightBar, setOpenRightBar ] = useState(false);

  return (
    <ThemeProvider theme={ mode ? darkTheme : lightTheme}>
      <Routes>
        <Route path="login" element={<Login/>}/>
        <Route path="signup" element={<Register/>}/>
        <Route path="/" element={
          <>
          <Stack>
            <NavBar></NavBar>
          </Stack>
          <Stack direction="row" sx={{overflowX: "hidden"}}>
            <SideBar></SideBar>
            <MainFeed setOpenRightBar={setOpenRightBar}></MainFeed>
            <RightBar openRightBar={openRightBar} setOpenRightBar={setOpenRightBar}></RightBar>  
          </Stack>
          </>
        }/>
      </Routes>
        {/* <Stack>
          <NavBar></NavBar>
        </Stack>
        <Stack direction="row">
          <SideBar></SideBar> */}
          {/* <MessengerHome></MessengerHome> */}
          {/* <MainFeed></MainFeed> */}
          {/* <RightBar></RightBar> */}
        {/* </Stack> */}
    </ThemeProvider>
  )
}

export default App
