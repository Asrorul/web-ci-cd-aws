import React from 'react';
import { projects } from '../data/portfolio';

const Projects = () => {
  const handleImageError = (e) => {
    e.target.src = "https://placehold.co/600x400/2563eb/ffffff?text=Project+Preview";
    e.target.alt = "Project Preview";
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <img 
                src={project.image} 
                alt={project.title} 
                className="project-image" 
                onError={handleImageError}
              />
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.technologies.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">Live Demo</a>
                  <a href={project.sourceCode} target="_blank" rel="noopener noreferrer">Source Code</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
