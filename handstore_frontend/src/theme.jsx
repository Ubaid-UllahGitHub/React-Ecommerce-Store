import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#37acb0',
    },
    secondary: {
      main: '#213547',
    },
    text: {
      primary: '#213547',
    },
    background: {
      default: '#ffffff',
    },
  },
  typography: {
    fontFamily: "'League Spartan', sans-serif", // Default font for typography
  },
  // Custom fonts
  fonts: {
    primary: "'League Spartan', sans-serif",  // Define primary font here
    secondary: "'Poppins', sans-serif",  // You can add more fonts here if needed
  },
});

export default theme;
