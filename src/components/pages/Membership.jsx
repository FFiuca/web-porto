import React, { Component } from 'react';

class Membership extends Component {
    componentDidMount(){
        setTimeout(() => document.getElementById('preloader').remove() ,500)
    }

    componentDidCatch(){
        console.log('catch')
    }

    componentDidUpdate(){
        console.log('update')
    }

    componentWillUnmount(){
        console.log('will unmount')
    }

    render() {
        return (
            <main id="main">
            <section id="portfolio-details" className="portfolio-details">
              <div className="container">
          
                <div className="row gy-4">
          
                  <div className="col-lg-8">
                    <div className="portfolio-details-slider swiper">
                      <div className="swiper-wrapper align-items-center">
          
                        <div className="swiper-slide">
                          <img src="\assets\img\portfolio\dst.png" alt="" />
                        </div>
          
                      </div>
                      <div className="swiper-pagination"></div>
                    </div>
                  </div>
          
                  <div className="col-lg-4">
                    <div className="portfolio-info">
                      <h3> Membership Management System </h3>
                      <ul>
                        {/* <li><strong>Category</strong>: Web design</li>
                        <li><strong>Client</strong>: ASU Company</li> */}
                        <li><strong>Project Year</strong>: 2021</li>
                        {/* <li><strong>Project URL</strong>: <a href="#">www.example.com</a></li> */}
                      </ul>
                    </div>
                    <div className="portfolio-description">
                      <h2>About Portfolio</h2>
                      <p class="text-justify" style={{ textAlign: 'justify' }}>
                        It is an app that designed to help the owner streamline how you connect with his members, as well as gather and disseminate information to market toward specific membership groups. Orders between member and credit point includes in this app too.
                      </p>
                    </div>
                  </div>
          
                </div>
          
              </div>
            </section>
          
          </main>
        );
    }
}

export default Membership;