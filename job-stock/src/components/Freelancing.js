import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
// import styled from 'styled-components';
import Styles from './Styles';
import step1 from '../assets/img/step-1.png';
import step2 from '../assets/img/step-2.png';
import step3 from '../assets/img/step-3.png';


export const Freelancing = () => (
    <Styles>
        <div className="jumbo">
            <div className="overlay"></div>
            <Container>
                <Row>
                    <Col md={6}>
                        <p className="text-size"> Talent? <br /> Meet Opportunity. </p>
                        <p className="text-muted" style={{ fontStyle: "italic" }}>Maxime voluptatum sint consequatur explicabo consequuntur vero delectus autem exercitationem id quos rem totam voluptatem asperiores aut, dolores optio esse sunt expedita eveniet quas quasi necessitatibus! Aperiam minus eius minima eveniet, quasi assumenda non aliquam perferendis adipisci dolores saepe enim quibusdam eligendi, maiores perspiciatis sunt fugiat! Aliquid dolorem aliquam dolor aspernatur exercitationem excepturi tempore provident pariatur accusantium, at quo ab, enim placeat!</p>
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
                        <div className="working-process">
                            <span className="process-img"><img src={step1} height="60px" className="img-responsive ml-3 mt-4" alt="" /><span
                                className="process-num">01</span></span>
                            <h6 className="text-muted mt-3">Create An Account</h6>
                            <p className="text-muted" style={{ fontSize: "85%", fontStyle: "italic" }}>Post a job to tell us about your project. We'll quickly match you with the right freelancers
                            find place best.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </Styles>
);