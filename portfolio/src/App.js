import React from 'react';
import './App.css';
import './Styles/HomePage.css';

import Header from './Components/HomePage/Header';
import SubHeader from './Components/HomePage/Subheading';

function App() {
  return (
    <div className="app">
      <Header />
      <SubHeader />
    </div>
  );
}

export default App;
