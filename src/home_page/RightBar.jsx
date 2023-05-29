import React from 'react';
import { Avatar, AvatarGroup, Box, Card, CardContent, Divider, IconButton, List, ListItem, ListItemAvatar, ListItemText, styled, Typography } from '@mui/material';
import { ArrowForwardIos } from '@mui/icons-material';
import { motion } from "framer-motion";


export const RightBar = ({openRightBar, setOpenRightBar}) => {

  const variants = {
    initial: {
      flexGrow: 0,
      // display: "none",
    },
    animate: {
      flexGrow: 4,
    },
  }

  return (
    <Box
      component={motion.div}
      variants={variants}
      animate={openRightBar ? "animate" : "initial"}
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "primary.light",
        borderLeft: "1px solid #B2B2B2",
        color: "text.primary",
      }} 
      flex={4}
      gap={3}
      px={openRightBar ? 2 : 0}
      py={5}
    >
      {openRightBar && (
        <>
          <Box 
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Typography sx={{fontWeight: "bold"}}>
              Best Nostalgia Video Games Music / Realxing Music Game for Studying, Sleep, Work
            </Typography>
            <IconButton onClick={() => setOpenRightBar(false)}>
              <ArrowForwardIos/>
            </IconButton>
          </Box>

          <Card elevation={0} sx={{p: 2, border: "1px solid #B2B2B2"}}>
              <Typography>Video transcription:</Typography>    
              <Typography color="text.secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad maxime sed facilis delectus eligendi, quod adipisci maiores iusto, minus ipsa labore ab mollitia quas incidunt dignissimos magnam suscipit laudantium in.
              </Typography>
          </Card>

          <Card elevation={0} sx={{p: 2, border: "1px solid #B2B2B2"}}>
              <Typography>Quick summary:</Typography>    
              <Typography color="text.secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad maxime sed facilis delectus eligendi, quod adipisci maiores iusto, minus ipsa labore ab mollitia quas incidunt dignissimos magnam suscipit laudantium in.
              </Typography>
          </Card>
        </>
      )}
    </Box>
  )
}
