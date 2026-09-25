import React from 'react';
import { Box, Typography, Card, CardContent, Avatar } from '@mui/material';
import AccountIcon from '../assets/icons/account.svg';

const AccountProfile = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <Box display="flex" justifyContent="center" alignItems="center" mt={8}>
      <Card sx={{ maxWidth: 500, width: '100%', p: 4, textAlign: 'center' }}>
        <Avatar
          src={AccountIcon}
          alt="Account Icon"
          sx={{ width: 100, height: 100, mx: 'auto', mb: 2 }}
        />
        <CardContent>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            {user?.name || 'User'}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Email: {user?.email || 'Not Provided'}
          </Typography>
          <Typography variant="body1">
            Mobile: {user?.mobile || 'Not Provided'}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default AccountProfile;
