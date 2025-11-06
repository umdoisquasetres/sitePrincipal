
import React from 'react';

import './App.css';

import Header from './components/Header';

import Hero from './components/Hero';

import About from './components/About';

import Services from './components/Services';

import Testimonials from './components/Testimonials';

import Contact from './components/Contact';

import Footer from './components/Footer';

import useScrollAnimation from './hooks/useScrollAnimation';

import { useScrollSpy } from './hooks/useScrollSpy';



const App: React.FC = () => {

  useScrollAnimation();

  useScrollSpy('.navigation a');



  return (

    <div className="App">

      <Header />

      <Hero />

      <About />

      <Services />

      <Testimonials />

            <Contact />

          </div>

  );

}

export default App;
