import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Stars from "./components/Stars";
import Home from "./pages/Home";
import Planets from "./pages/Planets";
import Rockets from "./pages/Rockets";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Stars />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planets" element={<Planets />} />
        <Route path="/rockets" element={<Rockets />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
