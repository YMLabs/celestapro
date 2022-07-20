import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

// pages
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Home/Footer/Footer";
import Sale from "./Pages/Sale";
import Error404 from "./Pages/Error404";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/sale" element={<Sale />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
