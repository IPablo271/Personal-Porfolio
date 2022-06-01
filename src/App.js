import { isMotionValue } from 'framer-motion';
import React from 'react';

// import components
import Header from './Components/Header';
import Hero from './Components/Hero';
import About from './Components/About';
import Skills from './Components/Skills';
import Portfolio  from './Components/Portfolio';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
const App = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
      <Skills/>
      <Portfolio/>
      <Services/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;
