import React from 'react';
import { Link } from "react-router-dom";


function Header() {
  return (
    <header className="header">
       
        <div className="header-wrapper">
            <div className="header-links">
                <Link to="#" className="nav-link">About me</Link>
                <Link to="#" className="nav-link">Projects</Link>
                <Link to="#" className="nav-link">Skills</Link>
            </div>

        </div>

    </header>
  );
}

export default Header;
