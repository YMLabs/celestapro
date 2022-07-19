import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";

// pages 
import Home from './Pages/Home';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </>
  );
}

export default App;
