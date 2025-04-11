import { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles"; // Import the useTheme hook
import { Box, TextField, Button, Typography, IconButton, InputAdornment, Grid, Container } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const LoginForm = () => {
  const theme = useTheme();  // Using the hook
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login with:", emailOrUsername, password);
    // Add your auth logic here
  };
  return (
    <Box
      sx={{
        py: 20,
        backgroundImage: `url("/image/bgforloginpage.jpg")`, // Background image path
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <Container maxWidth="lg" sx={{ height: "100%" }}>
        <Grid
          container
          sx={{
            height: "100%",
            display: "flex",
            gap: "0px"
          }}
         >
          {/* Left-colunm */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: { xs: "none", md: "block" },
              backgroundImage: `url("/image/loginpageimg.png")`, // Image path
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat", // Prevent the image from repeating
              height: "400px",
            }}
           />
           {/* Right-colunm */}
           <Grid item
            xs={12}
            md={6}>
           <Grid
            component="form"
            onSubmit={handleLogin}
            sx={{
              maxWidth: 400,
              mx: "auto",
              px: 4,
              py: 4,
              display: "flex",
              flexDirection: "column",
              gap: 4,
              boxShadow: 1,
              borderRadius: 1,
            }}
           >
            <Box>
              <Typography variant="h5" textAlign="center" fontWeight="bold" color="secondary">
                Login
              </Typography>
              <Typography variant="body" textAlign="center" fontWeight="500" fontSize="12px" color="secondary">
                Don't Have an Account?   <Link to="/signup" style={{ color: "#37acb0", textDecoration: "none" }}>Create Free Account</Link>
              </Typography>
            </Box>
            <TextField
              label="Email or Username"
              variant="outlined"
              fullWidth
              required
              value={emailOrUsername}
              onChange={(e) => setEmailOrUsername(e.target.value)}
            />
            <TextField
              label="Password"
              variant="outlined"
              fullWidth
              required
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      edge="end"
                      onClick={() => setShowPassword((prev) => !prev)}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: (theme) => theme.palette.primary.main, // Correctly referencing the theme color
                "&:hover": {
                  backgroundColor: (theme) => theme.palette.secondary.main, // Hover effect with primary color
                  color: "white"
                },
              }}
            >
              Login
            </Button>
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
          </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
export default LoginForm;
