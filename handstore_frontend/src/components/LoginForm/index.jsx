// import { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles"; // Import the useTheme hook
// import { Box, TextField, Button, Typography, IconButton, InputAdornment, Grid, Container } from "@mui/material";
// import { Visibility, VisibilityOff } from "@mui/icons-material";
import React, { useState } from 'react';
import {
  TextField,
  Box,
  Button,
  Typography,
  Icon,
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
    // <Box backgroundColor=""
    //   sx={{
    //     py: 10,
    //     // backgroundImage: `url("/image/bgforloginpage.jpg")`, // Background image path
    //     backgroundSize: "cover",
    //     backgroundColor: theme => theme.palette.secondary.main,
    //     backgroundPosition: "center",
    //   }}>
    //   <Container maxWidth="lg" sx={{ height: "100%" }}>
    //     <Grid
    //       container
    //       sx={{
    //         height: "100%",
    //         display: "flex",
    //         gap: "0px"
    //       }}
    //      >
    //       {/* Left-colunm */}
    //       <Grid
    //         item
    //         xs={12}
    //         md={6}
    //         sx={{
    //           display: "Flex",              // backgroundImage: `url("/image/loginpageimg.png")`, // Image path
    //           backgroundSize: "contain",
    //           justifyContent: "center",
    //           alignItems: "center",
    //           backgroundPosition: "center",
    //           backgroundRepeat: "no-repeat", // Prevent the image from repeating
    //           height: "400px",
    //         }}
    //        >
    //         <img src="image/loginpageimg.png"
    //         alt="img"
    //         width="350px"
    //         height="auto"
    //         />
    //         </Grid>
    //        {/* Right-colunm */}
    //        <Grid item
    //         xs={12}
    //         md={6}>
    //        <Grid
    //         component="form"
    //         onSubmit={handleLogin}
    //         sx={{
    //           maxWidth: 400,
    //           mx: "auto",
    //           px: 4,
    //           py: 4,
    //           display: "flex",
    //           flexDirection: "column",
    //           gap: 4,
    //           background: "white",
    //           boxShadow: 1,
    //           borderRadius: 1,
    //         }}
    //        >
    //         <Box>
    //           <Typography variant="h5" textAlign="center" fontWeight="bold" color="secondary">
    //             Login
    //           </Typography>
    //           <Typography variant="body" textAlign="center" fontWeight="500" fontSize="12px" color="secondary">
    //             Don't Have an Account?   <Link to="/signup" style={{ color: "#37acb0", textDecoration: "none" }}>Create Free Account</Link>
    //           </Typography>
    //         </Box>
    //         <TextField
    //           label="Email or Username"
    //           variant="outlined"
    //           fullWidth
    //           required
    //           value={emailOrUsername}
    //           onChange={(e) => setEmailOrUsername(e.target.value)}
    //         />
    //         <TextField
    //           label="Password"
    //           variant="outlined"
    //           fullWidth
    //           required
    //           type={showPassword ? "text" : "password"}
    //           value={password}
    //           onChange={(e) => setPassword(e.target.value)}
    //           InputProps={{
    //             endAdornment: (
    //               <InputAdornment position="end">
    //                 <IconButton
    //                   edge="end"
    //                   onClick={() => setShowPassword((prev) => !prev)}
    //                 >
    //                   {showPassword ? <VisibilityOff /> : <Visibility />}
    //                 </IconButton>
    //               </InputAdornment>
    //             ),
    //           }}
    //         />
    //         <Button
    //           type="submit"
    //           variant="contained"
    //           sx={{
    //             backgroundColor: (theme) => theme.palette.primary.main, // Correctly referencing the theme color
    //             "&:hover": {
    //               backgroundColor: (theme) => theme.palette.secondary.main, // Hover effect with primary color
    //               color: "white"
    //             },
    //           }}
    //         >
    //           Login
    //         </Button>
    //         <Typography variant="body2" textAlign="right">
    //           <Link
    //             to="/forgot-password"
    //             style={{
    //               color: "#213547", // your secondary.main color manually
    //               textDecoration: "none",
    //             }}
    //           >
    //             Forgot Password?
    //           </Link>
    //         </Typography>
    //       </Grid>
    //       </Grid>
    //     </Grid>
    //   </Container>
    // </Box>
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
