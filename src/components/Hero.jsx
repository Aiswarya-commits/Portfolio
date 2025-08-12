// src/components/Hero.js
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import mains from "../assets/mains.png";
import Link from "../assets/linkedin.png";
import Git from "../assets/github.png";

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
          alt="Aiswarya"
          style={{ width: "100%", maxWidth: "400px" }}
        />
      </div>

      <div>
        <h1 data-aos="fade-left">
          Hey I'm <span style={{ color: "rgb(109,67,0)" }}>Aiswarya</span>
        </h1>
        <div style={typewriterStyle}>I'm a Developer</div>
        <p style={{ marginTop: "10px", fontFamily: "initial" }}>
          A passionate developer specializing in building <br /> modern,
          user-friendly, and efficient web applications. <br /> With hands-on
          experience in the MERN stack and <br /> other cutting-edge
          technologies, I love turning ideas <br /> into interactive digital
          solutions. Always eager to learn, <br /> adapt, and create with clean,
          scalable code.
        </p>
        <div style={{display:"flex"}}>
          <button
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/resume.pdf"; // Path to your file in public folder
              link.download = "Aiswarya_CV.pdf"; // Name for the downloaded file
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
            style={{
              padding: "10px 20px",
              backgroundColor: "rgb(109,67,0)",
              color: "white",
              border: "none",
              borderRadius: "5px",
              marginTop: "20px",
              cursor: "pointer",
            }}
          >
            Download CV
          </button>
          <div style={{ marginTop: "20px" }}>
            <img
              style={{ width: "30px", marginTop: "0px", marginLeft: "30px", cursor:"pointer"}}
              src={Link}
              alt=""
              onClick={() => window.open("https://www.linkedin.com/in/aiswarya-k-j-675428322/", "_blank")}

            />
            <img
              style={{ width: "35px", marginTop: "0px", marginLeft: "30px" ,cursor:"pointer"}}
              src={Git}
              alt=""
              onClick={() => window.open("https://github.com/Aiswarya-commits", "_blank")}

            />
          </div>
        </div>
      </div>
    </section>
  );
}
