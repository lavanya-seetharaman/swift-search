import { KeyboardArrowDown } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import React from 'react'

export const TitleBar = () => {
  return (
    <Box sx={{
        height: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderBottom: "1px solid #B2B2B2",
        padding: "15px"
      }}
    >
      <Box sx={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          color: "text.primary"
        }}
      >
        <Typography variant='h6' component="span">
          oliver_the_raccoon 
        </Typography>
        <KeyboardArrowDown></KeyboardArrowDown>
      </Box>
    </Box>
  )
}
