import React from 'react';
import raccoon from "../assets/raccoon.png";
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
    Divider
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
    gap: "15px",
    borderRadius: theme.shape.borderRadius,
    width: "300px"
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
        <AppBar position='sticky' color='primary'>
            <Toolbar sx={{display: "flex", justifyContent: "space-between"}}>
                <Box display="flex" flexDirection="row" alignItems="center">
                    <IconButton size='small' aria-label='logo' sx={{bgcolor: "white", "&:hover": {bgcolor: "whitesmoke"}}}>
                        <img src={raccoon} alt="img" height="28px" width="28px" />
                    </IconButton>
                    <Typography 
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
                        RACCACOONY
                    </Typography>
                </Box>
                <SearchBar>
                    <SearchOutlined></SearchOutlined>
                    <InputBase placeholder='Search...'></InputBase>
                </SearchBar>
                <Stack direction="row" spacing={4}>
                    <IconButton 
                        sx={{display: {
                            xs : "none",
                            sm : "block",
                            md : "block"
                        }}}
                    >
                        <Badge badgeContent={4} max={10} color="error">
                            <Message sx={{color: "text.primary"}}/>
                        </Badge>
                    </IconButton>
                    <IconButton
                        sx={{display: {
                            xs : "none",
                            sm : "block",
                            md : "block"
                        }}}
                    >
                        <Badge badgeContent={4} max={10} color="error">
                            <Notifications sx={{color: "text.primary"}}/>
                        </Badge>
                    </IconButton>
                    <Box>
                        <IconButton 
                            // aria-controls={openMenu ? "profile-button" : undefined}
                            onClick={handleMenu}
                        >
                            <Avatar src='https://static.boredpanda.com/blog/wp-content/uploads/2021/08/clipimage-611a0de7d6bc7__700.jpg'/>
                        </IconButton>
                        <CreatePost open={openCreateModal} handleClose={() => setOpenCreateModal(false)} />
                        <Menu
                            id="profile-button"
                            aria-labelledby="demo-positioned-button"
                            anchorEl={openMenu}
                            open={Boolean(openMenu)}
                            onClose={() => setOpenMenu(null)}
                            anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                            }}
                            transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                            }}
                            sx={{
                                top: "25px"
                            }}
                        >   
                            {/* <MenuItem onClick={() => setOpenMenu(null)}> */}
                            <List
                                sx={{ 
                                    display : {
                                        xs : "block",
                                        sm : "block",
                                        md : "none"
                                    },
                                    width: '100%', 
                                    maxWidth: 360, 
                                    bgcolor: 'primary',
                                }}
                                component="nav"
                            >
                                <ListItem>
                                    <ListItemButtonEn LinkComponent="a" href='#home'>
                                    <ListItemIconEn>
                                        <Home />
                                    </ListItemIconEn>
                                    <ListItemText primary="Home" />
                                    </ListItemButtonEn>
                                </ListItem>
                                <ListItem>
                                    <ListItemButtonEn>
                                    <ListItemIconEn>
                                        <Search />
                                    </ListItemIconEn>
                                    <ListItemText primary="Search" />
                                    </ListItemButtonEn>
                                </ListItem>
                                <ListItem>
                                    <ListItemButtonEn>
                                    <ListItemIconEn>
                                        <Explore />
                                    </ListItemIconEn>
                                    <ListItemText primary="Explore" />
                                    </ListItemButtonEn>
                                </ListItem>
                                <ListItem>
                                    <ListItemButtonEn>
                                    <ListItemIconEn>
                                        <Message />
                                        <Badge badgeContent={4} color="error"></Badge>
                                    </ListItemIconEn>
                                    <ListItemText primary="Chats" />
                                    </ListItemButtonEn>
                                </ListItem>
                                <ListItem>
                                    <ListItemButtonEn>
                                    <ListItemIconEn>
                                        <Notifications />
                                        <Badge badgeContent={4} color="error"></Badge>
                                    </ListItemIconEn>
                                    <ListItemText primary="Notifications" />
                                    </ListItemButtonEn>
                                </ListItem>
                                <ListItem>
                                    <ListItemButtonEn onClick={() => setOpenCreateModal(true)}>
                                    <ListItemIconEn>
                                        <AddBox />
                                    </ListItemIconEn>
                                    <ListItemText primary="Create" />
                                    </ListItemButtonEn>
                                </ListItem>
                                <ListItem>
                                    <ListItemButtonEn>
                                    <ListItemIconEn>
                                        {mode ? <DarkModeSharp/> : <LightMode/>}
                                    </ListItemIconEn>
                                    <Switch color="default" checked={mode} onChange={() => dispatch(setMode())} />
                                    </ListItemButtonEn>
                                </ListItem>
                            </List>
                            {/* </MenuItem> */}
                            {/* <MenuItem onClick={() => setOpenMenu(null)}>Profile</MenuItem>
                            <MenuItem onClick={() => setOpenMenu(null)}>My account</MenuItem>
                            <MenuItem onClick={() => setOpenMenu(null)}>Logout</MenuItem> */}
                            <Divider sx={{
                                display : {
                                    xs : "block",
                                    sm : "none",
                                    md : "none"
                                }
                            }}></Divider>
                            <List>
                                <ListItem>
                                    <ListItemButtonEn onClick={() => setOpenMenu(null)}>
                                    <ListItemIconEn>
                                        <AccountCircle></AccountCircle>
                                    </ListItemIconEn>
                                    <ListItemText primary="Profile" />
                                    </ListItemButtonEn>
                                </ListItem>
                                <ListItem>
                                    <ListItemButtonEn onClick={() => setOpenMenu(null)}>
                                    <ListItemIconEn>
                                        <ManageAccounts></ManageAccounts>
                                    </ListItemIconEn>
                                    <ListItemText primary="My Account" />
                                    </ListItemButtonEn>
                                </ListItem>
                                <ListItem>
                                    <ListItemButtonEn onClick={() => setOpenMenu(null)}>
                                    <ListItemIconEn>
                                        <Logout></Logout>
                                    </ListItemIconEn>
                                    <ListItemText primary="Logout" />
                                    </ListItemButtonEn>
                                </ListItem>
                            </List>
                        </Menu>
                    </Box>
                </Stack>
            </Toolbar>
        </AppBar>
    </Box>
  )
}
