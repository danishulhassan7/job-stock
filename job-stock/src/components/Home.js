import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Styles from './Styles';
import HomeImg from '../assets/img/home.jpg';
import comImg1 from '../assets/img/com-1.jpg';
import comImg2 from '../assets/img/com-2.jpg';
import comImg3 from '../assets/img/com-3.jpg';
import comImg4 from '../assets/img/com-4.jpg';
import comImg5 from '../assets/img/com-5.jpg';
import comImg6 from '../assets/img/com-6.jpg';
import comImg7 from '../assets/img/com-7.jpg';

import step1 from '../assets/img/step-1.png';
import step2 from '../assets/img/step-2.png';
import step3 from '../assets/img/step-3.png';


export const Home = () => (
    <Styles>
        <div className="jumbo" style={{backgroundImage: "url(" + HomeImg + ")"}}>
            <div className="overlay"></div>
            <Container>
                <Row>
                    <Col md={12} className="App-header App">
                        <p className="text-size"> 50,000+ Job Search</p>
                    </Col>
                </Row>
            </Container>
        </div> <br/><br/><br/>
        <section>
            <Container>
                <Row>
                    <Col>
                        <div className="main-heading">
                            <p>200 New Jobs</p>

                            <h2>New and Random <span>Jobs</span></h2>
                        </div>
                    </Col>
                </Row>
                <Row className="row extra-mrg">
                    <Col md={3} sm={6}>
                        <div className="grid-view brows-job-list">
                            <div className="brows-job-company-img"><img src={comImg1} className="img-responsive"
                                alt="" /></div>
                            <div className="brows-job-position">
                                <h3><a href="job-detail.html">Web Developer</a></h3>

                                <p><span>Google</span></p>
                            </div>
                            <div className="job-position"><span className="job-num">5 Position</span></div>
                            <div className="brows-job-type"><span className="part-time">Part Time</span></div>
                            <ul className="grid-view-caption">
                                <li>
                                    <div className="brows-job-location">
                                        <p><i className="fa fa-map-marker"></i>QBL Park, C40</p>
                                    </div>
                                </li>
                                <li>
                                    <p><span className="brows-job-sallery"><i className="fa fa-money"></i>$110 - 200</span></p>
                                </li>
                            </ul>
                        </div>
                    </Col>

                    <Col md={3} sm={6}>
                        <div className="grid-view brows-job-list">
                            <div className="brows-job-company-img"><img src={comImg2} className="img-responsive"
                                alt="" /></div>
                            <div className="brows-job-position">
                                <h3><a href="job-detail.html">Web Developer</a></h3>

                                <p><span>Google</span></p>
                            </div>
                            <div className="job-position"><span className="job-num">5 Position</span></div>
                            <div className="brows-job-type"><span className="freelanc">Freelancer</span></div>
                            <ul className="grid-view-caption">
                                <li>
                                    <div className="brows-job-location">
                                        <p><i className="fa fa-map-marker"></i>QBL Park, C40</p>
                                    </div>
                                </li>
                                <li>
                                    <p><span className="brows-job-sallery"><i className="fa fa-money"></i>$110 - 200</span></p>
                                </li>
                            </ul>
                        </div>
                    </Col>

                    <Col md={3} sm={6}>
                        <div className="grid-view brows-job-list">
                            <div className="brows-job-company-img"><img src={comImg3} className="img-responsive"
                                alt="" /></div>
                            <div className="brows-job-position">
                                <h3><a href="job-detail.html">Web Developer</a></h3>

                                <p><span>Google</span></p>
                            </div>
                            <div className="job-position"><span className="job-num">5 Position</span></div>
                            <div className="brows-job-type"><span className="full-time">Full Time</span></div>
                            <ul className="grid-view-caption">
                                <li>
                                    <div className="brows-job-location">
                                        <p><i className="fa fa-map-marker"></i>QBL Park, C40</p>
                                    </div>
                                </li>
                                <li>
                                    <p><span className="brows-job-sallery"><i className="fa fa-money"></i>$110 - 200</span></p>
                                </li>
                            </ul>
                        </div>
                    </Col>

                    <Col md={3} sm={6}>
                        <div className="grid-view brows-job-list">
                            <div className="brows-job-company-img"><img src={comImg4} className="img-responsive"
                                alt="" /></div>
                            <div className="brows-job-position">
                                <h3><a href="job-detail.html">Web Developer</a></h3>

                                <p><span>Google</span></p>
                            </div>
                            <div className="job-position"><span className="job-num">5 Position</span></div>
                            <div className="brows-job-type"><span className="enternship">Internship</span></div>
                            <ul className="grid-view-caption">
                                <li>
                                    <div className="brows-job-location">
                                        <p><i className="fa fa-map-marker"></i>QBL Park, C40</p>
                                    </div>
                                </li>
                                <li>
                                    <p><span className="brows-job-sallery"><i className="fa fa-money"></i>$110 - 200</span></p>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>

                {/* 2nd row of cards  */}
                <Row className="row extra-mrg">
                    <Col md={3} sm={6}>
                        <div className="grid-view brows-job-list">
                            <div className="brows-job-company-img"><img src={comImg5} className="img-responsive"
                                alt="" /></div>
                            <div className="brows-job-position">
                                <h3><a href="job-detail.html">Web Developer</a></h3>

                                <p><span>Google</span></p>
                            </div>
                            <div className="job-position"><span className="job-num">5 Position</span></div>
                            <div className="brows-job-type"><span className="part-time">Part Time</span></div>
                            <ul className="grid-view-caption">
                                <li>
                                    <div className="brows-job-location">
                                        <p><i className="fa fa-map-marker"></i>QBL Park, C40</p>
                                    </div>
                                </li>
                                <li>
                                    <p><span className="brows-job-sallery"><i className="fa fa-money"></i>$110 - 200</span></p>
                                </li>
                            </ul>
                        </div>
                    </Col>

                    <Col md={3} sm={6}>
                        <div className="grid-view brows-job-list">
                            <div className="brows-job-company-img"><img src={comImg6} className="img-responsive"
                                alt="" /></div>
                            <div className="brows-job-position">
                                <h3><a href="job-detail.html">Web Developer</a></h3>

                                <p><span>Google</span></p>
                            </div>
                            <div className="job-position"><span className="job-num">5 Position</span></div>
                            <div className="brows-job-type"><span className="freelanc">Freelancer</span></div>
                            <ul className="grid-view-caption">
                                <li>
                                    <div className="brows-job-location">
                                        <p><i className="fa fa-map-marker"></i>QBL Park, C40</p>
                                    </div>
                                </li>
                                <li>
                                    <p><span className="brows-job-sallery"><i className="fa fa-money"></i>$110 - 200</span></p>
                                </li>
                            </ul>
                        </div>
                    </Col>

                    <Col md={3} sm={6}>
                        <div className="grid-view brows-job-list">
                            <div className="brows-job-company-img"><img src={comImg7} className="img-responsive"
                                alt="" /></div>
                            <div className="brows-job-position">
                                <h3><a href="job-detail.html">Web Developer</a></h3>

                                <p><span>Google</span></p>
                            </div>
                            <div className="job-position"><span className="job-num">5 Position</span></div>
                            <div className="brows-job-type"><span className="full-time">Full Time</span></div>
                            <ul className="grid-view-caption">
                                <li>
                                    <div className="brows-job-location">
                                        <p><i className="fa fa-map-marker"></i>QBL Park, C40</p>
                                    </div>
                                </li>
                                <li>
                                    <p><span className="brows-job-sallery"><i className="fa fa-money"></i>$110 - 200</span></p>
                                </li>
                            </ul>
                        </div>
                    </Col>

                    <Col md={3} sm={6}>
                        <div className="grid-view brows-job-list">
                            <div className="brows-job-company-img"><img src={comImg3} className="img-responsive"
                                alt="" /></div>
                            <div className="brows-job-position">
                                <h3><a href="job-detail.html">Web Developer</a></h3>

                                <p><span>Google</span></p>
                            </div>
                            <div className="job-position"><span className="job-num">5 Position</span></div>
                            <div className="brows-job-type"><span className="enternship">Internship</span></div>
                            <ul className="grid-view-caption">
                                <li>
                                    <div className="brows-job-location">
                                        <p><i className="fa fa-map-marker"></i>QBL Park, C40</p>
                                    </div>
                                </li>
                                <li>
                                    <p><span className="brows-job-sallery"><i className="fa fa-money"></i>$110 - 200</span></p>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        <br/> <br/> <br/>

        {/* <how it works section> */}

        <section class="how-it-works">
        <Container>
            <Row data-aos="fade-up">
                <Col md={12}>
                    <div class="main-heading">
                        <p>Working Process</p>

                        <h2>How It <span>Works</span></h2>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={4} sm={4}>
                    <div className="working-process">
                        <span className="process-img"><img src={step1} height="60px" className="img-responsive ml-3 mt-4" alt=""/><span
                                className="process-num">01</span></span>
                        <h6 className="text-muted mt-3">Create An Account</h6>

                        <p className="text-muted" style={{fontSize:"85%", fontStyle:"italic"}}>Post a job to tell us about your project. We'll quickly match you with the right freelancers
                            find place best.</p>
                    </div>
                </Col>
                <Col md={4} sm={4}>
                    <div className="working-process">
                        <span className="process-img"><img src={step2} height="60px" className="img-responsive ml-3 mt-4" alt=""/><span
                                className="process-num">02</span></span>
                        <h6 className="text-muted mt-3">Search Jobs</h6>

                        <p className="text-muted" style={{fontSize:"85%", fontStyle:"italic"}}>Post a job to tell us about your project. We'll quickly match you with the right freelancers
                            find place best.</p>
                    </div>
                </Col>
                <Col md={4} sm={4}>
                    <div className="working-process">
                        <span className="process-img"><img src={step3} height="60px" className="img-responsive ml-3 mt-4" alt=""/><span
                                className="process-num">03</span></span>
                        <h6 className="text-muted mt-3">Save & Apply</h6>

                        <p className="text-muted" style={{fontSize:"85%", fontStyle:"italic"}}>Post a job to tell us about your project. We'll quickly match you with the right freelancers
                            find place best.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
    </Styles>
);