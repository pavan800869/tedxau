import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Speakers from "./pages/Speakers";
import Schedule from "./pages/Schedule";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
