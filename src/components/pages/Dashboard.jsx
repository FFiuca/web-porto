import React, { Component } from 'react';

import { GContext } from '../contexts/GlobalContext';

//components
import HeaderComp from './../main/HeaderComp';
import FooterComp from './../main/FooterComp';
import Hero from './../sections/Hero';
import About from './../sections/About';
import Resume from '../sections/Resume';
import Portfolio from '../sections/Portfolio';

class Dashboard extends Component {

  componentDidMount(){
    console.log('changeState From DB')

    // setTimeout(()=>{
      // this.context.changeState({
      //   root : {backgroundColor : '#fff'}
      // })
    // }, 500)

  }

  componentWillUnmount(){
    this.context.changeState({
      root : {backgroundColor : '#14bdac'}
    })
  }

    render() {
        return (
            <React.Fragment>

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

Dashboard.contextType = GContext

export default Dashboard;
