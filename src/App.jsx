import React, { useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
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
import Home from "./home_page/Home";


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
      main: "#2979ff",
      light: "#82b1ff"
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
      main: "#2979ff",
      light: "#82b1ff"
    }
    
  }
})

function App() {
  const {mode, auth} = useSelector(state => state);

  return (
    <ThemeProvider theme={ mode ? darkTheme : lightTheme}>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/signup" element={<Register/>}/>
        {auth.user_token ? <Route path="/swift-search" element={<Home/>}/> : <Route path="/" element={<Login/>}/>}
      </Routes>
    </ThemeProvider>
  )
}

export default App
