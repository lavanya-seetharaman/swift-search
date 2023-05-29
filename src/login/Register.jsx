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
import { AccountCircle, Visibility, VisibilityOff } from '@mui/icons-material';

export const Register = () => {

  const [hidePassword, setHidePassword] = React.useState(true);
  const [ hideConfirmPassword, setHideConfirmPassword ] = React.useState(true)
  const [err, setErr] = React.useState(false);

  return (
    <Box className='signup-box'>
      {/* <Stack direction="row" spacing={1} mb={-0.6} alignItems="center" justifyContent="center">
        <Typography mt={7} sx={{fontFamily: "Diplomata SC", fontSize: "25px"}} variant='h5'>Raccaccoony</Typography>
        <img height={90} width={90} src={raccoonlogo} alt="logo" />
      </Stack> */}
      <Card sx={{padding: "25px", borderTop: "5px solid black", bgcolor: "white", color: "black"}}>
        <Typography variant='h6' pb={2}>Sign up</Typography>
        <form>
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

            <TextField
              size='small'
              type={hideConfirmPassword ? 'password' : 'text'}
              color="buttonPrimary"
              edge="end"
              required
              onChange={() => setErr(false)}
              InputProps={{
                endAdornment: <InputAdornment position="end">{hideConfirmPassword ? 
                  <IconButton onClick={() => setHideConfirmPassword(false)}>
                    <VisibilityOff />
                  </IconButton> : 
                  <IconButton onClick={() => setHideConfirmPassword(true)}>
                    <Visibility />
                  </IconButton>
                }
                </InputAdornment>,
              }}
              label="Confirm Password"
            />
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