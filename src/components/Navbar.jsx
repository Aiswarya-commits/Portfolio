// src/components/Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navStyle = {
    width: "100%",
    height: "10vh",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    background: "linear-gradient(to right, white, rgb(254,215,173))",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  };

  const linkStyle = {
    textDecoration: "none",
    fontSize: "1.2rem",
    fontWeight: 500,
    color: "black",
  };

  const mobileMenuStyle = {
    position: "absolute",
    top: 0,
    left: isOpen ? 0 : "-100%",
    width: "100%",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.9)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    transition: "0.3s ease-in-out",
  };

  return (
    <nav style={navStyle}>
      <div style={{ fontWeight: "bold", fontSize: "2rem" }}>
        <span style={{ color: "rgb(109,67,0)", textShadow: "0 0 10px rgb(109,67,0)" }}>
          Aiswarya
        </span>
      </div>

      {/* Desktop Links */}
      <div className="links" style={{ display: "flex", gap: "2rem" }}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/about" style={linkStyle}>About</Link>
        <Link to="/skills" style={linkStyle}>Skills</Link>
        {/* <Link to="/services" style={linkStyle}>Services</Link> */}
        <Link to="/blogs" style={linkStyle}>Projects</Link>
        <Link to="/contact" style={{ ...linkStyle, border: "2px solid rgb(109,67,0)", padding: "5px 15px", borderRadius: "20px" }}>Contact</Link>
      </div>

      {/* Mobile Icon */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)} style={{ display: "none" }}>
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      {/* Mobile Menu */}
      <div style={mobileMenuStyle}>
        <Link to="/" style={{ ...linkStyle, color: "white", margin: "10px" }} onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/about" style={{ ...linkStyle, color: "white", margin: "10px" }} onClick={() => setIsOpen(false)}>About</Link>
        <Link to="/skills" style={{ ...linkStyle, color: "white", margin: "10px" }} onClick={() => setIsOpen(false)}>Skills</Link>
        <Link to="/services" style={{ ...linkStyle, color: "white", margin: "10px" }} onClick={() => setIsOpen(false)}>Services</Link>
        <Link to="/blogs" style={{ ...linkStyle, color: "white", margin: "10px" }} onClick={() => setIsOpen(false)}>Blogs</Link>
        <Link to="/contact" style={{ ...linkStyle, color: "white", margin: "10px" }} onClick={() => setIsOpen(false)}>Contact</Link>
      </div>
    </nav>
  );
}
