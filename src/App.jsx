import React from 'react';
import ThemeProvider from './contexts/ThemeContext';
import Navbar2nd from './components/NavbarH';
import Main from './components/main';
import Facilities from './components/Facilities';
import './App.css';

const App = () => {
  return (
    <ThemeProvider>
      <Navbar2nd />
      <Main />
      <Facilities />
      <h1>this is dummy text </h1>
    </ThemeProvider>
  );
};

export default App;
