import React from "react";
import "./About.css"; // Ensure you import the CSS file
import myPhoto from "../image/dp.jpg"; // Update the path to your photo
import resume from "../resume/Anubhav_Resume_2.pdf"; // Update the path to your resume file

function About() {
  return (
    <section className="about">
      <h2>About Me</h2>
      <div className="about-photo-container">
        <img src={myPhoto} alt="My Photo" className="about-photo" />
      </div>
      <p>
        A passionate MERN Stack Developer with strong proficiency in DSA,
        JavaScript, React, Node.js, Express, and MongoDB, I thrive in building
        scalable, high-performance web applications and solving complex problems
        through innovative software solutions. My experience includes both
        front-end and back-end development, where I have successfully developed
        and optimized web applications, significantly improving user experience
        and overall efficiency. In addition to my development expertise, I have
        a keen interest in algorithmic trading, where I apply my programming
        skills to develop and test trading strategies. My technical toolkit also
        includes HTML/CSS, RESTful APIs, version control with Git, and database
        management, which enable me to create robust and efficient applications.
        My ability to quickly adapt to new technologies and my commitment to
        continuous learning have been key in delivering high-quality results in
        fast-paced environments. I am currently seeking new opportunities where
        I can leverage my technical skills to contribute to impactful projects.
        I am eager to join a dynamic team that values innovation and offers
        opportunities for professional growth.
      </p>
      <a href={resume} download className="resume-button">
        Download My Resume
      </a>
    </section>
  );
}

export default About;
