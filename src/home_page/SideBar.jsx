import React, { useState } from 'react';
import { Badge, Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, styled, Switch, Drawer, IconButton, Avatar, Typography, Tooltip} from '@mui/material';
import { Home, Search, Explore, Message, Notifications, AddBox, DarkModeSharp, LightMode, Album, FormatColorFill, TextFields, QueryStats, Logout, ArrowForwardIos } from '@mui/icons-material';
import { CreatePost } from './CreatePost';
import { motion } from "framer-motion"; 

//Redux
import { useDispatch, useSelector } from 'react-redux';
import { setMode } from '../redux/Slice';
import { reset } from '../redux/AuthSlice';
import { useNavigate } from 'react-router-dom';

const ListItemIconEn = styled(ListItemIcon)(({theme}) => ({
  color: theme.palette.text.primary,
}))
const ListItemButtonEn = styled(ListItemButton)(({theme}) => ({
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.primary.main,
  "&:hover" : {
    backgroundColor: theme.palette.primary.light
  },
  borderRadius: "50px",
}))

const BoxEn = styled(Box)(({theme}) => ({
  backgroundColor: theme.palette.primary.main,
  borderRight : `1px solid #B2B2B2`,
  height: "100vh"
}))

export const SideBar = () => {
  const {mode} = useSelector(state => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [ openSideBar, setOpenSideBar ] = useState(false);

  
  return (
    // <Drawer sx={{display : {xs : "block", sm: "none"}}} anchor='left' open={openSideBar} onClose={() => setOpenSideBar(false)}>
    <Box
      component={motion.div}
      initial={{
        width: "122px"
      }}
      whileHover={{
        width: "270px"
      }}
      onMouseEnter={() => setOpenSideBar(true)}
      onMouseLeave={() => setOpenSideBar(false)} 
      sx={{
        display : {
            xs : "none",
            sm : "none",
            md : "flex"
        },
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
        backgroundColor: "primary.main",
        borderRight : `1px solid #B2B2B2`,
        height: "100vh",
        width: "100px"  
      }} 
      // px={2}
      py={8}
    >
      <Box>
        <Avatar sx={{mx: "auto", height: openSideBar ? 100 : 50, width: openSideBar ? 100 : 50}}/>
        <Typography sx={{textAlign: "center", visibility: openSideBar ? "visible" : "hidden"}} color="text.primary">username</Typography>
        <Typography sx={{textAlign: "center", visibility: openSideBar ? "visible" : "hidden"}} color="text.primary">user@gmail.com</Typography>
      </Box>
      <List
        component="nav"
      >
          <ListItem>
            <ListItemButtonEn>
              <ListItemIconEn>
                <QueryStats/>
              </ListItemIconEn>
              <ListItemText 
                sx={{
                  display: openSideBar ? "inline" : "none",
                  clear: "both",
                  overflow: "hidden",
                  whiteSpace: "nowrap"
                }} 
                primary="Saved query" />
            </ListItemButtonEn>
          </ListItem>
          <ListItem>
            <ListItemButtonEn>
              <ListItemIconEn>
                <TextFields />
              </ListItemIconEn>
              <ListItemText sx={{
                  display: openSideBar ? "inline" : "none",
                  clear: "both",
                  overflow: "hidden",
                  whiteSpace: "nowrap"
                }}  
                primary="Saved text" 
              />
            </ListItemButtonEn>
          </ListItem>
          <ListItem>
            <ListItemButtonEn>
              <ListItemIconEn>
                <Album/>
              </ListItemIconEn>
              <ListItemText
                sx={{
                  display: openSideBar ? "inline" : "none",
                  clear: "both",
                  overflow: "hidden",
                  whiteSpace: "nowrap"
                }}  
                primary="Saved audio" 
              />
            </ListItemButtonEn>
          </ListItem>
          <ListItem>
            <ListItemButtonEn>
              <ListItemIconEn>
                {mode ? <DarkModeSharp/> : <LightMode />}
              </ListItemIconEn>
              <Switch sx={{visibility: openSideBar ? "visible" : "hidden"}} color="default" checked={mode} onChange={() => dispatch(setMode())} />
            </ListItemButtonEn>
          </ListItem>
      </List>
      <List>
        <ListItem>
            <ListItemButtonEn onClick={() => {
              dispatch(reset())
              navigate("/", { replace: true })
            }
            }>
              <ListItemIconEn>
                <Logout/>
              </ListItemIconEn>
              <ListItemText sx={{display: openSideBar ? "bock" : "none"}} primary="Logout" />
            </ListItemButtonEn>
          </ListItem>
      </List>
      {/* <Box sx={{
        position: "absolute",
        right: -15,
        bottom: "110px",
        
      }}>
        <IconButton size='small' sx={{
          backgroundColor: "white",
          boxShadow: 1,
          "&:hover": {
            backgroundColor: "white",
          }
        }}>
          <ArrowForwardIos sx={{ color: "text.primary"}}/>
        </IconButton>
      </Box> */}
    </Box>
    // </Drawer>
  )
}
