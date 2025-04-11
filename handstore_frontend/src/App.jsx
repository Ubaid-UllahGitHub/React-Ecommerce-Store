import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Import necessary routing components
import ThemeProvider from './contexts/ThemeContext';  // Assuming this is your Theme Context
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import './App.css';

const App = () => {
  return (
    <ThemeProvider>
      <Router>  {/* Wrap everything in Router to enable routing */}
        <Routes>
          <Route path="/" element={<Home />} />  {/* This route will display the Home component */}
          <Route path="/login" element={<LoginPage />} /> {/* 👈 New login route */}
          {/* You can add more routes for other pages, for example: */}
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
