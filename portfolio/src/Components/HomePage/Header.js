import React from "react";

function Header() {
  return (
    <header className="header">
      <div className="header-wrapper">
        <div className="header-links-container">
          <a href="#projects" className="header-link">
            Projects
          </a>
          <a href="#aboutme" className="header-link">
            About me
          </a>
          <a href="#aboutme" className="header-link">
            Skills
          </a>
          <a href="#contact" className="header-link">
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
