import React from 'react';
import { Link } from "react-router-dom";


function Header() {
  return (
    <header>
        <div className="subheader">
            <div className="header-wrapper">
                <div className="subheader-links">
                    <Link to="#" className="nav-link">Home</Link>
                    <Link to="#" className="nav-link">About me</Link>
                    <Link to="#" className="nav-link">Projects</Link>
                    <Link to="#" className="nav-link">Skills</Link>
                </div>
            </div>
        </div>

        <div className="header-wrapper mg-top mg-bottom">
            <div>
                <div>
                    <span className="header-logo logo-sm">Daily</span>
                    <span className="header-logo logo-lg">Developer</span>
                </div>
            </div>

            <div className="header-links">
                <i className="fab fa-github-square icon"></i>
                <i class="fab fa-linkedin icon"></i>
                <h4 className="email">lidiiany92@gmail.com</h4>
            </div>
        </div>

    </header>
  );
}

export default Header;
