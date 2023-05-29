import React from 'react';
import { 
    Box, 
    Typography,
    TextField, 
    Stack,
    Button,
    Card,
    Fab,
    OutlinedInput,
    InputAdornment,
    IconButton
} from '@mui/material';
import { AccountCircle, Visibility, VisibilityOff } from '@mui/icons-material';



export const Login = () => {

  const [hidePassword, setHidePassword] = React.useState(true);

  return (
    <Box className='signup-box'>
      {/* <Stack direction="row" spacing={1} mb={-0.6} alignItems="center" justifyContent="center">
        <Typography mt={7} sx={{fontFamily: "Diplomata SC", fontSize: "25px"}} variant='h5'>Raccaccoony</Typography>
        <img height={90} width={90} src={raccoonlogo} alt="logo" />
      </Stack> */}
      <Card sx={{padding: "25px", borderTop: "5px solid black", bgcolor: "white", color: "black"}}>
        <Typography variant='h6' pb={2}>Hellow there!</Typography>
        <Typography variant='h6' pb={2}>Please Login to continue</Typography>
        <Stack direction="column" spacing={3}>
        <TextField size='small' label="Username" variant="outlined" color='buttonPrimary' />
        <TextField
            size='small'
            type={hidePassword ? 'password' : 'text'}
            color="buttonPrimary"
            edge="end"
            // value={values.password}
            // onChange={handleChange('password')}
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
        <Button 
          variant='contained'
          sx={{
            backgroundColor: "buttonPrimary.main", 
            color: "secondary.main",
            "&:hover": {
              backgroundColor: "buttonPrimary.light"
            }
          }} 
        >
          Log In
        </Button>
        </Stack>
        <Typography p={2} variant='body1'>Don't have an account? Sign up</Typography>
      </Card>
    </Box>
  )
}