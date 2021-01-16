import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Styles from './Styles';
import {HowItWorks} from './HowItWorks';
import step1 from '../assets/img/step-1.png';
import step2 from '../assets/img/step-2.png';
import step3 from '../assets/img/step-3.png';
import can1 from '../assets/img/can-1.png';
import can3 from '../assets/img/can-3.png';
import can5 from '../assets/img/can-5.jpg';
import appImg from '../assets/img/iphone.png';
import { HireFreelancers } from './HireFreelancers';
import Footer from './Footer';

export const Freelancing = () => (
    <Styles>
        <div className="jumbo">
            <div className="overlay"></div>
            <Container>
                <Row>
                    <Col md={6}>
                        <p className="text-size"> Talent? <br /> Meet Opportunity. </p>
                        <p className="text-muted" style={{ fontStyle: "italic" }}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam commodi, soluta corrupti fugit aliquid nemo.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div> <br /><br /><br />


        {/* How its Work section started  */}
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
            </Container> <br/> <br/> <br/>

                {/* // Hire Freelancers  */}



    <section className="pricing mt-5">
        <Container>
            <Row>
                <div className="col-md-12">
                    <div className="main-heading">
                        <p>Hire Experts</p>
                        <h2>Hire Experts <span>Team</span></h2>
                    </div>
                </div>
            </Row>
            <Row>
                <Col md={4} sm={6}>
                    <HireFreelancers
                    img = {can1}
                    status = "Available"
                    rate = "$17/hr"
                    title = "Agustin L. Smith"
                    country = "Australia"
                    desc = "At vero eos et accusamus et iusto odio dignissimos ducimus qui."
                    skill1 = "PHP"
                    skill2 = "JS"
                    skill3 = "Android"
                    skill = "+3"
                    btnText1 = "View Details" 
                    btnText2 = "View Details"
                    class = "freelance-status"
                    />
                </Col>
                <Col md={4} sm={6}>
                <HireFreelancers
                    img = {can5}
                    status = "At Work"
                    rate = "$25/hr"
                    title = "Daniel Disroyer"
                    country = "Norway"
                    desc = "At vero eos et accusamus et iusto odio dignissimos ducimus qui."
                    skill1 = "PHP"
                    skill2 = "JS"
                    skill3 = "Android"
                    skill = "+3"
                    btnText1 = "View Details" 
                    btnText2 = "View Details"
                    class = "freelance-status-not"
                    />
                </Col>
                <Col md={4} sm={6}>
                <HireFreelancers
                    img = {can3}
                    status = "Available"
                    rate = "$425/hr"
                    title = "Alexandera Mark"
                    country = "United States"
                    desc = "At vero eos et accusamus et iusto odio dignissimos ducimus qui."
                    skill1 = "PHP"
                    skill2 = "JS"
                    skill3 = "Android"
                    skill = "+3"
                    btnText1 = "View Details" 
                    btnText2 = "View Details"
                    class = "freelance-status"
                    />
                </Col>
            </Row>
            <Row>
                <Col md={12} sm={12}>
                    <div className="text-center"><a href="freelancers-2.html" style={{backgroundColor:'#03a504', display:'inline-block', padding:'7px 30px', fontSize:'20px', color:'white'}}>Load More</a></div>
                </Col>
            </Row>
        </Container>
        </section> <br/> <br/> <br/>
            <Footer/>
        </section>
    </Styles>
);