import React from 'react';

import projectsVector from '../../images/projects-vector2.jpg'; 




function ProjectsSection() {
  return (
    <div className="mainsection-wrapper">
        <div className="projects-section">
            <div>
                <img className="projects-section__img" src={projectsVector}/>
            </div>

            <h2 className="projects-heading">My Projects</h2>
        </div>
    </div>
  );
}

export default ProjectsSection;