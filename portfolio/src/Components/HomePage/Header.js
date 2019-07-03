import React from 'react';
import { Link } from "react-router-dom";


function Header() {
  return (
    <header className="header">
       
        <div className="header-wrapper">
            <div className="header-links-container">
                <Link to="#" className="header-link">About me</Link>
                <Link to="#" className="header-link">Projects</Link>
                <Link to="#" className="header-link">Skills</Link>
            </div>

        </div>

    </header>
  );
}

export default Header;
