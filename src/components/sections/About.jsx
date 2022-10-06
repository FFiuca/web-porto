import React, { Component } from 'react'

//plugin
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3, faReact, faJs, faPhp, faLaravel, faNodeJs, faGit, faGithub, faGitAlt } from '@fortawesome/free-brands-svg-icons'
import styled from 'styled-components'
import { faFire, faFireAlt, faFireBurner, faFireFlameCurved } from '@fortawesome/free-solid-svg-icons'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'

import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/dist/backdrop.css';
import 'tippy.js/animations/shift-away.css'


export default class About extends Component {
   
    componentDidMount(){
        
        const tooltip = tippy('#question-freelance', {
            content: 'Although I’m not currently looking for freelance opportunities <span style="color: #ABCA81">due some reasons</span>, my inbox is always open. Whether you have a question or just want to say hi, <span style="color: #ABCA81">I’ll try my best to get back to you!</span>',
            allowHTML: true,
            animateFill: true
        })

    }

    

  render() {
    return (
        <React.Fragment>
            <section id="about" className="about">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>About</h2>
                        <p>Hello, I'm Uca. My relationship with Technology started at a junior high school, specifically when I play games almost every time. Grateful, I became Programmer now who proficient in Full Stack Developer for 3 years. And during that times, I really enjoyed when developing Back End of the apps.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4">
                            <img src="/assets/img/photo_6192946978447537213_y.jpg" className="img-fluid" alt="" />
                        </div>
                        <div className="col-lg-8 pt-4 pt-lg-0 content">
                            <h3>My Biography</h3>
                            <p className="">
                             Let me introduce some facts about me first, as below :
                            </p>
                            <div className="row">
                            <div className="col-lg-6">
                                <ul>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>24</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>08311734xxxx</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>East Java, Indonesia</span></li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <ul>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Bachelor</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span><a style={{ color:'blue', textDecoration:'none',  }} href="mailto:fkrfiuca@gmail.com">fkrfiuca@gmail.com</a></span></li>
                                    <li>
                                        <i className="bi bi-chevron-right"></i> 
                                        <strong>Freelance:</strong> <span>Not Available <a href="#" id="question-freelance"> <FontAwesomeIcon icon={faQuestionCircle}></FontAwesomeIcon></a></span>
                                        
                                    </li>
                                </ul>
                            </div>
                            </div>
                            <p>
                                I also recently buy some courses to levelling up my skill. Perhaps some day, I can mastering DevOps Skills and others Back-End Technology. 
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="skills" className="skills facts section-bg">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>Skills</h2>
                        <p>Here are a few technologies I’ve been working or learning with recently.</p>
                    </div>

                    <div className="row skills-content">
                        <div className="col-md-4">
                            <div className="row">
                                <div className="col text-center">
                                    <h5>
                                        <b>Front End Stacks</b>
                                    </h5>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <div className="count-box mt-0">
                                        <FontAwesomeIcon icon={faHtml5} style={{ 
                                            background: '#E56128',
                                            borderRadius: '50px',
                                            height: '48px',
                                            width: '48px',
                                            fontSize: '24px',
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: 'white'

                                         }}></FontAwesomeIcon>
                                        {/* <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span> */}
                                        <p>
                                           <b>HTML</b>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="count-box mt-0">
                                        <FontAwesomeIcon icon={faCss3} style={{ 
                                            background: '#146CAD',
                                            borderRadius: '50px',
                                            height: '48px',
                                            width: '48px',
                                            fontSize: '24px',
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: 'white'

                                         }}></FontAwesomeIcon>
                                        {/* <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span> */}
                                        <p>
                                           <b>CSS</b>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="count-box mt-0">
                                        <FontAwesomeIcon icon={faJs} style={{ 
                                            background: '#EAD41C',
                                            borderRadius: '50px',
                                            height: '48px',
                                            width: '48px',
                                            fontSize: '24px',
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: 'white'

                                         }}></FontAwesomeIcon>
                                        {/* <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span> */}
                                        <p>
                                           <b>Javascript</b>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="count-box mt-0">
                                        <FontAwesomeIcon icon={faReact} style={{ 
                                            background: '#5BCEEE',
                                            borderRadius: '50px',
                                            height: '48px',
                                            width: '48px',
                                            fontSize: '24px',
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: 'white'

                                         }}></FontAwesomeIcon>
                                        {/* <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span> */}
                                        <p>
                                           <b>React</b>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="row">
                                <div className="col text-center">
                                    <h5>
                                        <b>Back End Stacks</b>
                                    </h5>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <div className="count-box mt-0">
                                        <FontAwesomeIcon icon={faPhp} style={{ 
                                            background: '#DD4915',
                                            borderRadius: '50px',
                                            height: '48px',
                                            width: '48px',
                                            fontSize: '24px',
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: 'white'

                                         }}></FontAwesomeIcon>
                                        {/* <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span> */}
                                        <p>
                                           <b>CodeIgniter</b>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="count-box mt-0">
                                        <FontAwesomeIcon icon={faLaravel} style={{ 
                                            background: '#FF6E65',
                                            borderRadius: '50px',
                                            height: '48px',
                                            width: '48px',
                                            fontSize: '24px',
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: 'white'

                                         }}></FontAwesomeIcon>
                                        {/* <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span> */}
                                        <p>
                                           <b>Laravel</b>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="count-box mt-0">
                                        <FontAwesomeIcon icon={faNodeJs} style={{ 
                                            background: '#619561',
                                            borderRadius: '50px',
                                            height: '48px',
                                            width: '48px',
                                            fontSize: '24px',
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: 'white'

                                         }}></FontAwesomeIcon>
                                        {/* <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span> */}
                                        <p>
                                           <b>Node JS</b>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="row">
                                <div className="col text-center">
                                    <h5>
                                        <b>Others</b>
                                    </h5>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="count-box mt-0">
                                        <FontAwesomeIcon icon={faGitAlt} style={{ 
                                            background: '#E94E31',
                                            borderRadius: '50px',
                                            height: '48px',
                                            width: '48px',
                                            fontSize: '24px',
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: 'white'

                                         }} size="xs"></FontAwesomeIcon>
                                        {/* <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span> */}
                                        <p>
                                           <b>Git</b>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <section id="facts" className="facts">
                <div className="container" data-aos="fade-up">
        
                <div className="section-title">
                    <h2>Soft Skills</h2>
                    <p>Here are a few soft skills.</p>
                </div>
        
                <div className="row">
        
                    <div className="col">
                    <div className="count-box">
                        <i className="bi bi-emoji-smile"></i>
                        {/* <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span> */}
                        <p>Good Team Work</p>
                    </div>
                    </div>
        
                    <div className="col">
                    <div className="count-box">
                        <i className="bi bi-journal-richtext"></i>
                        {/* <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter"></span> */}
                        <p>Critical Thinking</p>
                    </div>
                    </div>
        
                    <div className="col">
                    <div className="count-box">
                        <i className="bi bi-headset"></i>
                        {/* <span data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="1" className="purecounter"></span> */}
                        <p>Problem Solving</p>
                    </div>
                    </div>
        
                    {/* <div className="col">
                    <div className="count-box">
                        <i className="bi bi-award"></i>
                        <span data-purecounter-start="0" data-purecounter-end="25" data-purecounter-duration="1" className="purecounter"></span>
                        <p>Awards</p>
                    </div>
                    </div> */}
        
                </div>
        
                </div>
            </section>
        </React.Fragment>
        
    )
  }
}
