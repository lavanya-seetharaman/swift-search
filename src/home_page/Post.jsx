import React from 'react';
import { Avatar, Stack, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, styled, Typography } from '@mui/material';
import { FavoriteBorderSharp, MoreVert, MapsUgcSharp, SendOutlined, Favorite, Bookmark, BookmarkBorder } from '@mui/icons-material';

// const IconButtonEn = styled(IconButton)(() => ({
//     color: "text.primary"
// }))

export const Post = () => {
  return (
    <Card sx={{ maxWidth: 500 }}> 
        <CardHeader
        avatar={
            <Avatar sx={{bgcolor: "salmon"}} aria-label="recipe">
            O
            </Avatar>
        }
        action={
            <IconButton aria-label="settings">
            <MoreVert />
            </IconButton>
        }
        title="oliver_the_raccoon"
        subheader="November 27, 2022"
        />
        <CardMedia
        component="img"
        height="20%"
        image="https://images.unsplash.com/photo-1601247387326-f8bcb5a234d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
        alt="raccoon"
        />
        <CardActions disableSpacing sx={{display: "flex", justifyContent: "space-between"}}>
        <Stack direction="row">
            <Checkbox icon={<FavoriteBorderSharp sx={{color: "text.primary"}} />} checkedIcon={<Favorite color='error' />}/>
            <IconButton aria-label="add comment">
                <MapsUgcSharp sx={{color: "text.primary"}} />
            </IconButton>
            <IconButton aria-label='share post'>
                <SendOutlined sx={{color: "text.primary"}}/>
            </IconButton>
        </Stack>
        <Stack>
            <Checkbox icon={<BookmarkBorder sx={{color: "text.primary"}} />} checkedIcon={<Bookmark sx={{color: "text.primary"}}/>}/>
        </Stack>
        </CardActions>  
        <CardContent>
        <Typography variant="body2">
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
        </Typography>
        </CardContent>
    </Card>
  )
}
