import React from 'react';
import { Avatar, Box, Fab, InputBase, Stack, TextField, Typography } from '@mui/material';
import { Call, FavoriteBorder, InsertEmoticonOutlined, Photo, Send, Settings, SettingsApplications, VideoCall } from '@mui/icons-material';
import { OppositeMessage } from './OppositeMessage';
import { OwnMessage } from './OwnMessage';
import { OppositeImages } from './OppositeImages';
import { OwnImages } from './OwnImages';


export const ChatBox = () => {
  return (
    <Box
      sx={{
        display: {
          xs: "none",
          sm: "block"
        },
        maxHeight: "630px",
        flex: 3,
        border: "1px solid #B2B2B2",
        bgcolor: "primary.main"
      }}
    >
      <Box sx={{
        height: "10%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid #B2B2B2",
        px: 3
      }}
      >
        <Box sx={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            color: "text.primary",
            gap: "20px",
            padding: "5px"
          }}
        >
          <Box>
            <Avatar sx={{height: "40px", width: "40px"}} alt="rocket_raccoon" src="https://images.immediate.co.uk/production/volatile/sites/3/2019/05/EBC1840_v228.1047-eb60675.jpg?quality=90&resize=980,654" />
          </Box>
          <Stack>
              <Typography variant='h6'>rocket_raccoon</Typography>
              <Typography variant='caption' color="text.secondary">Active yesterday</Typography>
          </Stack>
        </Box>
        <Stack direction="row" spacing={3}>
            <Call sx={{fontSize: "25px", cursor: "pointer", color: "text.primary"}}></Call>
            <VideoCall sx={{fontSize: "25px", cursor: "pointer", color: "text.primary"}}></VideoCall>
            <Settings sx={{fontSize: "25px", cursor: "pointer", color: "text.primary"}}></Settings>
        </Stack>
      </Box>
      <Box sx={{
        height: "80%",
        p: "15px",
        overflowY: "scroll",
        '&::-webkit-scrollbar': {
            width: '1px',
            display: "none"
        },
        '&::-webkit-scrollbar-track': {
            boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
            webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
        }
      }}>
        <OppositeMessage></OppositeMessage>
        <OwnMessage></OwnMessage>
        <OwnMessage></OwnMessage>
        <OwnMessage></OwnMessage>
        <OppositeMessage></OppositeMessage>
        <OppositeMessage></OppositeMessage>
        <OwnMessage></OwnMessage>
        <OppositeMessage></OppositeMessage>
        <OppositeMessage></OppositeMessage>
        <OppositeImages></OppositeImages>
        <OwnImages></OwnImages>

      </Box>
      <Box sx={{
        height: "10%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        borderTop: "1px solid #B2B2B2",
        px: 3,
        gap: "10px"
      }}
      >
        <InsertEmoticonOutlined sx={{cursor: "pointer", color: "text.primary"}}></InsertEmoticonOutlined>
        <Box sx={{
            border: "1px solid #B2B2B2",
            width: "100%",
            borderRadius: "50px",
            py: "5px",
            px: "15px"
          }}
        >
          <InputBase 
            size='small' 
            fullWidth
            placeholder='Message...'
          ></InputBase>
        </Box>

        <label htmlFor="upload-photo" style={{marginTop: "5px"}}>
          <TextField
            sx={{ display: 'none' }}
            id="upload-photo"
            name="upload-photo"
            type="file"
          />
          <Photo sx={{cursor: "pointer", color: "text.primary"}}></Photo>
        </label>
        <FavoriteBorder sx={{cursor: "pointer", color: "text.primary"}}></FavoriteBorder>
        <Send sx={{cursor: "pointer", color: "text.primary"}}></Send>
      </Box>
    </Box>
  )
}
