// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "./App.css";
import AboutPage from "./pages/AboutPage";
import SkillsPage from "./pages/SkillsPage";
// import ServicesPage from "./pages/ServicesPage";
import BlogsPage from "./pages/BlogsPage";
// import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        {/* <Route path="/services" element={<ServicesPage />} /> */}
        <Route path="/blogs" element={<BlogsPage />} />
        {/* <Route path="/contact" element={<ContactPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
