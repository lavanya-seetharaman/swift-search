import React from 'react';
import { 
    Box, 
    Typography,
    TextField, 
    Stack,
    Button,
    Card,
    Fab,
    InputAdornment,
    IconButton,
    Alert,
} from '@mui/material';
import raccoonlogo from "../assets/raccoon-stand.png"; 
import { AccountCircle, Visibility, VisibilityOff } from '@mui/icons-material';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from '../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 

export const Register = () => {

  const [hidePassword, setHidePassword] = React.useState(true);
  const [err, setErr] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let username = e.target[0].value;
    let email = e.target[2].value
    let password = e.target[4].value
    let propicFile = e.target[7].files[0]

    try{
      const response = await createUserWithEmailAndPassword(auth, email, password);
      console.log(response);
      const storageRef = ref(storage, username);
      const uploadTask = uploadBytesResumable(storageRef, propicFile);

      uploadTask.on(
        // 'state_changed', 
        // (snapshot) => {
        //   // Observe state change events such as progress, pause, and resume
        //   // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        //   const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        //   console.log('Upload is ' + progress + '% done');
        //   switch (snapshot.state) {
        //     case 'paused':
        //       console.log('Upload is paused');
        //       break;
        //     case 'running':
        //       console.log('Upload is running');
        //       break;
        //   }
        // }, 
        (error) => {
          setErr(true);
        }, 
        async () => {
          getDownloadURL(uploadTask.snapshot.ref).then( async (downloadURL) => {
            // console.log(downloadURL);

            //To update profile picture
            await updateProfile(response.user, {
              displayName: username,
              photoURL: downloadURL
            })

            //To store credentials in database
            await setDoc(doc(db, "users", response.user.uid), {
              uid: response.user.uid,
              username,
              email,
              profilePicURL: downloadURL
            });
          });
        }
      );
      

    }catch(error){
      setErr(true);
      console.log(error);
    }

  }

  return (
    <Box className='signup-box'>
      <Stack direction="row" spacing={1} mb={-0.6} alignItems="center" justifyContent="center">
        <Typography mt={7} sx={{fontFamily: "Diplomata SC", fontSize: "25px"}} variant='h5'>Raccaccoony</Typography>
        <img height={90} width={90} src={raccoonlogo} alt="logo" />
      </Stack>
      <Card sx={{padding: "25px", borderTop: "5px solid black", bgcolor: "white", color: "black"}}>
        <Typography variant='h6' pb={2}>Sign up</Typography>
        <form onSubmit={handleSubmit}>
        <Stack direction="column" spacing={3}>
            <TextField 
              type="text" 
              size='small' 
              label="Username" 
              variant="outlined" 
              color='buttonPrimary' 
              required 
              onChange={() => setErr(false)}
            />
            <TextField 
              type="email" 
              size='small' 
              label="Email" 
              color='buttonPrimary' 
              required
              onChange={() => setErr(false)}
            />
            <TextField
              size='small'
              type={hidePassword ? 'password' : 'text'}
              color="buttonPrimary"
              edge="end"
              required
              onChange={() => setErr(false)}
              InputProps={{
                endAdornment: <InputAdornment position="end">{hidePassword ? 
                  <IconButton onClick={() => setHidePassword(false)}>
                    <VisibilityOff />
                  </IconButton> : 
                  <IconButton onClick={() => setHidePassword(true)}>
                    <Visibility />
                  </IconButton>
                }
                </InputAdornment>,
              }}
              label="Password"
            />
            <label htmlFor="upload-photo">
              <TextField
                sx={{ display: 'none' }}
                id="upload-photo"
                name="upload-photo"
                type="file"
                required
                onChange={() => setErr(false)}
              />

              <Fab
                sx={{
                  backgroundColor: "buttonPrimary.main", 
                  color: "secondary.main",
                  "&:hover": {
                    backgroundColor: "buttonPrimary.light"
                  },
                  textTransform: "Capitalize",
                }} 
                size="small"
                component="span"
                variant="extended"
              >
                <AccountCircle /> Upload profile image
              </Fab>
            </label>
            <Button 
              variant='contained'
              type='submit'
              sx={{
                backgroundColor: "buttonPrimary.main", 
                color: "secondary.main",
                "&:hover": {
                  backgroundColor: "buttonPrimary.light"
                }
              }} 
            >
              Sign up
            </Button> 
            {err && <Alert severity='error' sx={{display: "flex", alignItems: "center", justifyContent: "center"}}>Something went wrong</Alert>}
        </Stack>
        </form>
        <Typography p={2} variant='body1'>Have account already? Login</Typography>
      </Card>
    </Box>
  )
}