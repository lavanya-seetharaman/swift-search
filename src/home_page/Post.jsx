import React from 'react';
import cardImage from "../assets/card-image.png";
import { Avatar, Stack, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, styled, Typography } from '@mui/material';
import { FavoriteBorderSharp, MoreVert, MapsUgcSharp, SendOutlined, Favorite, Bookmark, BookmarkBorder } from '@mui/icons-material';

// const IconButtonEn = styled(IconButton)(() => ({
//     color: "text.primary"
// }))

export const Post = ({setOpenRightBar}) => {
  return (
    <Card onClick={() => setOpenRightBar(true)} elevation={0} sx={{display: "flex", flexDirection: "row", p: 1, border: "1px solid #B2B2B2", cursor: "pointer"}}> 
        <CardMedia
            sx={{width: 300, borderRadius: 1}}
            component="img"
            height="150px"
            image={cardImage}
            alt="img"
        /> 
        <CardContent>
            <Typography variant='body1' sx={{fontWeight: "bold"}}>
                Best Nostalgia Video Games Music / Realxing Music Game for Studying, Sleep, Work
            </Typography>
            <Typography variant="body2">
                This impressive paella is a perfect party dish and a fun meal to cook
            </Typography>
        </CardContent>
    </Card>
  )
}
