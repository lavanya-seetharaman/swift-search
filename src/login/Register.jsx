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
import { Link, useNavigate } from 'react-router-dom';
import { BASE_URL } from '../lib/constants/constants';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { login } from '../redux/AuthSlice';

export const Register = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [hidePassword, setHidePassword] = React.useState(true);
  const [ hideConfirmPassword, setHideConfirmPassword ] = React.useState(true);
  const [ loading, setLoading ] = React.useState(false);
  const [err, setErr] = React.useState({error: false, message: ""});
  const [ formData, setFormData ] = React.useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [ isFormDataError, setIsFormDataError ] = React.useState({ username: false, email: false, password: false, confirmPassword: false })

  // onchange function
  function handleChange(event){
    let { name, value } = event.target;
    setFormData(prev => ({...prev, [name]: value}))
    setIsFormDataError(prev => ({...prev, [name]: false}))
  }

  //form validation
  function validateFormData(){
    let result = false;

    if(formData.username.length === 0 || formData.username.length > 20 || !(/^[^0-9][a-z0-9]{2,20}$/ig.test(formData.username))){
      result = true;
      setIsFormDataError(prev => ({...prev, username: true}))
    }

    if(formData.email.length === 0 || formData.email.length > 20 || !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)){
      result = true;
      setIsFormDataError(prev => ({...prev, email: true}))
    }

    if(formData.password.length < 6 || formData.password.length > 18 || !/^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,16}$/.test(formData.password)){
      result = true;
      setIsFormDataError(prev => ({...prev, password: true}))
    }

    if(formData.password !== formData.confirmPassword){
      result = true;
      setIsFormDataError(prev => ({...prev, confirmPassword: true}))
    }

    return result;
  }

  async function handleSubmit(e){
    e.preventDefault();

    if(!validateFormData()){
      setLoading(true)
      let raw = JSON.stringify({
        "username": formData.username,
        "email": formData.email,
        "password": formData.password
      });
      try{
        const controller = axios.CancelToken.source(); 
        const response = await axios({
          method: "post",
          maxBodyLength: Infinity,
          url: `${BASE_URL}/user/register`,
          headers: { 
            'Content-Type': 'application/json'
          },
          cancelToken: controller.token,
          data : raw
        })

        if(response.status === 200){
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
            setLoading(false);
            // setErr(prev => ({...prev, error: true, message: error.response.data.error}));
            console.log(error);
          }
        }
        
      }catch(error){
        setLoading(false);
        setErr(prev => ({...prev, error: true, message: error.response.data.error}));
        console.log(error);
      }
      
    }

  }

  // console.log(formData);
  return (
    <Box className='signup-box'>
      <Card sx={{padding: "25px", borderTop: "5px solid black", bgcolor: "white", color: "black"}}>
        <Typography variant='h6' pb={2}>Sign up</Typography>
        <form onSubmit={handleSubmit}>
        <Stack direction="column" spacing={3}>
            <TextField
              name="username" 
              type="text" 
              size='small' 
              label="Username" 
              variant="outlined" 
              color='buttonPrimary' 
              // required 
              onChange={handleChange}
              error={isFormDataError.username}
              helperText={isFormDataError.username && "Username should not include any space and the character must be alphanumerics and less than 20 characters"}
            />
            <TextField
              name="email" 
              type="email" 
              size='small' 
              label="Email" 
              color='buttonPrimary' 
              // required
              onChange={handleChange}
              error={isFormDataError.email}
              helperText={isFormDataError.email && "Email Id is required"}

            />
            <TextField
              name="password"
              size='small'
              type={hidePassword ? 'password' : 'text'}
              color="buttonPrimary"
              edge="end"
              // required
              onChange={handleChange}
              error={isFormDataError.password}
              helperText={isFormDataError.password && "Password is required and characters must be less than 10"}
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
              name="confirmPassword"
              size='small'
              type={hideConfirmPassword ? 'password' : 'text'}
              color="buttonPrimary"
              edge="end"
              // required
              onChange={handleChange}
              error={isFormDataError.confirmPassword}
              helperText={isFormDataError.confirmPassword && "confirm password does not match the current password"}
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
              disabled={loading}
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
            {err.error && <Alert severity='error' sx={{display: "flex", alignItems: "center", justifyContent: "center"}}>{err.message}</Alert>}
        </Stack>
        </form>
        <Typography p={2} variant='body1'>Have account already? <Link to="/login" style={{color: "black"}}>Login</Link></Typography>
      </Card>
    </Box>
  )
}