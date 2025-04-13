// import { useTheme } from "@mui/material/styles"; // Import the useTheme hook
// import { Box, TextField, Button, Typography, IconButton, InputAdornment, Grid, Container } from "@mui/material";
// import { Visibility, VisibilityOff } from "@mui/icons-material";
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import {
  TextField,
  Box,
  Button,
  Typography,
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

const LoginForm = () => {
  const [password, setPassword] = useState('');
  const [passwordRequirements, setPasswordRequirements] = useState({
    hasUppercase: false,
    hasNumber: false,
    hasSpecialChar: false,
  });

  const validatePassword = (value) => {
    const hasUppercase = /[A-Z]/.test(value);
    const hasNumber = /\d/.test(value);
    const hasSpecialChar = /[@#$%!&*]/.test(value);

    setPasswordRequirements({
      hasUppercase,
      hasNumber,
      hasSpecialChar,
    });
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    validatePassword(newPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { hasUppercase, hasNumber, hasSpecialChar } = passwordRequirements;
    if (hasUppercase && hasNumber && hasSpecialChar) {
      alert('Login Successful!');
    } else {
      alert('Password requirements not met.');
    }
  };

  const renderRequirement = (label, condition) => (
    <Box display="flex" alignItems="center" mb={0.5}>
      {condition && (
        <CheckIcon fontSize="small" sx={{ color: '#37acb0', mr: 1 }} />
      )}
      <Typography
        variant="body2"
        sx={{
          fontWeight: condition ? 'bold' : 'normal',
          color: condition ? '#213547' : 'text.secondary',
        }}
      >
        {label}
      </Typography>
    </Box>
  );

  return (
    <Box
      sx={{
        width: 380,
        padding: 4,
        boxShadow: 3,
        backgroundColor: 'white',
        display: "flex",
        gap: "5px",
        flexDirection: "column",
        borderRadius: 2,
        mx: 'auto',
        my: "80px"
      }}
    >
      <Box>
        <Typography variant="h5" textAlign="center" fontWeight="bold" color="secondary">
          Login
        </Typography>
        </Box>
        <Box>
        <Typography variant="body" textAlign="center" fontWeight="500" fontSize="12px" color="secondary">
          Don't Have an Account?   <Link to="/signup" style={{ color: "#37acb0", textDecoration: "none" }}>Create Free Account</Link>
        </Typography>
      </Box>  
      <form onSubmit={handleSubmit}>
        <TextField
          label="Username or Email"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={handlePasswordChange}
        />

        {password.length > 0 && (
          <Box mt={2}>
            <Typography variant="body2" color="primary" fontWeight={500} gutterBottom textAlign="left"> 
              Password must contain:
            </Typography>
            {renderRequirement('At least 1 uppercase letter (A-Z)', passwordRequirements.hasUppercase)}
            {renderRequirement('At least 1 number (0-9)', passwordRequirements.hasNumber)}
            {renderRequirement('At least 1 special character (@, #, $, %, !, &, *)', passwordRequirements.hasSpecialChar)}
          </Box>
        )}

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: 3 }}
        >
          Login
        </Button>
        <Box pt={3}>
          <Typography variant="body2" textAlign="right">
            <Link
              to="/forgot-password"
              style={{
                color: "#213547", // your secondary.main color manually
                textDecoration: "none",
              }}
            >
              Forgot Password?
            </Link>
          </Typography>
        </Box>
      </form>
    </Box>
  );
};
export default LoginForm;
