import React from 'react';
import { Badge, Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, styled, Switch, Drawer} from '@mui/material';
import { Home, Search, Explore, Message, Notifications, AddBox, DarkModeSharp, LightMode } from '@mui/icons-material';
import { CreatePost } from './CreatePost';

//Redux
import { useDispatch, useSelector } from 'react-redux';
import { setMode } from '../redux/Slice';

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

  const [openCreateModal, setOpenCreateModal] = React.useState(false);
  
  return (
    // <Drawer sx={{display : {xs : "block", sm: "none"}}} anchor='left' open={openSideBar} onClose={() => setOpenSideBar(false)}>
    <BoxEn 
      sx={{
        display : {
            xs : "none",
            sm : "none",
            md : "block"
        },  
      }} 
      width="320px"
      px={2}
      py={8}
    >
      <CreatePost open={openCreateModal} handleClose={() => setOpenCreateModal(false)} />
      <List
        sx={{ width: '100%', maxWidth: 360 }}
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
              </ListItemIconEn>
              <ListItemText primary="Chats" />
              <Badge badgeContent={4} color="error"></Badge>
            </ListItemButtonEn>
          </ListItem>
          <ListItem>
            <ListItemButtonEn>
              <ListItemIconEn>
                <Notifications />
              </ListItemIconEn>
              <ListItemText primary="Notifications" />
              <Badge badgeContent={4} color="error"></Badge>
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
                {mode ? <DarkModeSharp/> : <LightMode />}
              </ListItemIconEn>
              <Switch color="default" checked={mode} onChange={() => dispatch(setMode())} />
            </ListItemButtonEn>
          </ListItem>
      </List>
    </BoxEn>
    // </Drawer>
  )
}
