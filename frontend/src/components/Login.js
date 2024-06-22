import React, { useState } from 'react';
import { Avatar, Button, TextField, FormControlLabel, Checkbox, Link, Grid, Box, Typography, Container, CssBaseline } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import axios from 'axios';

const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api-auth/login/', credentials, {
        withCredentials: true,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: '#333',
          padding: 3,
          borderRadius: 2,
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" sx={{ color: '#fff' }}>
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            value={credentials.username}
            onChange={handleChange}
            InputLabelProps={{ style: { color: '#fff' } }}
            InputProps={{ style: { color: '#fff' } }}
            sx={{ backgroundColor: '#444' }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={credentials.password}
            onChange={handleChange}
            InputLabelProps={{ style: { color: '#fff' } }}
            InputProps={{ style: { color: '#fff' } }}
            sx={{ backgroundColor: '#444' }}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label={<Typography style={{ color: '#fff' }}>Remember me</Typography>}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2" sx={{ color: '#fff' }}>
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2" sx={{ color: '#fff' }}>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
