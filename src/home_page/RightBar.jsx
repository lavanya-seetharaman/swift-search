import React from 'react';
import { Avatar, AvatarGroup, Box, Divider, IconButton, List, ListItem, ListItemAvatar, ListItemText, styled, Typography } from '@mui/material';

const AvatarEn = styled(Avatar)(() => ({
  height: 50,
  width: 50,
}))

export const RightBar = () => {
  return (
    <Box 
        sx={{
          display : {
            xs : "none",
            sm : "none",
            md : "block"
          },
          backgroundColor: "primary.main",
          borderLeft: "1px solid primary.light",
          color: "text.primary"
        }} 
        flex={2} 
        px={2}
        py={10}
    >
      <Typography variant='h6'>Your friends online</Typography>
      <Box paddingRight={15} py={2} >
        <AvatarGroup max={5}>
          <AvatarEn alt="Remy Sharp" src="https://i.pinimg.com/originals/8b/22/de/8b22de0690b179400541988a6d8c6de5.jpg" />
          <AvatarEn alt="Travis Howard" src="https://static.boredpanda.com/blog/wp-content/uploads/2021/08/funny-goofy-racoons-pics-raccooncore-611a1adb7924b__700.jpg" />
          <AvatarEn alt="Cindy Baker" src="https://static.boredpanda.com/blog/wp-content/uploads/2020/10/funny-raccoons-301-5f880b3349df0__700.jpg" />
          <AvatarEn alt="Agnes Walker" src="https://i.pinimg.com/736x/96/8b/9a/968b9ae7120aed1130e268632c4b351b.jpg" />
          <AvatarEn alt="Trevor Henderson" src="https://i.pinimg.com/originals/8d/4f/16/8d4f16228f4248197acfa3984a37cbcf.jpg" />
        </AvatarGroup>
      </Box>
      <Typography variant='h6'>Latest Conversations</Typography>
      <Box>
        <List sx={{ width: '100%', maxWidth: 360 }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar> 
              <IconButton size='small'>
              <AvatarEn alt="Remy Sharp" src="https://i.pinimg.com/736x/96/8b/9a/968b9ae7120aed1130e268632c4b351b.jpg" />
              </IconButton>
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Remy Sharp
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <IconButton size='small'>
                <AvatarEn alt="Travis Howard" src="https://i.pinimg.com/originals/8b/22/de/8b22de0690b179400541988a6d8c6de5.jpg" />
              </IconButton>
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Travis Howard
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <IconButton size="small">
                <AvatarEn alt="Cindy Baker" src="https://static.boredpanda.com/blog/wp-content/uploads/2021/08/funny-goofy-racoons-pics-raccooncore-611a1adb7924b__700.jpg" />
              </IconButton>
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {' — Do you have Paris recommendations? Have you ever…'}
                </React.Fragment>
              }
            />
        </ListItem>
      </List>
      </Box>
    </Box>
  )
}
