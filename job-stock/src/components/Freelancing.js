import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Styles from './Styles';
import {HowItWorks} from './HowItWorks';

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
                    <HowItWorks
                    count="01"
                    heading="Create an Account"
                    desc="Post a job to tell us about your project. We'll quickly match you with the right freelancers
                    find place best."
                    />
                    </Col>
                </Row>
            </Container>
        </section>
    </Styles>
);