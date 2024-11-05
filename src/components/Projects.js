import React, { useState } from "react";
import "./Projects.css"; // Ensure you import the updated CSS file
import netflixGif from "../image/netflix.gif";
import project2Gif from "../image/project2.gif";
import logoColor from "../image/logo-color.png";
import Project4 from "../image/Project4.jpg";

function Projects() {
  // State to track which project description is expanded
  const [expandedProject, setExpandedProject] = useState(null);

  const projectsList = [
    {
      title: "Netflix Clone",
      description:
        "This is a brief description for Project 1. This part is always visible. ",
      fullDescription:
        "Here’s more detailed information about Project 1 that is shown only after clicking 'Read More.'",
      image: netflixGif, // Update with the correct path to the image or GIF
    },
    {
      title: "Image Classifier",
      description:
        "This is a brief description for Project 2. This part is always visible. ",
      fullDescription:
        "Additional details about Project 2 that appear when you click 'Read More.'",
      image: project2Gif,
    },
    {
      title: "Codeclarify",
      description:
        "This is a brief description for Project 3. This part is always visible. ",
      fullDescription:
        "Further insights into Project 3 are displayed here after clicking 'Read More.'",
      image: logoColor,
    },
    {
      title: "Image Classifier",
      description:
        "This is a brief description for Project 4. This part is always visible. ",
      fullDescription:
        "Extra details about Project 4 appear here when 'Read More' is clicked.",
      image: Project4,
    },
  ];

  const toggleReadMore = (index) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <section className="projects">
      <h2 className="projects-heading">My Projects</h2>
      <div className="project-cards-container">
        {projectsList.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <p>
              {project.description}
              {expandedProject === index && (
                <span className="full-description">
                  {project.fullDescription}
                </span>
              )}
            </p>
            <button
              className="toggle-button"
              onClick={() => toggleReadMore(index)}
            >
              {expandedProject === index ? "Read Less" : "Read More"}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
