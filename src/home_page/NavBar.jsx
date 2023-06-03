import React from 'react';
import swiftSearchLogo from "../assets/swift-search-logos_black.png"
import { 
    Box,
    Stack,
    AppBar, 
    Toolbar, 
    IconButton, 
    Typography, 
    styled, 
    InputBase,
    Badge,
    Avatar,
    Menu,
    MenuItem, 
    List,
    ListItem,
    ListItemIcon,
    ListItemButton,
    ListItemText,
    Switch,
    Divider,
    Tooltip
} from '@mui/material';
import { 
    SearchOutlined, 
    Message,
    Notifications,
    Home,
    Search,
    Explore,
    AddBox,
    DarkModeSharp,
    ManageAccounts,
    AccountCircle,
    Logout,
    LightMode,
    MicNone,
} from '@mui/icons-material';
import { CreatePost } from './CreatePost';

//Redux
import { useDispatch, useSelector } from 'react-redux';
import { setMode } from '../redux/Slice';
import axios from 'axios';
import { BASE_URL } from '../lib/constants/constants';

const SearchBar = styled("div")(({theme}) => ({
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.text.primary,
    padding: "0 10px",
    display: "flex",
    alignItems: "center",
    borderRadius: theme.shape.borderRadius,
    width: 500,
    height: 50,
    border: "1px solid #B2B2B2"
}))

const ListItemIconEn = styled(ListItemIcon)(({theme}) => ({
    color: theme.palette.text.primary,
  }))
  const ListItemButtonEn = styled(ListItemButton)(() => ({
    borderRadius: "50px",
  }))

export const NavBar = ({searchQuery, setSearchQuery, setYoutubeVideoList}) => {

  const { mode, auth } = useSelector(state => state);
  const dispatch = useDispatch();

  const getYoutubeVideoList = async () => {
    if(searchQuery && searchQuery.length !== 0){
        try{
            setYoutubeVideoList(prev => ({...prev, success: false, loading: true, error: false, errorMessage: "", data: []}));
            const { data, status } = await axios({
                method: 'post',
                maxBodyLength: Infinity,
                url: `${BASE_URL}/v1/search`,
                headers: { 
                    'Authorization': `Bearer ${auth.user_token}`
                },
                data: {
                    email: auth.user_email,
                    searchQuery
                }
            })
    
            // console.log(response);
            if(status === 200){
                setYoutubeVideoList(prev => ({...prev, loading: false, data: data, success: true}));
            }
        }catch(error){
            setYoutubeVideoList(prev => ({...prev, loading: false, error: true, errorMessage: error.response.data.message}));
            console.log(error);
        }
    } 
  }

  return (
    <Box>
        <AppBar elevation={0} sx={{borderBottom: "1px solid #B2B2B2"}} position='sticky' color='primary'>
            <Toolbar sx={{display: "flex", justifyContent: "space-between"}}>
                <Box display="flex" flexDirection="row" alignItems="center">
                    <Box sx={{
                        height: 80,
                        width: 300,
                        overflow: "hidden",
                        
                        // border: "1px solid black"
                    }}>
                        <img style={{
                            height: "100%",
                            width: "100%",
                            objectFit: "cover",
                            filter: mode ? "invert(100%)"  : "invert(0)"
                        }} src={swiftSearchLogo} alt="img" />
                    </Box>
                </Box>
                <Box sx={{
                    display: "flex",
                    gap: 2,
                    marginRight: 50,
                }}>
                    <SearchBar>
                        <InputBase 
                            sx={{width: "100%"}} 
                            placeholder='Search...'
                            value={searchQuery}
                            onChange={(e) => {setSearchQuery(e.target.value)}}
                            onKeyUp={(e) => {
                                if(e.key === "Enter"){
                                    getYoutubeVideoList()
                                }
                            }}
                        ></InputBase>
                        <IconButton onClick={getYoutubeVideoList}>
                            <SearchOutlined/>
                        </IconButton>
                    </SearchBar>
                    <Tooltip title="audio transcription">
                        <IconButton size='large' sx={{color: "text.primary"}}>
                            <MicNone/> 
                        </IconButton>
                    </Tooltip>
                </Box>
            </Toolbar>
        </AppBar>
    </Box>
  )
}
