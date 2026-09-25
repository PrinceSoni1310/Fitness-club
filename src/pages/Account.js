import React, { useEffect, useState } from 'react';
import { Box, Typography, TextField, Button, Stack, Paper } from '@mui/material';

const Account = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setUserData(prev => ({
        ...prev,
        name: user.name || '',
        email: user.email || '',
        phone: user.phone || '',
      }));
    }
  }, []);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    // Password match validation
    if (userData.newPassword && userData.newPassword !== userData.confirmPassword) {
      alert("New password and confirm password do not match.");
      return;
    }

    const updatedUser = {
      name: userData.name,
      email: userData.email,
      phone: userData.phone,
      password: userData.newPassword || userData.oldPassword,
    };

    localStorage.setItem('user', JSON.stringify(updatedUser));
    alert("Account details updated successfully!");
  };

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', py: 6, px: 3 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 4, background: '#fffaf0' }}>
        <Typography variant="h4" mb={4} color="#FF2625" fontWeight={700} textAlign="center">
          My Account
        </Typography>

        <Stack spacing={3}>
          <TextField
            label="Name"
            name="name"
            value={userData.name}
            InputProps={{ readOnly: true }}
            sx={{ backgroundColor: '#f5f5f5' }}
          />

          <TextField
            label="Email"
            name="email"
            value={userData.email}
            onChange={handleChange}
          />

          <TextField
            label="Phone Number"
            name="phone"
            value={userData.phone}
            onChange={handleChange}
          />

          <TextField
            label="Old Password"
            name="oldPassword"
            type="password"
            value={userData.oldPassword}
            onChange={handleChange}
          />

          <TextField
            label="New Password"
            name="newPassword"
            type="password"
            value={userData.newPassword}
            onChange={handleChange}
          />

          <TextField
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            value={userData.confirmPassword}
            onChange={handleChange}
          />

          <Button
            variant="contained"
            color="error"
            size="large"
            onClick={handleUpdate}
            sx={{ fontWeight: 'bold', borderRadius: '8px' }}
          >
            Update Account
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
};

export default Account;
