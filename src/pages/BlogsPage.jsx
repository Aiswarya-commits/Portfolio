// src/pages/Projects.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import event from "../assets/event.png"

export default function ProjectsPage() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const containerStyle = {
    padding: "60px 20px",
    maxWidth: "1200px",
    margin: "0 auto",
    fontFamily: "'Poppins', sans-serif",
    color: "#222",
  };

  const headingStyle = {
    fontSize: "clamp(1.5rem, 2vw + 1rem, 2.5rem)",
    fontWeight: "bold",
    marginBottom: "40px",
    color: "rgb(109,67,0)",
    textShadow: "0 0 8px rgba(109,67,0,0.3)",
    textAlign: "center",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px",
  };

  const cardStyle = {
    background: "#fff",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  };

  const cardHover = {
    transform: "translateY(-8px)",
    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
  };

  const imgStyle = {
    width: "100%",
    height: "180px",
    objectFit: "cover",
  };

  const contentStyle = {
    padding: "16px",
    flex: "1",
    display: "flex",
    flexDirection: "column",
  };

  const titleStyle = {
    fontSize: "1.2rem",
    fontWeight: "bold",
    marginBottom: "8px",
    color: "rgb(109,67,0)",
  };

  const descStyle = {
    fontSize: "0.95rem",
    flexGrow: "1",
    marginBottom: "12px",
  };

  const techListStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "6px",
    marginBottom: "12px",
  };

  const techItemStyle = {
    fontSize: "0.75rem",
    padding: "4px 8px",
    background: "rgba(109,67,0,0.1)",
    borderRadius: "6px",
    color: "rgb(109,67,0)",
  };

  const btnGroupStyle = {
    display: "flex",
    gap: "10px",
    marginTop: "auto",
  };

  const btnStyle = {
    flex: 1,
    padding: "8px 12px",
    borderRadius: "6px",
    textDecoration: "none",
    textAlign: "center",
    fontWeight: "600",
    fontSize: "0.85rem",
    transition: "background 0.3s ease",
  };

  const liveBtnStyle = {
    ...btnStyle,
    background: "rgb(109,67,0)",
    color: "#fff",
  };

  const githubBtnStyle = {
    ...btnStyle,
    background: "rgba(109,67,0,0.15)",
    color: "rgb(109,67,0)",
  };

  const projects = [
    {
      title: "Food Delivery Website",
      desc: "Full-stack application allowing users to browse, order food, and track delivery with an admin panel.",
      img: {event},
      tech: ["React", "MongoDB", "Express", "Node.js"],
      live: "https://food-topia-frontend.onrender.com/",
      github: "https://github.com/Aiswarya-commits",
    },
    {
      title: "Event Management Website",
      desc: "Responsive platform for booking and managing special events online.",
      img: "https://via.placeholder.com/400x250?text=Event+Management",
      tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      live: "https://event-management-alpha-seven.vercel.app/",
      github: "https://github.com/Aiswarya-commits",
    },
    {
      title: "Media Player",
      desc: "Web-based media player where users can add, update, and delete music/videos.",
      img: "https://via.placeholder.com/400x250?text=Media+Player",
      tech: ["React", "JavaScript", "Bootstrap"],
      live: "https://media-player-tawny-kappa.vercel.app/",
      github: "https://github.com/Aiswarya-commits",
    },
    {
      title: "GSAP Website",
      desc: "Animated website built with GSAP for smooth scrolling and transitions.",
      img: "https://via.placeholder.com/400x250?text=GSAP+Website",
      tech: ["HTML", "CSS", "Bootstrap", "GSAP"],
      live: "https://gsap-website-drab.vercel.app/",
      github: "https://github.com/Aiswarya-commits",
    },
    {
      title: "Real Estate Data Analysis",
      desc: "Data science project analyzing and visualizing real estate data.",
      img: "https://via.placeholder.com/400x250?text=Real+Estate+Analysis",
      tech: ["Python", "SQL", "Power BI"],
      live: "#",
      github: "https://github.com/Aiswarya-commits",
    },
  ];

  return (
    <section style={containerStyle}>
      <h1 style={headingStyle} data-aos="fade-up">
        Projects
      </h1>
      <div style={gridStyle}>
        {projects.map((project, index) => (
          <div
            key={index}
            style={cardStyle}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = cardHover.transform;
              e.currentTarget.style.boxShadow = cardHover.boxShadow;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "";
              e.currentTarget.style.boxShadow = "";
            }}
          >
            <img
              src={project.img}
              alt={project.title}
              style={imgStyle}
              onError={(e) => {
                e.target.src =
                  "https://via.placeholder.com/400x250?text=No+Image";
              }}
            />
            <div style={contentStyle}>
              <h3 style={titleStyle}>{project.title}</h3>
              <p style={descStyle}>{project.desc}</p>
              <div style={techListStyle}>
                {project.tech.map((tech, i) => (
                  <span key={i} style={techItemStyle}>
                    {tech}
                  </span>
                ))}
              </div>
              <div style={btnGroupStyle}>
                {project.live && project.live !== "#" && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" style={liveBtnStyle}>
                    Live Demo
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" style={githubBtnStyle}>
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
