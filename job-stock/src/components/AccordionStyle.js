import React, { useState } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Accordion, Card, Button } from 'react-bootstrap';
import Styles from './Styles';
import bannerImg from '../assets/img/banner-10.jpg';
import Footer from './Footer';

function AccordionStyle() {
    return (
        <Styles>
            <section class="inner-header-title" style={{ backgroundImage: "url(" + bannerImg + ")", height: '360px' }}>
                <Container>
                    <Row>
                        <Col md={12}>
                            <h1 style={{ fontSize: '5em', fontStyle: 'bold' }}>Accordion Style</h1>
                        </Col>
                    </Row>
                </Container>
            </section> <br /> <br /> <br />
            <Container>
                <Row>
                    <Col md={6} sm={12}>
                        <Accordion defaultActiveKey="0">
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0" style={{ backgroundColor: '#03a504', color: '#ffffff' }}>
                                        <h4>Section 01</h4>
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>Hello! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, voluptatum. Explicabo accusamus et, magni tempore, magnam fugit sapiente illo repudiandae reiciendis voluptates soluta aliquid perferendis odit ut praesentium nihil blanditiis!</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                        <h4>Section 02</h4>
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>By, Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, vel doloribus? Non ab omnis laboriosam aliquam quibusdam, eveniet excepturi laudantium repellat unde beatae error nam!</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="2">
                                        <h4>Section 03</h4>
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="2">
                                    <Card.Body>Out, Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, vel doloribus? Non ab omnis laboriosam aliquam quibusdam, eveniet excepturi laudantium repellat unde beatae error nam!</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Col>
                    <Col md={6} sm={12}>
                        <Accordion defaultActiveKey="0">
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0" style={{ backgroundColor: '#03a504', color: '#ffffff' }}>
                                        <h4>Section A</h4>
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>Hello! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, voluptatum. Explicabo accusamus et, magni tempore, magnam fugit sapiente illo repudiandae reiciendis voluptates soluta aliquid perferendis odit ut praesentium nihil blanditiis!</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                        <h4>Section B</h4>
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>By, Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, vel doloribus? Non ab omnis laboriosam aliquam quibusdam, eveniet excepturi laudantium repellat unde beatae error nam!</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="2">
                                        <h4>Section C</h4>
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="2">
                                    <Card.Body>Out, Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, vel doloribus? Non ab omnis laboriosam aliquam quibusdam, eveniet excepturi laudantium repellat unde beatae error nam!</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Col>
                </Row>
            </Container> <br /> <br /> <br />
            <Footer />
        </Styles>
    );
}

export default AccordionStyle;