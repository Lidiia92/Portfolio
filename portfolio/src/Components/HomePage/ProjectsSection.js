import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import projectsVector from '../../images/projects-vector2.jpg'; 
import challengejs from '../../images/challengejs.jpg';




function ProjectsSection() {

  const [classes, setClasses] = useState(false);
  const [fontawesomeClass, setFontAwesomeClasses] = useState('fas fa-angle-up')

  function addClassHandler() {

    setClasses(!classes);

  }
  return (
    <div className="mainsection-wrapper">
        <div className="projects-section">
            <div className="projects-section-img">
                <img className="projects-section__img" src={projectsVector} alt="Desktop Vector"/>
            </div>

            <h2 className="projects-heading">My Projects</h2>

            <div className="projects-wrapper">


              <div className="project">
                <button className="toggle-overlay" onClick={addClassHandler}>{classes ? <FontAwesomeIcon className="arrow" icon="angle-up"/> : <FontAwesomeIcon className="arrow" icon="angle-down"/>}</button>
                <div className="project-img__container">
                  <img className="project-img" src={challengejs}/>
                  <div className={classes ? `project-overlay project-overlay__open` : `project-overlay`}>
                      <div className="overlay-text">
                          <p className="overlay-text-description">Desktop View</p>
                          <i className="fas fa-circle overlay-circle"></i>
                          <p className="overlay-text-description">Front-End</p>
                      </div>
                  </div>
                </div>
                <div className="project-text">
                  <h3 className="project-text__heading">ChallengeJS</h3>
                  <div>
                    <a className="project-link">Live Site</a>
                    <i className="fas fa-circle project-circle"></i>
                    <a className="project-link">Project Repository</a>
                  </div>
                </div>
              </div>


            </div>
        </div>
    </div>
  );
}

export default ProjectsSection;