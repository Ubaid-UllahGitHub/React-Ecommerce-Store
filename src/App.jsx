import React from 'react';
import ThemeProvider from './contexts/ThemeContext';
import Navbar2nd from './components/NavbarH';
import Main from './components/main';
import './App.css';

const App = () => {
  return (
    <ThemeProvider>
      <Navbar2nd />
      <Main />
    </ThemeProvider>
  );
};

export default App;
