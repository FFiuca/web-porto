import React, { Component } from 'react';

//components
import HeaderComp from './../main/HeaderComp';
import FooterComp from './../main/FooterComp';
import Hero from './../sections/Hero';
import About from './../sections/About';
import Resume from '../sections/Resume';
import Portfolio from '../sections/Portfolio';

class Dashboard extends Component {
    render() {
        return (
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

              <FooterComp />
            </React.Fragment>
        );
    }
}

export default Dashboard;
