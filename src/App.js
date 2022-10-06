import React from 'react';
import { Routes, Router,  } from 'react-router-dom';

import logo from './logo.svg';

import './App.css';

//components
import HeaderComp from './components/main/HeaderComp';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Resume from './components/sections/Resume';
import Portofolio from './components/sections/Portofolio';


function App() {
  return (
    <React.Fragment>
      <i className="bi bi-list mobile-nav-toggle d-lg-none"></i>
      
      {/* Hedaer */}
      <HeaderComp />

      {/* Sections */}
      <Hero />

      <main id="main">
        <About />
        <Resume />
        <Portofolio />
      </main>

      { console.log(`%PUBLIC_URL%`) }
    </React.Fragment>
  );
}

export default App;
