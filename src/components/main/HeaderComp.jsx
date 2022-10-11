import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'


export default class HeaderComp extends Component {

  render() {
    return (
        <header id="header" className="d-flex flex-column justify-content-center">
        <nav id="navbar" className="navbar nav-menu" data-aos="fade-up">
          <ul>
            <li>
              <Link to="/#hero" className="nav-link scrollto active">
                <i className="bx bx-home"></i>
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/#about" className="nav-link scrollto">
                <i className="bx bx-user"></i>
                <span>About</span>
              </Link>
            </li>
            <li>
              <Link to="/#resume" className="nav-link scrollto">
                <i className="bx bx-file-blank"></i>
                <span>Resume</span>
              </Link>
            </li>
            <li>
              <Link to="/#portfolio" className="nav-link scrollto">
                <i className="bx bx-book-content"></i>
                <span>Portofolio</span>
              </Link>
            </li>
            {/* <li>
              <a href="#services" className="nav-link scrollto">
                <i className="bx bx-server"></i>
                <span>Services</span>
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link scrollto">
                <i className="bx bx-envelope"></i>
                <span>Contact</span>
              </a>
            </li> */}

          </ul>
        </nav>

      </header>
    )
  }
}
