import React from 'react';




function SubHeader() {
  return (
    <header className="subheader-wrapper">
        <div className="subheader-text">
            <h2>Lidiia Gallagher</h2>
            <h3><i class="fas fa-ellipsis-h title"></i></h3>
            <h3 className="mg-bottom">Full-Stack Web Developer</h3>
        </div>

        <div className="second-section">
            <div>
                <img className="second-section__img" src="https://image.freepik.com/free-vector/nice-designer-desktop_23-2147529736.jpg"/>
            </div>
        </div>
    </header>
  );
}

export default SubHeader;