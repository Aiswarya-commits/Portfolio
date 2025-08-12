import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Edu.css"; // External CSS for better styling

export default function EducationTimeline() {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const educationData = [
    
    {
      year: "2025",
      degree: "React Developer",
      institute: "Bpract ",
      place:"Cyberpark, Kozhikkod",
      description: "Currently Working as React Developer",
    },
    {
      year: "2024",
      degree: "Mearn Stack Developement",
      institute: "Luminar Technolab",
      place:"Kakkanad, Ernakulam",
      description: "Completed Mearnstack developement cource and got Certificate",
    },
    {
        year: "2024",
        degree: "Data science with machine learning",
        institute: "Entri elavate learning platform",
        description: "Completed Data science course by Online and Got the completion Certificate",
      },
    {
      year: "2021 - 2024",
      degree: "Bachelor of Chemistry",
      institute: "Ccst Collage of arts and Science",
      place:"Karalmanna, Malappuram",
      description: "Specialized in Chemistry and Grduated without any backlogs",
    },
  ];

  return (
    <div className="timeline-container">
      <h2 className="timeline-title" data-aos="fade-up"></h2>
      <div className="timeline">
        {educationData.map((item, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
          >
            <div className="timeline-content">
              <span className="timeline-year">{item.year}</span>
              <h3>{item.degree}</h3>
              <h4>{item.institute}</h4>
              <h4>{item.place}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
