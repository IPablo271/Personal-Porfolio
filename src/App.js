import { isMotionValue } from 'framer-motion';
import React from 'react';

// import components
import Header from './Components/Header';
import Hero from './Components/Hero';
import About from './Components/About';
import Skills from './Components/Skills';


const App = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
      <Skills/>
      <div style={{height:'2000px'}}></div>
    </div>
  );
};

export default App;
