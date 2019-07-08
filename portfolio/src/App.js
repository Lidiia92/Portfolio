import React, {useEffect} from 'react';
import './App.css';
import './Styles/Portfolio.css';

import Header from './Components/HomePage/Header';
import MainSection from './Components/HomePage/MainSection';
import ProjectsSection from './Components/HomePage/ProjectsSection';
import AboutMe from './Components/HomePage/AboutMe';
import Contact from './Components/HomePage/Contact';

function App(props) {

  useEffect(() => {
    //window.scroll(0, 0);
    props.history.push("/");
  }, [props.history]);




  return (
    <>
      <Header />
      <MainSection />
      <ProjectsSection />
      <AboutMe />
      <Contact />
    </>
  );
}

export default App;
