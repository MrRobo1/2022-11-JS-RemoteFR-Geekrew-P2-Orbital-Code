import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Planets from "./pages/Planets";
import Rockets from "./pages/Rockets";
import Reserve from "./pages/Reserve";
import Recap from "./pages/Recap";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planets" element={<Planets />} />
        <Route path="/rockets" element={<Rockets />} />
        <Route path="/reservation" element={<Reserve />} />
        <Route path="/recap" element={<Recap />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
