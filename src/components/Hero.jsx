// src/components/Hero.js
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import mains from "../assets/mains.png";

export default function Hero() {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const heroStyle = {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: "90vh",
    background: "linear-gradient(to right, white, rgb(254,215,173))",
  };

  const typewriterStyle = {
    fontWeight: 600,
    fontSize: "2rem",
    color: "rgb(109,67,0)",
  };

  return (
    <section style={heroStyle}>
      <div data-aos="zoom-in-right">
        <img
          src={mains}
          alt="Amelia"
          style={{ width: "100%", maxWidth: "400px" }}
        />
      </div>

      <div>
        <h1 data-aos="fade-left">
          Hey I'm <span style={{ color: "rgb(109,67,0)" }}>Amelia</span>
        </h1>
        <div style={typewriterStyle}>I'm a Developer</div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "rgb(109,67,0)",
            color: "white",
            border: "none",
            borderRadius: "5px",
            marginTop: "20px",
          }}
        >
          Download CV
        </button>
      </div>
    </section>
  );
}
