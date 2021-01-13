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
        </Container>
    </section>
    </Styles>
);