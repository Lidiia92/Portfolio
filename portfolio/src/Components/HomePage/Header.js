import React from 'react';
import { Link } from "react-router-dom";


function Header() {


  return (
    <header className="header">
       
        <div className="header-wrapper">
            <div className="header-links-container">
                <a href="#" className="header-link">About me</a>
                <a href="#projects" className="header-link" >Projects</a>
                <Link to="#" className="header-link">Skills</Link>
            </div>

        </div>

    </header>
  );
}

export default Header;
