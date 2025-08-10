// src/pages/About.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutPage() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const containerStyle = {
    padding: "60px 20px",
    maxWidth: "1100px",
    margin: "0 auto",
    fontFamily: "'Poppins', sans-serif",
    color: "#222",
    lineHeight: 1.6,
  };

  const headingStyle = {
    fontSize: "clamp(1.5rem, 2vw + 1rem, 2.5rem)",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "rgb(109,67,0)",
    textShadow: "0 0 8px rgba(109,67,0,0.3)",
  };

  const paragraphStyle = {
    marginBottom: "16px",
    fontSize: "1rem",
  };

  return (
    <section style={containerStyle}>
      <h1 style={headingStyle} data-aos="fade-up">
        About Me
      </h1>

      <p style={paragraphStyle} data-aos="fade-up" data-aos-delay="100">
        I’m <strong>Aiswarya K J</strong>, a passionate and detail-oriented{" "}
        <strong>React Developer</strong> with hands-on experience in building
        responsive, dynamic web applications and working across the full MEARN
        stack. My journey started with a B.Sc. in Chemistry, but my curiosity
        for technology led me into the world of software development, where
        I’ve honed skills in{" "}
        <strong>
          HTML, CSS, JavaScript, React, MongoDB, Express, Node.js, and Python
        </strong>
        .
      </p>

      <p style={paragraphStyle} data-aos="fade-up" data-aos-delay="200">
        Currently, I work at <strong>Bpract Software Solutions LLP</strong>,
        creating intuitive and high-performing user interfaces, while also
        contributing to backend functionalities. My experience spans across{" "}
        <strong>frontend development</strong>, <strong>full-stack projects</strong>,
        and <strong>data science applications</strong>, including real-world
        projects like a full-stack food delivery website, an event management
        system, and data-driven real estate analysis.
      </p>

      <p style={paragraphStyle} data-aos="fade-up" data-aos-delay="300">
        I’m recognized for my <strong>leadership skills</strong>, having led
        teams in both development and data science projects, ensuring timely
        delivery and quality results. I thrive in collaborative environments,
        adapt quickly to new technologies, and consistently strive to deliver
        clean, efficient, and impactful solutions.
      </p>

      <p style={paragraphStyle} data-aos="fade-up" data-aos-delay="400">
        When I’m not coding, I enjoy exploring new tech tools, improving my
        problem-solving skills, and turning ideas into functional, user-friendly
        digital experiences.
      </p>
    </section>
  );
}
