import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Import necessary routing components
import ThemeProvider from './contexts/ThemeContext';  // Assuming this is your Theme Context
import Home from './pages/Home';   // Import the Home component
import './App.css';

const App = () => {
  return (
    <ThemeProvider>
      <Router>  {/* Wrap everything in Router to enable routing */}
        <Routes>
          <Route path="/" element={<Home />} />  {/* This route will display the Home component */}
          {/* You can add more routes for other pages, for example: */}
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
