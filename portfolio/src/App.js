import React, {useEffect} from 'react';
import './App.css';
import './Styles/Portfolio.css';

import Header from './Components/HomePage/Header';
import MainSection from './Components/HomePage/MainSection';
import ProjectsSection from './Components/HomePage/ProjectsSection';
import AboutMe from './Components/HomePage/AboutMe';

function App(props) {

  useEffect(() => {
    //window.scroll(0, 0);
    props.history.push("/");
  }, [])




  return (
    <div className="app" >
      <Header />
      <MainSection />
      <ProjectsSection />
      <AboutMe />
    </div>
  );
}

export default App;
