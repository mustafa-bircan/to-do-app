import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Snackbar } from '@mui/material';
import { useHistory } from 'react-router-dom';

function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errorMessages, setErrorMessages] = useState({
    email: '',
    password: '',
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const history = useHistory();

  const users = [
    { email: 'admin@example.com', password: 'admin123', role: 'admin' },
    { email: 'user@example.com', password: 'user123', role: 'user' },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = users.find(
      (user) => user.email === formData.email && user.password === formData.password
    );
    
    setErrorMessages({ email: '', password: '' });

    user ? (
      user.role === 'admin' ? history.push('/adminpage') : history.push('/userpage')
    ) : (
      setErrorMessages({
        email: 'Invalid email address or password',
        password: 'Invalid email address or password',
      }),
      setOpenSnackbar(true)
    );
    
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundImage: 'url("https://cdn.photoroom.com/v2/image-cache?path=gs://background-7ef44.appspot.com/backgrounds_v3/black/47_-_black.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url("https://cdn.photoroom.com/v2/image-cache?path=gs://background-7ef44.appspot.com/backgrounds_v3/black/47_-_black.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(5px)',
          zIndex: -1,
        }}
      />

      <Box
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.85)',
          padding: 4,
          borderRadius: 2,
          width: '350px',
          boxShadow: 3,
          zIndex: 1,
          position: 'relative',
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          To-Do-App
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            autoFocus
            sx={{ marginBottom: '16px' }}
          />
          {errorMessages.email && (
            <Typography variant="body2" color="error" align="center" sx={{ marginBottom: '16px' }}>
              {errorMessages.email}
            </Typography>
          )}

          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            margin="normal"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
            sx={{ marginBottom: '16px' }}
          />
          {errorMessages.password && (
            <Typography variant="body2" color="error" align="center" sx={{ marginBottom: '16px' }}>
              {errorMessages.password}
            </Typography>
          )}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ padding: '10px', fontSize: '16px' }}
          >
            Sign In
          </Button>
        </form>
      </Box>
    </Box>
  );
}

export default LoginPage;
