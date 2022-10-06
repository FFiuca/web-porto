import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
        <header id="header" className="d-flex flex-column justify-content-center">
          <nav id="navbar" className="navbar nav-menu">
            <ul>
              <li>
                <a href="#hero" className="nav-link scrollto active">
                  <i className="bx bx-home"></i>
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#about" className="nav-link scrollto">
                  <i className="bx bx-user"></i>
                  <span>About</span>
                </a>
              </li>
              <li>
                <a href="#resume" className="nav-link scrollto">
                  <i className="bx bx-file-blank"></i>
                  <span>Resume</span>
                </a>
              </li>
              <li>
                <a href="#portofolio" className="nav-link scrollto">
                  <i className="bx bx-book-content"></i>
                  <span>Portofolio</span>
                </a>
              </li>
              <li>
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
              </li>

            </ul>
          </nav>

        </header>
    )
  }
}
