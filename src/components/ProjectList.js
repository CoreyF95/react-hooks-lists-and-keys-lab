import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{/* render ProjectItem components here */}</div>
      {projects.map((project) => {
        return (
          <ProjectItem 
            key={project.id}
            name={project.name}
            items={project.items}
            technologies={project.technologies}
          />
        )
      })}
    </div>
  );
}

export default ProjectList;
