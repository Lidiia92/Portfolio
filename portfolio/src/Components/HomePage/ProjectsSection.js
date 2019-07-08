import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import projectsVector from '../../images/projects-vector2.jpg'; 
import challengejs from '../../images/challengejs.jpg';
import droom from '../../images/droom.jpg';
import waterMyPlants from '../../images/water-my-plants.jpg';
import clearView from '../../images/clear-view.jpg';
import instaClone from '../../images/insta-clone.jpg';

import graphql from '../../images/graphql.png';
import mongo from '../../images/mongo.png';
import sqlite from '../../images/sqlite.png';
import webpack from '../../images/webpack.png';




function ProjectsSection() {

  const [classesProject1, setClassesProject1] = useState(false);
  const [classesProject2, setClassesProject2] = useState(false);
  const [classesProject3, setClassesProject3] = useState(false);
  const [classesProject4, setClassesProject4] = useState(false);
  const [classesProject5, setClassesProject5] = useState(false);
  

  function addClassHandler1() {
    setClassesProject1(!classesProject1);

  }

  function addClassHandler2() {
    setClassesProject2(!classesProject2);

  }

  
  function addClassHandler3() {
    setClassesProject3(!classesProject3);

  }

  function addClassHandler4() {
    setClassesProject4(!classesProject4);

  }

  function addClassHandler5() {
    setClassesProject5(!classesProject5);

  }


  return (
    <div className="mainsection-wrapper">
        <div id="projects" className="projects-section">
            <div className="sections-img">
                <img className="section-img projects-section__img" src={projectsVector} alt="Desktop Vector"/>
            </div>

            <h2 className="section-heading projects-heading">My Projects</h2>

            <div className="projects-wrapper">


              <div className="project">
                <button className="toggle-overlay" onClick={addClassHandler1}>{classesProject1 ? <FontAwesomeIcon className="arrow" icon="angle-up"/> : <FontAwesomeIcon className="arrow" icon="angle-down"/>}</button>
                <div className="project-img__container">
                  <img className="project-img" src={challengejs} alt="ChallengeJS Project"/>
                  <div className={classesProject1 ? `project-overlay project-overlay__open` : `project-overlay`}>
                      <div className="overlay-text">
                          <div>
                            <p className="overlay-text-description">Desktop View</p>
                            <i className="fas fa-circle overlay-circle"></i>
                            <p className="overlay-text-description">Front-End</p>
                          </div>
                          <div className="overlay-icons">
                            <i className="fab fa-react overlay-icon mg-right" title="React"></i>
                            <i class="fab fa-css3-alt overlay-icon" title="CSS"></i>
                          </div>
                      </div>
                  </div>
                </div>
                <div className="project-text">
                  <h3 className="project-text__heading">ChallengeJS</h3>
                  <div>
                    <a className="project-link" href="https://clone-coding-client.herokuapp.com/" target="_blank" rel="noopener noreferrer">Live Site</a>
                    <i className="fas fa-circle project-circle"></i>
                    <a className="project-link" href="https://github.com/labs13-clone/front-end" target="_blank" rel="noopener noreferrer">Project Repository</a>
                  </div>
                </div>
              </div>

              
              <div className="project">
                <button className="toggle-overlay" onClick={addClassHandler2}>{classesProject2 ? <FontAwesomeIcon className="arrow" icon="angle-up"/> : <FontAwesomeIcon className="arrow" icon="angle-down"/>}</button>
                <div className="project-img__container">
                  <img className="project-img" src={droom} alt="Droom Project"/>
                  <div className={classesProject2 ? `project-overlay project-overlay__open` : `project-overlay`}>
                      <div className="overlay-text">
                          <div>
                            <p className="overlay-text-description">Responsive</p>
                            <i className="fas fa-circle overlay-circle"></i>
                            <p className="overlay-text-description">Full-Stack</p>
                          </div>
                          <p className="overlay-text-description">In Progress</p>
                          <div className="overlay-icons">
                            <i className="fab fa-node-js overlay-icon mg-right" title="Node.js"></i>
                            <img src={graphql} className="overlay-icon__img mg-right" title="GraphQL"/>
                            <img src={mongo} className="overlay-icon__img mg-right" title="MongoDB"/>
                            <i className="fab fa-react overlay-icon mg-right" title="React"></i>
                            <i className="fab fa-css3-alt overlay-icon" title="CSS"></i>
                          </div>
                      </div>
                  </div>
                </div>
                <div className="project-text">
                  <h3 className="project-text__heading">Droom</h3>
                  <div>
                    <a className="project-link" href="https://react-apollo-droom.herokuapp.com/" target="_blank" rel="noopener noreferrer">Live Site</a>
                    <i className="fas fa-circle project-circle"></i>
                    <a className="project-link" href="https://github.com/Lidiia92/Droom" target="_blank" rel="noopener noreferrer">Project Repository</a>
                  </div>
                </div>
              </div>

              
              <div className="project">
                <button className="toggle-overlay" onClick={addClassHandler3}>{classesProject3 ? <FontAwesomeIcon className="arrow" icon="angle-up"/> : <FontAwesomeIcon className="arrow" icon="angle-down"/>}</button>
                <div className="project-img__container">
                  <img className="project-img" src={waterMyPlants} alt="Water My Plants Project"/>
                  <div className={classesProject3 ? `project-overlay project-overlay__open` : `project-overlay`}>
                      <div className="overlay-text">
                          <div>
                            <p className="overlay-text-description">Desktop View</p>
                            <i className="fas fa-circle overlay-circle"></i>
                            <p className="overlay-text-description">Full-Stack</p>
                          </div>
                          <div className="overlay-icons">
                            <i className="fab fa-node-js overlay-icon mg-right" title="Node.js"></i>
                            <img src={sqlite} className="overlay-icon__img mg-right png-icon" title="SQLite"/>
                            <p className="overlay-emoji mg-right" title="Styled Componets">💅</p>
                            <i className="fab fa-react overlay-icon mg-right" title="React"></i>
                            <i class="fab fa-css3-alt overlay-icon" title="CSS"></i>
                          </div>
                      </div>
                  </div>
                </div>
                <div className="project-text">
                  <h3 className="project-text__heading">Water My Plants</h3>
                  <div>
                    <a className="project-link" href="https://water-plants.netlify.com/" target="_blank" rel="noopener noreferrer">Live Site</a>
                    <i className="fas fa-circle project-circle"></i>
                    <a className="project-link" href="https://github.com/Lidiia92/Water_the_Plants_react" target="_blank" rel="noopener noreferrer">Project Repository</a>
                  </div>
                </div>
              </div>

              
              <div className="project">
                <button className="toggle-overlay" onClick={addClassHandler4}>{classesProject4 ? <FontAwesomeIcon className="arrow" icon="angle-up"/> : <FontAwesomeIcon className="arrow" icon="angle-down"/>}</button>
                <div className="project-img__container">
                  <img className="project-img" src={clearView} alt="Clear View Escapes Project"/>
                  <div className={classesProject4 ? `project-overlay project-overlay__open` : `project-overlay`}>
                      <div className="overlay-text">
                          <div>
                            <p className="overlay-text-description">Responsive</p>
                            <i className="fas fa-circle overlay-circle"></i>
                            <p className="overlay-text-description">Front-End</p>
                          </div>
                          <div className="overlay-icons">
                            <i class="fab fa-js overlay-icon mg-right" title="JavaScript"></i>
                            <i class="fab fa-gulp overlay-icon mg-right" title="Gulp.js"></i>
                            <img src={webpack} className="overlay-icon__img mg-right webpack" title="Webpack"/>
                            <i class="fab fa-html5 overlay-icon mg-right" title="HTML"></i>
                            <i class="fab fa-css3-alt overlay-icon" title="CSS"></i>
                          </div>
                      </div>
                  </div>
                </div>
                <div className="project-text">
                  <h3 className="project-text__heading">Clear View Escapes</h3>
                  <div>
                    <a className="project-link" href="https://travel-site-clear-view.netlify.com/" target="_blank" rel="noopener noreferrer">Live Site</a>
                    <i className="fas fa-circle project-circle"></i>
                    <a className="project-link" href="https://github.com/Lidiia92/Travel-site" target="_blank" rel="noopener noreferrer">Project Repository</a>
                  </div>
                </div>
              </div>


              
              <div className="project">
                <button className="toggle-overlay" onClick={addClassHandler5}>{classesProject5 ? <FontAwesomeIcon className="arrow" icon="angle-up"/> : <FontAwesomeIcon className="arrow" icon="angle-down"/>}</button>
                <div className="project-img__container">
                  <img className="project-img" src={instaClone} alt="Instagram Clone Project"/>
                  <div className={classesProject5 ? `project-overlay project-overlay__open` : `project-overlay`}>
                      <div className="overlay-text">
                          <div>
                            <p className="overlay-text-description">Desktop View</p>
                            <i className="fas fa-circle overlay-circle"></i>
                            <p className="overlay-text-description">Front-End</p>
                          </div>
                          <div className="overlay-icons">
                            <i className="fab fa-react overlay-icon mg-right" title="React"></i>
                            <p className="overlay-emoji mg-right" title="Styled Componets">💅</p>
                            <i class="fab fa-css3-alt overlay-icon" title="CSS"></i>
                          </div>
                      </div>
                  </div>
                </div>
                <div className="project-text">
                  <h3 className="project-text__heading">Instagram Clone</h3>
                  <div>
                    <a className="project-link" href="https://insta-clone-react.netlify.com/" target="_blank" rel="noopener noreferrer">Live Site</a>
                    <i className="fas fa-circle project-circle"></i>
                    <a className="project-link" href="https://github.com/Lidiia92/React-Insta-Clone" target="_blank" rel="noopener noreferrer">Project Repository</a>
                  </div>
                </div>
              </div>


            </div>
        </div>
    </div>
  );
}

export default ProjectsSection;