import React from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';

import logo from './logo.svg';

import './App.css';

//components
import HeaderComp from './components/main/HeaderComp';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Resume from './components/sections/Resume';
import Portfolio from './components/sections/Portfolio';

//page
import HIS from './components/pages/HIS';


function App() {
  return (
    <React.Fragment>
      <i className="bi bi-list mobile-nav-toggle d-lg-none"></i>
      <Router>
        <Routes>
          <Route exact path="/" element={
            <React.Fragment>
              {/* Hedaer */}
              <HeaderComp />

              {/* Sections */}
              <Hero />

              <main id="main">
                <About />
                <Resume />
                <Portfolio />
              </main>
            </React.Fragment>
          } />

          {/* Page */}
          <Route path="his" element={<HIS></HIS>}></Route>
        </Routes>

      </Router>
      

      { console.log(`%PUBLIC_URL%`) }
    </React.Fragment>
  );
}

export default App;
