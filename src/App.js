import React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

// pages
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Home/Footer/Footer";
import Sale from "./Pages/Sale";
import Error404 from "./Pages/Error404";
import AffiliateMarketing from "./Pages/AffiliateMarketing";
import Wholesale from "./Pages/Wholesale";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/celestapro" element={<Home />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/affiliate" element={<AffiliateMarketing />} />
        <Route path="/wholesale" element={<Wholesale/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
