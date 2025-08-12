// src/components/Contact.js
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const sectionStyle = {
    padding: "60px 20px",
    background: "linear-gradient(to right, white, rgb(254,215,173))",
    fontFamily: "'Poppins', sans-serif",
    textAlign: "center",
    height:"455px"
  };

  const headingStyle = {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "rgb(109,67,0)",
    marginBottom: "20px",
  };

  const detailsContainer = {
    maxWidth: "500px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    alignItems: "center",
  };

  const detailStyle = {
    fontSize: "1rem",
    color: "#444",
    cursor: "pointer",
  };

  const iconContainer = {
    display: "flex",
    gap: "15px",
    marginTop: "15px",
  };

  const iconStyle = { color: "rgb(109,67,0)", fontSize: "1.8rem", cursor: "pointer" };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("Phone number copied to clipboard!");
  };

  return (
    <section style={sectionStyle} id="contact">
      <h2 style={headingStyle} data-aos="fade-up">Get in Touch</h2>
      <h3></h3>

      <div style={detailsContainer} data-aos="fade-up" data-aos-delay="100">
        {/* Email - opens default mail app */}
        <div
          style={detailStyle}
          onClick={() => (window.location.href = "mailto:aiswarya@example.com")}
        >
          📧 aiswaryajayesh35@gmail.com
        </div>

        {/* Phone - copies to clipboard */}
        <div
          style={detailStyle}
          onClick={() => copyToClipboard("+91 9961500503")}
        >
          📱 +91 9961500503
        </div>

        {/* Social Icons */}
        <div style={iconContainer}>
          <FaLinkedin
            style={iconStyle}
            onClick={() => window.open("https://www.linkedin.com/in/aiswarya-k-j-675428322/", "_blank")}
          />
          <FaGithub
            style={iconStyle}
            onClick={() => window.open("https://github.com/Aiswarya-commits", "_blank")}
          />
        </div>
      </div>
    </section>
  );
}
