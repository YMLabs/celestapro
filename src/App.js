import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

// pages
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Home/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sale" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
