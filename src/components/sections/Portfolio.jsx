import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import { select } from '../../mainFn/mainFn'
import Aos from 'aos'
import { faPlay, faPlayCircle } from '@fortawesome/free-solid-svg-icons'

export default class Portfolio extends Component {
   

  render() {
    return (
      <React.Fragment>
        <section id="portfolio" className="portfolio section-bg">
    <div className="container" data-aos="fade-up">

      <div className="section-title">
        <h2>Portfolio</h2>
        <p>So, this is a little bit of my portofolios. Enjoy watching.</p>
      </div>

      <div className="row">
        <div className="col-lg-12 d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">
          <ul id="portfolio-flters">
            <li data-filter="*" className="filter-active">All</li>
            <li data-filter=".filter-app">Web</li>
            <li data-filter=".filter-card">Game</li>
            {/* <li data-filter=".filter-web">Web</li> */}
          </ul>
        </div>
      </div>

      <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">

        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
          <div className="portfolio-wrap">
            <img src="/assets/img/portfolio/sr.jpeg" className="img-fluid" alt="" />
            <div className="portfolio-info">
              <h4>Hospitality Information System</h4>
              <p>2020</p>
              <div className="portfolio-links">
                <a href="/assets/img/portfolio/sr.jpeg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus"></i></a>
                <a href="/his" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
          <div className="portfolio-wrap d-flex justify-content-center">
            <img src="\assets\img\portfolio\kl2.png" className="img-fluid" alt="" style={{ maxHeight: '210px' }} />
            <div className="portfolio-info">
              <h4>Catalog Products</h4>
              <p>2020</p>
              <div className="portfolio-links">
                <a href="\assets\img\portfolio\kl2.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 2"><i className="bx bx-plus"></i></a>
                <a href="/catalog" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
          <div className="portfolio-wrap">
            <img src="\assets\img\portfolio\dst.png" className="img-fluid" alt="" />
            <div className="portfolio-info">
              <h4>Membership Management System</h4>
              <p>2021</p>
              <div className="portfolio-links">
                <a href="\assets\img\portfolio\dst.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 2"><i className="bx bx-plus"></i></a>
                <a href="/membership" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
          <div className="portfolio-wrap">
            <img src="\assets\img\portfolio\8220.jpg" className="img-fluid" alt="" />
            <div className="portfolio-info">
              <h4>E-Commerce System</h4>
              <p>
                August 2022
                <br />
                <span style={{ fontSize: '10px' }}>
                  Due some reasons <span className="text-danger">can't show off</span>  the project preview. 
                </span>
              </p>
              <div className="portfolio-links">
                <a href="\assets\img\portfolio\8220.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 3"><i className="bx bx-plus"></i></a>
                <a href="/ecommerce" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-card">
          <div className="portfolio-wrap">
            <img src="assets/img/portfolio/portfolio-7.jpg" className="img-fluid" alt="" />
            <div className="portfolio-info">
              <h4>Tic Tac Toe Mini Game</h4>
              <p>September 2022</p>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 1"><i className="bx bx-plus"></i></a>
                <Link to={{ pathname : '/tictactoe', state:{data:'coba'}, prop:{prop:'1'}, props:{props:2} }} className="" title="Portfolio Details">
                  <Button variant={'success'} style={{ borderRadius : '50%' }}>
                      <FontAwesomeIcon icon={faPlay} /> 
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>
{/* 
        <Helmet>
            
        </Helmet> */}
      </React.Fragment>
    )
  }
}
