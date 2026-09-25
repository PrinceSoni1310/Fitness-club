import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Radio, RadioGroup, FormControlLabel, FormLabel } from '@mui/material';
import './Signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [generatedEmailOtp, setGeneratedEmailOtp] = useState('');
  const [generatedPhoneOtp, setGeneratedPhoneOtp] = useState('');
  const [emailVerified, setEmailVerified] = useState(false);
  const [phoneVerified, setPhoneVerified] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();

  const handleSendEmailOtp = () => {
    const otp = generateOTP();
    setGeneratedEmailOtp(otp);
    alert(`Email OTP sent (simulated): ${otp}`);
  };

  const handleSendPhoneOtp = () => {
    const otp = generateOTP();
    setGeneratedPhoneOtp(otp);
    alert(`Phone OTP sent (simulated): ${otp}`);
  };

  const verifyEmailOtp = () => {
    if (formData.emailOtp === generatedEmailOtp) {
      setEmailVerified(true);
      alert("Email verified!");
    } else {
      alert("Incorrect email OTP.");
    }
  };

  const verifyPhoneOtp = () => {
    if (formData.phoneOtp === generatedPhoneOtp) {
      setPhoneVerified(true);
      alert("Phone number verified!");
    } else {
      alert("Incorrect phone OTP.");
    }
  };

  const handleSignup = () => {
    const {
      name, email, phone, address, age, weight, height,
      disease, diseaseDetail, username, password, confirmPassword, gender
    } = formData;

    if (!emailVerified || !phoneVerified) {
      alert("Please verify both email and phone number.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];
    const userExists = existingUsers.some((user) => user.username === username);

    if (userExists) {
      alert("Username already exists. Please choose another one.");
      return;
    }

    const newUser = {
      name, email, phone, address, age, weight, height, disease,
      diseaseDetail: disease === 'yes' ? diseaseDetail : '',
      gender, username, password
    };

    localStorage.setItem("registeredUsers", JSON.stringify([...existingUsers, newUser]));
    alert("Registered successfully! Please login.");
    window.location.href = "/login";
  };

  return (
    <Box className="auth-box">
      <Typography variant="h4" mb={2}>Register</Typography>

      <TextField name="name" label="Name" fullWidth margin="normal" value={formData.name} onChange={handleChange} required />
      <TextField name="email" label="Email" fullWidth margin="normal" value={formData.email} onChange={handleChange} required />
      <Button variant="outlined" onClick={handleSendEmailOtp} disabled={emailVerified}>Send Email OTP</Button>
      <TextField name="emailOtp" label="Enter Email OTP" fullWidth margin="normal" value={formData.emailOtp} onChange={handleChange} />
      <Button variant="contained" onClick={verifyEmailOtp} disabled={emailVerified}>Verify Email OTP</Button>

      <TextField name="phone" label="Phone" fullWidth margin="normal" value={formData.phone} onChange={handleChange} required />
      <Button variant="outlined" onClick={handleSendPhoneOtp} disabled={phoneVerified}>Send Phone OTP</Button>
      <TextField name="phoneOtp" label="Enter Phone OTP" fullWidth margin="normal" value={formData.phoneOtp} onChange={handleChange} />
      <Button variant="contained" onClick={verifyPhoneOtp} disabled={phoneVerified}>Verify Phone OTP</Button>

      <TextField name="address" label="Address" fullWidth margin="normal" value={formData.address} onChange={handleChange} required />
      <TextField name="age" label="Age" fullWidth margin="normal" value={formData.age} onChange={handleChange} required />
      <TextField name="weight" label="Weight" fullWidth margin="normal" value={formData.weight} onChange={handleChange} required />
      <TextField name="height" label="Height" fullWidth margin="normal" value={formData.height} onChange={handleChange} required />

      <FormLabel component="legend">Gender</FormLabel>
      <RadioGroup row name="gender" value={formData.gender} onChange={handleChange}>
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>

      <FormLabel component="legend">Any Disease?</FormLabel>
      <RadioGroup row name="disease" value={formData.disease} onChange={handleChange}>
        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="no" control={<Radio />} label="No" />
      </RadioGroup>
      {formData.disease === 'yes' && (
        <TextField
          name="diseaseDetail"
          label="Disease Detail"
          fullWidth
          margin="normal"
          value={formData.diseaseDetail}
          onChange={handleChange}
          required
        />
      )}

      <TextField name="username" label="Username" fullWidth margin="normal" value={formData.username} onChange={handleChange} required />
      <TextField name="password" label="Password" type="password" fullWidth margin="normal" value={formData.password} onChange={handleChange} required />
      <TextField name="confirmPassword" label="Confirm Password" type="password" fullWidth margin="normal" value={formData.confirmPassword} onChange={handleChange} required />

      <Button variant="contained" fullWidth sx={{ mt: 2 }} onClick={handleSignup}>
        Register
      </Button>
    </Box>
  );
};

export default Signup;
