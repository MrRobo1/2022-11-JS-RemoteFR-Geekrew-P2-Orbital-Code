import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Planets from "./pages/Planets";
import Rockets from "./pages/Rockets";
// import styles from "./styles/App.module.css";

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
