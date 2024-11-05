import React from "react";
import "./Experience.css";
import resume from "../resume/Anubhav_Resume_2.pdf"; // Correct relative path to the PDF file

function Experience() {
  const experiences = [
    {
      role: "Frontend Developer",
      company: "ABC Corp",
      description:
        "Developed and maintained user interfaces with React and CSS.",
    },
    {
      role: "Software Engineer",
      company: "XYZ Ltd",
      description:
        "Worked on full-stack development projects using the MERN stack.",
    },
  ];

  return (
    <section className="experience">
      <h2 className="experience-heading" data-text="My Experience">
        My Experience
      </h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div className="experience-item" key={index}>
            <h3>{exp.role}</h3>
            <h4>{exp.company}</h4>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
      <a href={resume} download className="resume-button">
        Download My Resume
      </a>
    </section>
  );
}

export default Experience;
