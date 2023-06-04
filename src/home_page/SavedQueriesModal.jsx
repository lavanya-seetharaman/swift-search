import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { BASE_URL } from '../lib/constants/constants';
import { useSelector } from 'react-redux';
import { IconButton, List, ListItem, ListItemButton, Stack } from '@mui/material';
import "../css/loader.css";
import { Close } from '@mui/icons-material';
import dayjs from 'dayjs';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  height: 500,
  overflowY: "scroll",
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  p: 2,
  '&::-webkit-scrollbar': {
    width: '5px',
  },
  '&::-webkit-scrollbar-track': {
    boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
    webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: 'gray',
    outline: '1px solid slategrey'
  }
};

export default function SavedQueriesModal({setOpenSideBar}) {

  const [open, setOpen] = React.useState(false);
  const { auth } = useSelector(data => data);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [ queryList, setQueryList ] = React.useState(null);
  const [ error, setError ] = React.useState(null);
  const [ loading, setLoading ] = React.useState(false);

  React.useEffect(() => {
    if(open){
        (async () => {

            let data = JSON.stringify({
                "email": auth.user_email
            });
    
            try{
                setLoading(true)
                const response = await axios({
                    method: 'post',
                    maxBodyLength: Infinity,
                    url: `${BASE_URL}/v1/query/getsavedquery`,
                    headers: { 
                        'Content-Type': 'application/json', 
                        'Authorization': `Bearer ${auth.user_token}`
                    },
                    data : data
                })
    
                if(response.status === 200){
                    setLoading(false);
                    setQueryList(response.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
                }
            }catch(error){
                setLoading(false);
                setError(error.response.data.message)
                console.log(error);
            }
        })() 
    }
  }, [open])

  return (
    <div>
      <Box onClick={() => {
        setOpenSideBar();
        handleOpen();
      }}>Saved Queries</Box>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Typography id="transition-modal-title" variant="h6" component="h2" color="text.primary">
                    Saved Queries
                </Typography>
                <IconButton onClick={handleClose}>
                    <Close></Close>
                </IconButton>
            </Stack>
            <Stack>
                <List component="nav" aria-label="main mailbox folders">
                    {loading && <div className="loader"></div>}
                    {!loading && error && <div>{error}</div>}
                    {!loading && queryList && queryList.map(query => (
                        <ListItem key={query._id} sx={{display: "flex", justifyContent: "flex-start", gap: 12}}>
                            <Typography sx={{fontSize: 12}} variant='body1' color="text.primary">{dayjs(query.createdAt).format('DD/MM/YYYY, h:mm a')}</Typography>
                            <Typography sx={{fontSize: 12}} variant='body1' color="text.primary">{query.queryText}</Typography>
                        </ListItem>
                    ))}
                </List>
            </Stack>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}