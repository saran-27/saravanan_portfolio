import React from "react";

import "./Projects.css";
function ProjectCard(
    {projectName,
    projectDescription,
    imageUrl,
    projectUrl,
    technology,
    github}) {
  return (
    <div className="project-card">
        <div className="image-container">
            <a href={projectUrl}
                className="project-external-link"
                target="_blank"
                >
                <img src={imageUrl} 
                    alt={projectName}
                    className="project-image"
                    loading="lazy"
                    />
            </a>
        </div>
        <div className="project-details-container">
        <h2 className="project-heading">
            {projectName}
        </h2>
        <p className="project-details">
            {projectDescription}
        </p>
        <p className="tech-used">
            {technology}
        </p>
        <div className="live-url-github">
            <a href={projectUrl}
            className="project-live-link"
            target="_blank">
            <button>live</button>
        </a>
        <a href={github}
            class="button" 
            className="project-live-link"
            target="_blank">
                <button>GitHub</button>
        </a>
        </div>
        </div>
    </div>
  )
}

export default ProjectCard