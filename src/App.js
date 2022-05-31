import { isMotionValue } from 'framer-motion';
import React from 'react';

// import components
import Header from './Components/Header';
import Hero from './Components/Hero';


const App = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <div style={{height:'2000px'}}></div>
    </div>
  );
};

export default App;
