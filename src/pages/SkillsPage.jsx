// src/pages/Skills.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function SkillsPage() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const containerStyle = {
    padding: "60px 20px",
    maxWidth: "1100px",
    margin: "0 auto",
    fontFamily: "'Poppins', sans-serif",
    color: "#222",
  };

  const headingStyle = {
    fontSize: "clamp(1.5rem, 2vw + 1rem, 2.5rem)",
    fontWeight: "bold",
    marginBottom: "30px",
    color: "rgb(109,67,0)",
    textShadow: "0 0 8px rgba(109,67,0,0.3)",
    textAlign: "center",
  };

  const skillsGrid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "16px",
  };

  const skillCard = {
    padding: "14px",
    borderRadius: "8px",
    background: "rgba(0,0,0,0.04)",
    textAlign: "center",
    fontWeight: "500",
    fontSize: "1rem",
    transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
    cursor: "default",
  };

  const skillHover = {
    transform: "scale(1.05)",
    boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
  };

  const skillsList = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Next.js",
    "Tailwind CSS",
    "Bootstrap",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "Python",
    "SQL",
    "Firebase",
    "JWT Authentication",
    "Pandas",
    "NumPy",
    "Power BI",
    "Git & GitHub",
    "Excel",
    "Typescript"
  ];

  return (
    <section style={containerStyle}>
      <h1 style={headingStyle} data-aos="fade-up">
        Skills
      </h1>
      <div style={skillsGrid}>
        {skillsList.map((skill, index) => (
          <div
            key={index}
            style={skillCard}
            data-aos="zoom-in"
            data-aos-delay={index * 50}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = skillHover.transform;
              e.currentTarget.style.boxShadow = skillHover.boxShadow;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "";
              e.currentTarget.style.boxShadow = "";
            }}
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
