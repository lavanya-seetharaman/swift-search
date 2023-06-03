import React from 'react';
import cardImage from "../assets/card-image.png";
import { Avatar, Stack, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, styled, Typography } from '@mui/material';
import { FavoriteBorderSharp, MoreVert, MapsUgcSharp, SendOutlined, Favorite, Bookmark, BookmarkBorder } from '@mui/icons-material';
import dayjs from 'dayjs';
import relativeTime from "dayjs/plugin/relativeTime";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { storeVideoId } from '../redux/DataSlice';

// const IconButtonEn = styled(IconButton)(() => ({
//     color: "text.primary"
// }))

export const Post = ({setOpenRightBar, values}) => {

  dayjs.extend(relativeTime)
  const dispatch = useDispatch();
  let { description, channelTitle, publishedAt, videoUrl, videoTitle, thumbnails, videoId } = values;
//   console.log(relativeTime);

async function getVideoTrancriptionData(){
    dispatch(storeVideoId(videoId))
    setOpenRightBar(true)
  }


  return (
    <Card 
        onClick={getVideoTrancriptionData}
        elevation={0} 
        sx={{
            display: "flex", 
            flexDirection: "row", 
            p: 1, 
            border: "1px solid #B2B2B2", 
            cursor: "pointer",
            width: "100%"
        }}
    > 
        <CardMedia
            sx={{width: 300, borderRadius: 1}}
            component="img"
            height="150px"
            image={thumbnails.high.url}
            alt="img"
        /> 
        <CardContent>
            <Typography variant='body1' sx={{fontWeight: "bold"}}>
                {videoTitle}
            </Typography>
            <Stack direction="row" alignItems="center" spacing={5}>
                <Typography color="text.secondary" variant="subtitle2">
                    From: {channelTitle}
                </Typography>
                <Typography color="text.secondary" variant="subtitle2">
                    {dayjs().to(dayjs(publishedAt))}
                </Typography>
            </Stack>
            <Typography variant="body2">
                {description}
            </Typography>
            <Link to={videoUrl} target='_blank'><Typography component="span">Watch on Youtube</Typography></Link>
        </CardContent>
    </Card>
  )
}
