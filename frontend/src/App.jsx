import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Planets from "./pages/Planets";
import Rockets from "./pages/Rockets";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planets" element={<Planets />} />
        <Route path="/rockets" element={<Rockets />} />
      </Routes>
    </div>
  );
}

export default App;
