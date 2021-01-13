import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Styles from './Styles';
import {NewJobs} from './NewJobs';
import HomeImg from '../assets/img/home.jpg';
import comImg1 from '../assets/img/com-1.jpg';
import comImg2 from '../assets/img/com-2.jpg';
import comImg3 from '../assets/img/com-3.jpg';
import comImg4 from '../assets/img/com-4.jpg';
import comImg5 from '../assets/img/com-5.jpg';
import comImg6 from '../assets/img/com-6.jpg';
import comImg7 from '../assets/img/com-7.jpg';
import {HowItWorks} from './HowItWorks';
import step1 from '../assets/img/step-1.png';
import step2 from '../assets/img/step-2.png';
import step3 from '../assets/img/step-3.png';
import client1 from '..//assets/img/client-1.jpg';
import client2 from '..//assets/img/client-2.jpg';
import client3 from '..//assets/img/client-3.jpg';
import can1 from '../assets/img/can-1.png';
import can2 from '../assets/img/can-2.png';
import can3 from '../assets/img/can-3.png';
import can5 from '../assets/img/can-5.jpg';




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
                        <NewJobs 
                        img = {comImg1}
                        title = "Web Developer"
                        company = "Google"
                        position="15 Positions"
                        time = "Part Time"
                        location = "QBL Park, C40"
                        salary = "$110 - 200"
                        class = "part-time"
                        />
                    </Col>
                    <Col md={3} sm={6}>
                    <NewJobs 
                        img = {comImg2}
                        title = "Web Developer"
                        company = "Google"
                        position="15 Positions"
                        time = "Full Time"
                        location = "QBL Park, C40"
                        salary = "$110 - 200"
                        class = "full-time"
                        />
                    </Col>
                    <Col md={3} sm={6}>
                        <NewJobs 
                        img = {comImg3}
                        title = "Web Developer"
                        company = "Google"
                        position="15 Positions"
                        time = "Freelancer"
                        location = "QBL Park, C40"
                        salary = "$110 - 200"
                        class = "freelanc"
                        />
                    </Col>
                    <Col md={3} sm={6}>
                    <NewJobs 
                        img = {comImg4}
                        title = "Web Developer"
                        company = "Google"
                        position="15 Positions"
                        time = "Internship"
                        location = "QBL Park, C40"
                        salary = "$110 - 200"
                        class = "enternship"
                        />
                    </Col>
                </Row>
{/* Adding second row */}
                    <Row className="row extra-mrg">
                    <Col md={3} sm={6}>
                        <NewJobs 
                        img = {comImg5}
                        title = "Web Developer"
                        company = "Google"
                        position="15 Positions"
                        time = "Freelancer"
                        location = "QBL Park, C40"
                        salary = "$110 - 200"
                        class = "freelanc"
                        />
                    </Col>
                    <Col md={3} sm={6}>
                    <NewJobs 
                        img = {comImg6}
                        title = "Web Developer"
                        company = "Google"
                        position="15 Positions"
                        time = "Full Time"
                        location = "QBL Park, C40"
                        salary = "$110 - 200"
                        class = "full-time"
                        />
                    </Col>
                    <Col md={3} sm={6}>
                        <NewJobs 
                        img = {comImg7}
                        title = "Web Developer"
                        company = "Google"
                        position="15 Positions"
                        time = "Internship"
                        location = "QBL Park, C40"
                        salary = "$110 - 200"
                        class = "enternship"
                        />
                    </Col>
                    <Col md={3} sm={6}>
                    <NewJobs 
                        img = {comImg3}
                        title = "Web Developer"
                        company = "Google"
                        position="15 Positions"
                        time = "Full-time"
                        location = "QBL Park, C40"
                        salary = "$110 - 200"
                        class = "full-time"
                        />
                    </Col>
                </Row>
            </Container>
        </section>
        <br/> <br/> <br/>

        {/* <how it works section> */}

        <section className="how-it-works">
        <Container>
            <Row data-aos="fade-up">
                <Col md={12}>
                    <div className="main-heading">
                        <p>Working Process</p>
                        <h2>How It <span>Works</span></h2>
                    </div>
                </Col>
            </Row>
            <Row>
               <Col md={4} sm={4}>
                    <HowItWorks
                    count="01"
                    heading="Create an Account"
                    desc="Post a job to tell us about your project. We'll quickly match you with the right freelancers
                    find place best."
                    img = {step1}
                    />
                    </Col>
                    <Col md={4} sm={4}>
                    <HowItWorks
                    count="02"
                    heading="Save & Apply"
                    desc="Post a job to tell us about your project. We'll quickly match you with the right freelancers
                    find place best."
                    img = {step3}
                    />
                    </Col>
                    <Col md={4} sm={4}>
                    <HowItWorks
                    count="03"
                    heading="Search Jobs"
                    desc="Post a job to tell us about your project. We'll quickly match you with the right freelancers
                    find place best."
                    img = {step2}
                    />
                    </Col>
            </Row>
        </Container>
    </section> <br/><br/><br/>

    {/* Adding CSS of testimonials and hire freelancers */}

    <section className="testimonial">
        <Container>
            <Row>
                <Col md={12}>
                <div className="main-heading">
                    <br/><br/><br/>
                    <p>What Say Our Client</p>
                    <h2>Our Success <span>Stories</span></h2>
                </div>
                </Col>
            </Row>
            <Row>
                {/* <div id="client-testimonial-slider" className="owl-carousel"> */}
                <Col md={4} sm={6}>
                    <div className="client-testimonial">
                        <div className="pic"><img src={client1} alt="" /></div>
                        <p className="client-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor et dolore magna aliqua.</p>
                        <h3 className="client-testimonial-title">Lacky Mole</h3>
                        <ul className="client-testimonial-rating">
                            <li className="fa fa-star-o"></li>
                            <li className="fa fa-star-o"></li>
                            <li className="fa fa-star"></li>
                        </ul>
                    </div>
                    </Col>
                    <Col md={4} sm={6}>
                    <div className="client-testimonial">
                        <div className="pic"><img src={client2} alt="" /></div>
                        <p className="client-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor et dolore magna aliqua.</p>

                        <h3 className="client-testimonial-title">Karan Wessi</h3>
                        <ul className="client-testimonial-rating">
                            <li className="fa fa-star-o"></li>
                            <li className="fa fa-star"></li>
                            <li className="fa fa-star"></li>
                        </ul>
                    </div>
                    </Col>
                    <Col md={4} sm={6}>
                    <div className="client-testimonial">
                        <div className="pic"><img src={client3} alt=""/></div>
                        <p className="client-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor et dolore magna aliqua.</p>

                        <h3 className="client-testimonial-title">Roul Pinchai</h3>
                        <ul className="client-testimonial-rating">
                            <li className="fa fa-star-o"></li>
                            <li className="fa fa-star-o"></li>
                            <li className="fa fa-star"></li>
                        </ul>
                    </div>
                    </Col>
                {/* </div> */}
            </Row>
        </Container> <br/> <br/>
    </section>


    {/* // Hire Freelancers  */}



    <section className="pricing mt-5">
        <Container>
            <Row>
                <div className="col-md-12">
                    <div className="main-heading">
                        <p>Top Freelancer</p>
                        <h2>Hire Expert <span>Freelancer</span></h2>
                    </div>
                </div>
            </Row>
            <Row>
                <Col md={4} sm={6}>
                    <div className="freelance-container style-2">
                        <div className="freelance-box">
                            <span className="freelance-status">Available</span>
                            <h4 className="flc-rate">$17/hr</h4>

                            <div className="freelance-inner-box">
                                <div className="freelance-box-thumb"><img src={can1} height="104px"
                                                                      className="img-responsive img-circle" alt=""/></div>
                                <div className="freelance-box-detail">
                                    <h4>Agustin L. Smith</h4>
                                    <span className="location">Australia</span>
                                </div>
                                <div className="rattings"><i className="fa fa-star fill"></i><i className="fa fa-star fill"></i><i
                                        className="fa fa-star fill"></i><i className="fa fa-star-half fill"></i><i
                                        className="fa fa-star"></i></div>
                            </div>
                            <div className="freelance-box-extra">
                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui.</p>
                                <ul>
                                    <li>Php</li>
                                    <li>Android</li>
                                    <li>Html</li>
                                    <li className="more-skill bg-primary">+3</li>
                                </ul>
                            </div>
                            <a href="freelancer-detail.html" className="btn btn-freelance-two bg-secondary">View Detail</a>
                            <a href="freelancer-detail.html" className="btn btn-freelance-two bg-primary">View Detail</a>
                        </div>
                    </div>
                </Col>
                <Col md={4} sm={6}>
                    <div className="freelance-container style-2">
                        <div className="freelance-box">
                            <span className="freelance-status bg-warning">At Work</span>
                            <h4 className="flc-rate">$22/hr</h4>

                            <div className="freelance-inner-box">
                                <div className="freelance-box-thumb"><img src={can3} height="104px"
                                                                      className="img-responsive img-circle" alt=""/></div>
                                <div className="freelance-box-detail">
                                    <h4>Delores R. Williams</h4>
                                    <span className="location">United States</span>
                                </div>
                                <div className="rattings"><i className="fa fa-star fill"></i><i className="fa fa-star fill"></i><i
                                        className="fa fa-star fill"></i><i className="fa fa-star-half fill"></i><i
                                        className="fa fa-star"></i></div>
                            </div>
                            <div className="freelance-box-extra">
                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui.</p>
                                <ul>
                                    <li>Php</li>
                                    <li>Android</li>
                                    <li>Html</li>
                                    <li className="more-skill bg-primary">+3</li>
                                </ul>
                            </div>
                            <a href="freelancer-detail.html" className="btn btn-freelance-two bg-secondary">View Detail</a><a
                                href="freelancer-detail.html" className="btn btn-freelance-two bg-info">View Detail</a>
                        </div>
                    </div>
                </Col>
                <Col md={4} sm={6}>
                    <div className="freelance-container style-2">
                        <div className="freelance-box">
                            <span className="freelance-status">Available</span>
                            <h4 className="flc-rate">$19/hr</h4>

                            <div className="freelance-inner-box">
                                <div className="freelance-box-thumb"><img src={can5} height="104px"
                                                                      className="img-responsive img-circle" alt=""/></div>
                                <div className="freelance-box-detail">
                                    <h4>Daniel Disroyer</h4>
                                    <span className="location">Bangladesh</span>
                                </div>
                                <div className="rattings"><i className="fa fa-star fill"></i><i className="fa fa-star fill"></i><i
                                        className="fa fa-star fill"></i><i className="fa fa-star-half fill"></i><i
                                        className="fa fa-star"></i></div>
                            </div>
                            <div className="freelance-box-extra">
                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui.</p>
                                <ul>
                                    <li>Php</li>
                                    <li>Android</li>
                                    <li>Html</li>
                                    <li className="more-skill bg-primary">+3</li>
                                </ul>
                            </div>
                            <a href="freelancer-detail.html" className="btn btn-freelance-two bg-secondary">View Detail</a>
                            <a href="freelancer-detail.html" className="btn btn-freelance-two bg-info">View Detail</a>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={12} sm={12}>
                    <div className="text-center"><a href="freelancers-2.html" style={{backgroundColor:'#03a504', display:'inline-block', padding:'7px 30px', fontSize:'20px', color:'white'}}>Load More</a></div>
                </Col>
            </Row>
        </Container>
        </section> <br/> <br/> <br/>

    </Styles>
);