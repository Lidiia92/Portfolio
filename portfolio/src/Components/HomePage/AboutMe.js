import React from "react";

import aboutMe from "../../images/aboutme-vector.jpg";

function AboutMe() {
  return (
    <div>
      <div className="aboutme-section">
        <div className="sections-img">
          <img
            className="section-img aboutme-section__img"
            src={aboutMe}
            alt="Girl Face Vector"
          />
        </div>

        <h2 className="section-heading aboutme-heading" id="aboutme">
          About Me
        </h2>

        <div className="aboutme-wrapper">
          <div className="aboutme-description-wrapper">
            <h3 className="sections-heading__sm aboutme-heading__sm">
              Hi, I'm Lidiia.
            </h3>
            <p className="aboutme-description mg-bottom__sm">
              I am a full stack web developer who graduated from Lambda School.
              I've been programming for about two years now, finished
              programming school and doing a lot of self-learning.
            </p>
            <p className="aboutme-description mg-bottom__sm">
              I like the process of coding. Coding is time consuming, and it is
              challenging. But what makes it so great for me is that if you put
              in the effort, you will see results. I love learning and maintain
              a curious nature which lends itself greatly to software
              development.
            </p>
            <p className="aboutme-description">
              Feel free to contact me on my email or on my LinkedIn. Also don't
              forget to check my GitHub. It has a lot of cool stuff there. 🙂
            </p>
          </div>
          <div className="skills-wrapper">
            <h3
              id="skills"
              className="sections-heading__sm aboutme-heading__sm mg-top__sm"
            >
              Skills
            </h3>
            <div className="aboutme-skills">
              <ul className="skills-column margin-right">
                <li>
                  <span>HTML</span>
                </li>
                <li>
                  <span>CSS</span>
                </li>
                <li>
                  <span>Sass</span>
                </li>
                <li>
                  <span>Styled Components</span>
                </li>
                <li>
                  <span>Responsive Design</span>
                </li>
                <li>
                  <span>JavaScript</span>
                </li>
                <li>
                  <span>React</span>
                </li>
                <li>
                  <span>Redux</span>
                </li>
              </ul>
              <ul className="skills-column">
                <li>
                  <span>React Hooks</span>
                </li>
                <li>
                  <span>Node</span>
                </li>
                <li>
                  <span>RESTful API</span>
                </li>
                <li>
                  <span>SQLite</span>
                </li>
                <li>
                  <span>MongoDB</span>
                </li>
                <li>
                  <span>GraphQL</span>
                </li>
                <li>
                  <span>Python</span>
                </li>
                <li>
                  <span>Git</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
