import React, { Component } from 'react'

export default class Catalog extends Component {

    componentDidMount(){
        setTimeout(()=>{
            console.log(document.querySelector('#preloader').remove())

        }, 500)
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
                      <img src="\assets\img\portfolio\kl2.png" alt="" />
                    </div>
      
                    <div className="swiper-slide">
                      <img src="\assets\img\portfolio\kl3.jpeg" alt="" />
                    </div>
      
                    <div className="swiper-slide">
                      <img src="\assets\img\portfolio\kl4.jpeg" alt="" />
                    </div>
      
                  </div>
                  <div className="swiper-pagination"></div>
                </div>
              </div>
      
              <div className="col-lg-4">
                <div className="portfolio-info">
                  <h3> Catalog Products </h3>
                  <ul>
                    {/* <li><strong>Category</strong>: Web design</li>
                    <li><strong>Client</strong>: ASU Company</li> */}
                    <li><strong>Project Year</strong>: 2020</li>
                    {/* <li><strong>Project URL</strong>: <a href="#">www.example.com</a></li> */}
                  </ul>
                </div>
                <div className="portfolio-description">
                  <h2>About Portfolio</h2>
                  <p class="text-justify" style={{ textAlign: 'justify' }}>
                    This is website displays the owner's products. The user also can order what they wants by chats for products choosen by user before.
                  </p>
                </div>
              </div>
      
            </div>
      
          </div>
        </section>
      
      </main>
    )
  }
}
