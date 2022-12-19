import { Box, TextField } from '@mui/material'
import React from 'react'

export const SearchUserBar = () => {
  return (
    <Box sx={{
        height: "auto",
        borderBottom: "1px solid #B2B2B2",
        padding: "5px"  
      }}
    >
        <TextField size='small' focused fullWidth placeholder='Find a user...' />
    </Box>
  )
}
