import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Planets from "./pages/Planets";
import Rockets from "./pages/Rockets";
import Reserve from "./pages/Reserve";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planets" element={<Planets />} />
        <Route path="/rockets" element={<Rockets />} />
        <Route path="/reservation" element={<Reserve />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
