import React from 'react';
import { Box, Typography, Divider, Avatar, Stack, TextField, IconButton, Button} from '@mui/material/';
import Modal from '@mui/material/Modal';
import { AddLocation, EmojiEmotions, Image, MusicVideo, PersonAddAlt } from '@mui/icons-material';

// const StyleBox = styled(Box)(({theme}) => ({
//   backgroundColor: theme.palette.neutral.dark
// }))
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: "primary.main",
    width: 400,    
    borderRadius: 3,
    boxShadow: 24,
    p: 4,
};

export const CreatePost = ({open, handleClose}) => {
  return (
    <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
          <Typography color="gray" variant="body1">
            Create Post
          </Typography>
          <Divider sx={{margin: "12px 0"}}></Divider>
          <Stack direction="row" spacing={2} alignItems="center">
            <Avatar sx={{height: 55, width: 55}} alt="img" src="https://static.boredpanda.com/blog/wp-content/uploads/2021/08/clipimage-611a0de7d6bc7__700.jpg" />
            <Typography color="text.primary" fontWeight="bold" variant="body1">
                oliver_the_raccoon
            </Typography>
          </Stack>
          <Box py={1}>
            <TextField
                multiline
                rows={3}
                placeholder="What's on your mind?"
                variant="standard"
                fullWidth
            />
          </Box>
          <Stack direction="row" spacing={-1}>
            <IconButton>
                <EmojiEmotions sx={{color: "yellowgreen"}}/>
            </IconButton>
            <IconButton>
                <Image color="buttonPrimary"/>
            </IconButton>
            <IconButton>
                <MusicVideo color='success'/>
            </IconButton>
            <IconButton>
                <AddLocation color='warning'/>
            </IconButton>
            <IconButton>
                <PersonAddAlt sx={{color: "lightskyblue"}}/>
            </IconButton>
          </Stack>
          <Box py={2}>
            <Button 
              onClick={handleClose} 
              sx={{
                backgroundColor: "buttonPrimary.main", 
                color: "secondary.main",
                "&:hover": {
                  backgroundColor: "buttonPrimary.light"
                }
              }} 
              variant="contained" 
              fullWidth
            >
              Post
            </Button>
          </Box>
        </Box>
        
    </Modal>
  )
}
