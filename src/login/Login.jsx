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
    IconButton,
    Alert
} from '@mui/material';
import { AccountCircle, Visibility, VisibilityOff } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../lib/constants/constants';
import { useDispatch } from 'react-redux';
import { login } from '../redux/AuthSlice';



export const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [hidePassword, setHidePassword] = React.useState(true);
  const [ loading, setLoading ] = React.useState(false);
  const [ err, setErr ] = React.useState({error: false, message: ""})
  const [ formData, setFormData ] = React.useState({
    email: "",
    password: ""
  })
  const [ isFormDataError, setIsFormDataError ] = React.useState({ email: false, password: false });

  function handleChange(e){
    const { name, value } = e.target;

    setFormData(prev => ({...prev, [name]: value}));
    setIsFormDataError(prev => ({...prev, [name]: false}));
  }

  function validateFormData(){
    let result = false;

    if(formData.email.length === 0 || formData.email.length > 50 || !/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i.test(formData.email)){
      result = true;
      setIsFormDataError(prev => ({...prev, email: true}));
    }

    if(formData.password.length === 0){
      result = true;
      setIsFormDataError(prev => ({...prev, password: true}))
    }

    return result;
  }

  async function handleSubmit(e){
    e.preventDefault();

    if(!validateFormData()){
      setLoading(true);
      let raw = JSON.stringify({
        "email": formData.email,
        "password": formData.password
      });

      try{
        const { data, status } = await axios({
          method: "post",
          maxBodyLength: Infinity,
          url: `${BASE_URL}/user/login`,
          headers: { 
            'Content-Type': 'application/json'
          },
          data : raw
        })
        
        if(status === 200){
          setLoading(false)
          dispatch(login(data))
          navigate("/swift-search")
        }
      }catch(error){
        setLoading(false)
        setErr(prev => ({...prev, error: true, message: error.response.data.error}))
        console.log(error);
      }
    }
  }

  return (
    <Box className='signup-box'>
      <Card sx={{padding: "25px", borderTop: "5px solid black", bgcolor: "white", color: "black"}}>
        <Typography variant='h6' pb={2}>Hellow there!</Typography>
        <Typography variant='h6' pb={2}>Please Login to continue</Typography>
        <form onSubmit={handleSubmit}>
          <Stack direction="column" spacing={3}>
            <TextField 
              name="email"
              size='small' 
              label="email" 
              variant="outlined" 
              color='buttonPrimary'
              value={formData.email}
              onChange={handleChange}
              error={isFormDataError.email}
              helperText={isFormDataError.email && "Please enter a valid email format"}
            />
            <TextField
                name="password"
                size='small'
                type={hidePassword ? 'password' : 'text'}
                color="buttonPrimary"
                edge="end"
                value={formData.password}
                onChange={handleChange}
                error={isFormDataError.password}
                helperText={isFormDataError.password && "Please enter your account password"}
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
              disabled={loading}
              type='submit' 
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
            {err.error && <Alert severity='error' sx={{display: "flex", alignItems: "center", justifyContent: "center"}}>{err.message}</Alert>}
          </Stack>
        </form>
        <Typography p={2} variant='body1'>Doesn't have an account? <Link to="/signup" style={{color: "black"}}>Sign up</Link></Typography>
        <Typography p={2} variant='body1'><Link to="/signup" style={{color: "black"}}>Forgot password?</Link></Typography>
      </Card>
    </Box>
  )
}