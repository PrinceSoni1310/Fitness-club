import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Box, TextField, Button, Typography } from '@mui/material';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [resetUsername, setResetUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = () => {
    const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];

    const matchedUser = registeredUsers.find(
      (user) => user.username === username && user.password === password
    );

    if (matchedUser) {
      localStorage.setItem('user', JSON.stringify({ username }));
      navigate('/'); // Redirect to home
      // window.location.reload(); // Refresh for navbar update
    } else {
      alert("Invalid credentials or not registered. Please register first.");
    }
  };

  const handleResetPassword = () => {
    if (!resetUsername || !newPassword || !confirmNewPassword) {
      alert("Please fill in all fields.");
      return;
    }

    if (newPassword !== confirmNewPassword) {
      alert("Passwords do not match.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("registeredUsers")) || [];
    const idx = users.findIndex(u => u.username === resetUsername);

    if (idx === -1) {
      alert("Username not found.");
      return;
    }

    users[idx].password = newPassword;
    localStorage.setItem("registeredUsers", JSON.stringify(users));
    alert("Password updated successfully! Please log in.");
    setShowForgotPassword(false);
    setResetUsername('');
    setNewPassword('');
    setConfirmNewPassword('');
  };

  return (
    <Box className="auth-container">
      <Box className="auth-box">
        <Typography variant="h4" mb={2}>
          {showForgotPassword ? "Reset Password" : "Login"}
        </Typography>

        {!showForgotPassword ? (
          <>
            <TextField
              label="Username"
              fullWidth
              value={username}
              onChange={e => setUsername(e.target.value)}
              margin="normal"
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              value={password}
              onChange={e => setPassword(e.target.value)}
              margin="normal"
            />
            <Button
              variant="contained"
              fullWidth
              sx={{ mt: 2 }}
              onClick={handleLogin}
            >
              Login
            </Button>

            <Typography mt={1} textAlign="center">
              <Button variant="text" onClick={() => setShowForgotPassword(true)}>
                Forgot Password?
              </Button>
            </Typography>

            <Typography mt={2} textAlign="center">
              New user? <Link to="/signup">Register here</Link>
            </Typography>
          </>
        ) : (
          <>
            <TextField
              label="Username"
              fullWidth
              value={resetUsername}
              onChange={e => setResetUsername(e.target.value)}
              margin="normal"
            />
            <TextField
              label="New Password"
              type="password"
              fullWidth
              value={newPassword}
              onChange={e => setNewPassword(e.target.value)}
              margin="normal"
            />
            <TextField
              label="Confirm New Password"
              type="password"
              fullWidth
              value={confirmNewPassword}
              onChange={e => setConfirmNewPassword(e.target.value)}
              margin="normal"
            />
            <Button
              variant="contained"
              fullWidth
              sx={{ mt: 2 }}
              onClick={handleResetPassword}
            >
              Update Password
            </Button>

            <Typography mt={2} textAlign="center">
              <Button variant="text" onClick={() => setShowForgotPassword(false)}>
                Back to Login
              </Button>
            </Typography>
          </>
        )}
      </Box>
    </Box>
  );
};

export default Login;
