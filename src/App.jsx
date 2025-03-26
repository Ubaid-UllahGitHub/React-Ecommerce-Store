import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Import necessary router components
import Navbar2nd from './components/NavbarH';
import Main from "./components/main";
import './App.css';

const App = () => {
  return(
    <>
    <Navbar2nd />
    <Main />
      <h1>Welcome to Our Platform</h1>
      <p>This is a basic React App setup with MUI.</p>
    </>
  );
};
export default App;