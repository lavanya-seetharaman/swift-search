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

export const NavBar = () => {
  const [openMenu, setOpenMenu] = React.useState(null);
  const [openCreateModal, setOpenCreateModal] = React.useState(false);
  const {mode} = useSelector(state => state);
  const dispatch = useDispatch();

  const handleMenu = (event) => {
    // console.log(event.currentTarget);
    setOpenMenu(event.currentTarget);
  }
  return (
    <Box>
        <AppBar elevation={0} sx={{borderBottom: "1px solid #B2B2B2"}} position='sticky' color='primary'>
            <Toolbar sx={{display: "flex", justifyContent: "space-between"}}>
                <Box display="flex" flexDirection="row" alignItems="center">
                    {/* <IconButton size='small' aria-label='logo' sx={{bgcolor: "white", "&:hover": {bgcolor: "whitesmoke"}}}>
                        <img src={raccoon} alt="img" height="28px" width="28px" />
                    </IconButton> */}
                    {/* <Typography 
                        variant='h5' 
                        fontFamily="monospace"
                        sx={{
                            color: "primary",
                            display: {
                                xs : "none",
                                sm : "block",
                                md : "block"
                            }
                        }}
                    >
                        SWIFT SEARCH
                    </Typography> */}
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
                        <SearchOutlined></SearchOutlined>
                        <InputBase sx={{width: "100%"}} placeholder='Search...'></InputBase>
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
