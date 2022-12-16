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
    IconButton
} from '@mui/material';
import raccoonlogo from "../assets/raccoon-stand.png"; 
import { AccountCircle, Visibility, VisibilityOff } from '@mui/icons-material';



export const Register = () => {

  const [hidePassword, setHidePassword] = React.useState(true);

  return (
    <Box className='signup-box'>
      <Stack direction="row" spacing={1} mb={-0.6} alignItems="center" justifyContent="center">
        <Typography mt={7} sx={{fontFamily: "Diplomata SC", fontSize: "25px"}} variant='h5'>Raccaccoony</Typography>
        <img height={90} width={90} src={raccoonlogo} alt="logo" />
      </Stack>
      <Card sx={{padding: "25px", borderTop: "5px solid black", bgcolor: "white", color: "black"}}>
        <Typography variant='h6' pb={2}>Sign up</Typography>
        <Stack direction="column" spacing={3}>
        <TextField type="text" size='small' label="Username" variant="outlined" color='buttonPrimary' />
        <TextField type="email" size='small' label="Email" color='buttonPrimary'></TextField>
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
        <label htmlFor="upload-photo">
          <TextField
            sx={{ display: 'none' }}
            id="upload-photo"
            name="upload-photo"
            type="file"
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
        </Stack>
        <Typography p={2} variant='body1'>Have account already? Login</Typography>
      </Card>
    </Box>
  )
}