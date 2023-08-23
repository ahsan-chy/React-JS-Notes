import {React, useState } from 'react'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import {TextField} from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import {auth} from '../plugins/Firebase';
import { useDispatch } from 'react-redux';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { signin } from '../redux/actions/userAction'

const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
  }));

const SignIn = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

const handleSignIn = async(e) => {
    e.preventDefault()
    if( !email || !password)
    {
        alert("Fill All Fields")
    }
    else{
        try{
            const response = await signInWithEmailAndPassword(auth, email, password)
            const user = response.user;
            // console.log("🚀 ~ file: SignIn.js:32 ~ handleSignIn ~ user", user)
            console.log("Login Successfully")
            if (user) {
                const token = await user.getIdTokenResult()
              dispatch(signin(user, token))
              navigate("/profile")
          }
        }
          catch (err) {
            console.log("🚀 ~ file: SignIn.js:40 ~ handleSignIn ~ err", err)
            console.error(err.message);
            return err;
      }
    }
}
  return (
    <div>
        <Container maxWidth="l" >
            <Box >
            {/* <Typography variant="h4">Sign Up</Typography> */}
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Box> </Box>
                </Grid>
                <Grid item xs={6}>
                    <Item sx={{p:3, mx:10, my:5}}>
                        <form onSubmit={handleSignIn}>
                        <Typography variant='h5' sx={{color:"#001e3c", textAlign:"center"}}>Sign In</Typography>
                        <TextField 
                            type="email" 
                            name="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            fullWidth label="Email" placeholder='Enter Your Email' margin="normal"/>
                        <TextField type="password" 
                            name="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            fullWidth label="Password" placeholder='Enter Your Password'  margin="normal"/>
                        
                        <Button type="submit" variant="contained" fullWidth sx={{color:'#fff',my:3, bgcolor:'#001e3c'}}>Submit</Button>
                        <Typography>
                            Don't have account <Link to="/signup">Sign Up</Link>
                        </Typography>
                        </form>
                    </Item>
                </Grid>
            </Grid>
            </Box>
        </Container>
    </div>
  )
}

export default SignIn