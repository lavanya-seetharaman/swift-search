import { Avatar, Box, Divider, List, ListItem, ListItemAvatar, ListItemText, styled, Typography } from '@mui/material'
import React from 'react';

const ListItemStyled = styled(ListItem)(({theme}) => ({
    cursor: "pointer", 
    '&:hover': {
        backgroundColor: theme.palette.primary.light
    }
}))

const ListBox = styled(List)(({theme}) => ({
    backgroundColor: theme.palette.primary.main,
    height: "auto", 
    overflowY: "scroll",
    '&::-webkit-scrollbar': {
        width: '1px',
        display: "none"
    },
    '&::-webkit-scrollbar-track': {
        boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
        webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
    },
}))

export const ChatList = () => {
  return (
        <ListBox>
            <ListItemStyled alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar sx={{height: "60px", width: "60px"}} alt="rocket_raccoon" src="https://images.immediate.co.uk/production/volatile/sites/3/2019/05/EBC1840_v228.1047-eb60675.jpg?quality=90&resize=980,654" />
                </ListItemAvatar>
                <ListItemText sx={{color: "text.primary", margin: "12px"}}
                primary="rocket_raccoon"
                secondary={
                    <React.Fragment>
                        Active yesterday
                    </React.Fragment>
                }
                />
            </ListItemStyled>
            <Divider component="li" />
            <ListItemStyled alignItems="flex-start">
                <ListItemAvatar>
                <Avatar sx={{height: "60px", width: "60px"}} alt="sylvie_01" src="https://i.pinimg.com/736x/9a/08/78/9a0878e6efe3d48871aba4717247a11c.jpg" />
                </ListItemAvatar>
                <ListItemText sx={{color: "text.primary", margin: "12px"}}
                primary="sylvie_01"
                secondary={
                    <React.Fragment>
                        Wish I could come... - 3w
                    </React.Fragment>
                }
                />
            </ListItemStyled>
            <Divider component="li" />
            <ListItemStyled alignItems="flex-start">
                <ListItemAvatar>
                <Avatar sx={{height: "60px", width: "60px"}} alt="your_pal_paul" src="https://static.boredpanda.com/blog/wp-content/uploads/2021/08/funny-goofy-racoons-pics-raccooncore-611a1adb7924b__700.jpg" />
                </ListItemAvatar>
                <ListItemText sx={{color: "text.primary", margin: "12px"}}
                primary="your_pal_paul"
                secondary={
                    <React.Fragment>
                        Active 5m ago
                    </React.Fragment>
                }
                />
            </ListItemStyled>
            <Divider component="li" />
            <ListItemStyled alignItems="flex-start">
                <ListItemAvatar>
                <Avatar sx={{height: "60px", width: "60px"}} alt="lady_kat" src="https://i.pinimg.com/736x/f3/bc/35/f3bc355ccf5a9a56b3ffd19fdf9691ea.jpg" />
                </ListItemAvatar>
                <ListItemText sx={{color: "text.primary", margin: "12px"}}
                primary="lady_kat"
                secondary={
                    <React.Fragment>
                        When you will be arriving? - 1d
                    </React.Fragment>
                }
                />
            </ListItemStyled>
            <Divider component="li" />
            <ListItemStyled alignItems="flex-start">
                <ListItemAvatar>
                <Avatar sx={{height: "60px", width: "60px"}} alt="hecker" src="" />
                </ListItemAvatar>
                <ListItemText sx={{color: "text.primary", margin: "12px"}}
                primary="hecker"
                secondary={
                    <React.Fragment>
                        Yeah, Totally! - 1hr
                    </React.Fragment>
                }
                />
            </ListItemStyled>
            <Divider component="li" />
            <ListItemStyled alignItems="flex-start">
                <ListItemAvatar>
                <Avatar sx={{height: "60px", width: "60px"}} alt="Cindy Baker" src="" />
                </ListItemAvatar>
                <ListItemText sx={{color: "text.primary", margin: "12px"}}
                primary="your_pal_paul"
                secondary={
                    <React.Fragment>
                        Active 5m ago
                    </React.Fragment>
                }
                />
            </ListItemStyled>
            <Divider component="li" />
            <ListItemStyled alignItems="flex-start">
                <ListItemAvatar>
                <Avatar sx={{height: "60px", width: "60px"}} alt="Cindy Baker" src="" />
                </ListItemAvatar>
                <ListItemText sx={{color: "text.primary", margin: "12px"}}
                primary="your_pal_paul"
                secondary={
                    <React.Fragment>
                        Active 5m ago
                    </React.Fragment>
                }
                />
            </ListItemStyled>
            <Divider component="li" />
            <ListItemStyled alignItems="flex-start">
                <ListItemAvatar>
                <Avatar sx={{height: "60px", width: "60px"}} alt="Cindy Baker" src="" />
                </ListItemAvatar>
                <ListItemText sx={{color: "text.primary", margin: "12px"}}
                primary="your_pal_paul"
                secondary={
                    <React.Fragment>
                        Active 5m ago
                    </React.Fragment>
                }
                />
            </ListItemStyled>
            <Divider component="li" />
            <ListItemStyled alignItems="flex-start">
                <ListItemAvatar>
                <Avatar sx={{height: "60px", width: "60px"}} alt="Cindy Baker" src="" />
                </ListItemAvatar>
                <ListItemText sx={{color: "text.primary", margin: "12px"}}
                primary="your_pal_paul"
                secondary={
                    <React.Fragment>
                        Active 5m ago
                    </React.Fragment>
                }
                />
            </ListItemStyled>
            <Divider component="li" />
            <ListItemStyled alignItems="flex-start">
                <ListItemAvatar>
                <Avatar sx={{height: "60px", width: "60px"}} alt="Cindy Baker" src="" />
                </ListItemAvatar>
                <ListItemText sx={{color: "text.primary", margin: "12px"}}
                primary="your_pal_paul"
                secondary={
                    <React.Fragment>
                        Active 5m ago
                    </React.Fragment>
                }
                />
            </ListItemStyled>
            <Divider component="li" />
            <ListItemStyled alignItems="flex-start">
                <ListItemAvatar>
                <Avatar sx={{height: "60px", width: "60px"}} alt="Cindy Baker" src="" />
                </ListItemAvatar>
                <ListItemText sx={{color: "text.primary", margin: "12px"}}
                primary="your_pal_paul"
                secondary={
                    <React.Fragment>
                        Active 5m ago
                    </React.Fragment>
                }
                />
            </ListItemStyled>
            <Divider component="li" />
            <ListItemStyled alignItems="flex-start">
                <ListItemAvatar>
                <Avatar sx={{height: "60px", width: "60px"}} alt="Cindy Baker" src="" />
                </ListItemAvatar>
                <ListItemText sx={{color: "text.primary", margin: "12px"}}
                primary="your_pal_paul"
                secondary={
                    <React.Fragment>
                        Active 5m ago
                    </React.Fragment>
                }
                />
            </ListItemStyled>
            <Divider component="li" />
            <ListItemStyled alignItems="flex-start">
                <ListItemAvatar>
                <Avatar sx={{height: "60px", width: "60px"}} alt="Cindy Baker" src="" />
                </ListItemAvatar>
                <ListItemText sx={{color: "text.primary", margin: "12px"}}
                primary="your_pal_paul"
                secondary={
                    <React.Fragment>
                        Active 5m ago
                    </React.Fragment>
                }
                />
            </ListItemStyled>
            <Divider component="li" />
            <ListItemStyled alignItems="flex-start">
                <ListItemAvatar>
                <Avatar sx={{height: "60px", width: "60px"}} alt="Cindy Baker" src="" />
                </ListItemAvatar>
                <ListItemText sx={{color: "text.primary", margin: "12px"}}
                primary="your_pal_paul"
                secondary={
                    <React.Fragment>
                        Active 5m ago
                    </React.Fragment>
                }
                />
            </ListItemStyled>
            <Divider component="li" />
            <ListItemStyled alignItems="flex-start">
                <ListItemAvatar>
                <Avatar sx={{height: "60px", width: "60px"}} alt="Cindy Baker" src="" />
                </ListItemAvatar>
                <ListItemText sx={{color: "text.primary", margin: "12px"}}
                primary="your_pal_paul"
                secondary={
                    <React.Fragment>
                        Active 5m ago
                    </React.Fragment>
                }
                />
            </ListItemStyled>
            <Divider component="li" />
            <ListItemStyled alignItems="flex-start">
                <ListItemAvatar>
                <Avatar sx={{height: "60px", width: "60px"}} alt="Cindy Baker" src="" />
                </ListItemAvatar>
                <ListItemText sx={{color: "text.primary", margin: "12px"}}
                primary="your_pal_paul"
                secondary={
                    <React.Fragment>
                        Active 5m ago
                    </React.Fragment>
                }
                />
            </ListItemStyled>
            <Divider component="li" />
            <ListItemStyled alignItems="flex-start">
                <ListItemAvatar>
                <Avatar sx={{height: "60px", width: "60px"}} alt="Cindy Baker" src="" />
                </ListItemAvatar>
                <ListItemText sx={{color: "text.primary", margin: "12px"}}
                primary="your_pal_paul"
                secondary={
                    <React.Fragment>
                        Active 5m ago
                    </React.Fragment>
                }
                />
            </ListItemStyled>
            <Divider component="li" />
            <ListItemStyled alignItems="flex-start">
                <ListItemAvatar>
                <Avatar sx={{height: "60px", width: "60px"}} alt="Cindy Baker" src="" />
                </ListItemAvatar>
                <ListItemText sx={{color: "text.primary", margin: "12px"}}
                primary="your_pal_paul"
                secondary={
                    <React.Fragment>
                        Active 5m ago
                    </React.Fragment>
                }
                />
            </ListItemStyled>
            <Divider component="li" />
            <ListItemStyled alignItems="flex-start">
                <ListItemAvatar>
                <Avatar sx={{height: "60px", width: "60px"}} alt="Cindy Baker" src="" />
                </ListItemAvatar>
                <ListItemText sx={{color: "text.primary", margin: "12px"}}
                primary="your_pal_paul"
                secondary={
                    <React.Fragment>
                        Active 5m ago
                    </React.Fragment>
                }
                />
            </ListItemStyled>
            <Divider component="li" />
            <ListItemStyled alignItems="flex-start">
                <ListItemAvatar>
                <Avatar sx={{height: "60px", width: "60px"}} alt="Cindy Baker" src="" />
                </ListItemAvatar>
                <ListItemText sx={{color: "text.primary", margin: "12px"}}
                primary="your_pal_paul"
                secondary={
                    <React.Fragment>
                        Active 5m ago
                    </React.Fragment>
                }
                />
            </ListItemStyled>
            <Divider component="li" />
            <ListItemStyled alignItems="flex-start">
                <ListItemAvatar>
                <Avatar sx={{height: "60px", width: "60px"}} alt="Cindy Baker" src="" />
                </ListItemAvatar>
                <ListItemText sx={{color: "text.primary", margin: "12px"}}
                primary="your_pal_paul"
                secondary={
                    <React.Fragment>
                        Active 5m ago
                    </React.Fragment>
                }
                />
            </ListItemStyled>
            <Divider component="li" />
            <ListItemStyled alignItems="flex-start">
                <ListItemAvatar>
                <Avatar sx={{height: "60px", width: "60px"}} alt="Cindy Baker" src="" />
                </ListItemAvatar>
                <ListItemText sx={{color: "text.primary", margin: "12px"}}
                primary="your_pal_paul"
                secondary={
                    <React.Fragment>
                        Active 5m ago
                    </React.Fragment>
                }
                />
            </ListItemStyled>
            <Divider component="li" />
            <ListItemStyled alignItems="flex-start">
                <ListItemAvatar>
                <Avatar sx={{height: "60px", width: "60px"}} alt="Cindy Baker" src="" />
                </ListItemAvatar>
                <ListItemText sx={{color: "text.primary", margin: "12px"}}
                primary="your_pal_paul"
                secondary={
                    <React.Fragment>
                        Active 5m ago
                    </React.Fragment>
                }
                />
            </ListItemStyled>
            <Divider component="li" />
            <ListItemStyled alignItems="flex-start">
                <ListItemAvatar>
                <Avatar sx={{height: "60px", width: "60px"}} alt="Cindy Baker" src="" />
                </ListItemAvatar>
                <ListItemText sx={{color: "text.primary", margin: "12px"}}
                primary="your_pal_paul"
                secondary={
                    <React.Fragment>
                        Active 5m ago
                    </React.Fragment>
                }
                />
            </ListItemStyled>
            <Divider component="li" />

        </ListBox>
  )
}
