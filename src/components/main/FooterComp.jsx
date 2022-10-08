import React, { Component } from 'react'

export default class FooterComp extends Component {
  render() {
    return (
        <footer id="footer">
        <div class="container">
          <h3>Thank You! <span style={{ fontSize: '38px' }}>&#128513;</span></h3>
          {/* <p>Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.</p> */}
          <div class="social-links">
                <a href="https://www.facebook.com/OneofDUStudents" className="facebook" target={'_blank'} rel={['noopener noreferrer']}>
                    <i className="bx bxl-facebook"></i>
                </a>
                <a href="https://www.instagram.com/fikrifardana_" className="instagram" target={'_blank'}  rel={['noopener noreferrer']}>
                    <i className="bx bxl-instagram"></i>
                </a>
                <a href="https://github.com/FFiuca" className="google-plus" target={'_blank'}  rel={['noopener noreferrer']}>
                    <i className="bx bxl-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/fikri-f-339546107/" className="linkedin" target={'_blank'}  rel={['noopener noreferrer']}>
                    <i className="bx bxl-linkedin"></i>
                </a>
          </div>
          <div class="copyright">
            &copy; Copyright <strong><span>MyResume</span></strong>. All Rights Reserved
          </div>
          <div class="credits">
            Template Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div>
        </div>
      </footer>
    )
  }
}
