import React, { useState } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap';
import Styles from './Styles';
import bannerImg from '../assets/img/banner-10.jpg';

function AccordionStyle() {
    const [key, setKey] = useState('Section-1');
    const [key1, setKey1] = useState('Tab-1');

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
                        <Tabs
                            id="controlled-tab-example"
                            activeKey={key1}
                            onSelect={(k) => setKey1(k)}
                        >
                            <Tab eventKey="Tab-1" title="Tab-1" className="mt-3">
                                <h2>Tab 01</h2>
                                <p>Tab-1 ipsum dolor sit, amet consectetur adipisicing elit. Provident illo, nostrum sit quasi magnam itaque tenetur laboriosam impedit est fuga facere quod earum aut explicabo vel quo, dolore voluptates laudantium eius? Alias aliquid dolorum, error autem fugiat voluptas non. A aspernatur ratione necessitatibus reiciendis facere?</p>
                            </Tab>
                            <Tab eventKey="Tab-2" title="Tab-2" className="mt-3">
                                <h2>Tab 02</h2>
                                <p>Tab-2 ipsum dolor sit, amet consectetur adipisicing elit. Provident illo, nostrum sit quasi magnam itaque tenetur laboriosam impedit est fuga facere quod earum aut explicabo vel quo, dolore voluptates laudantium eius? Alias aliquid dolorum, error autem fugiat voluptas non. A aspernatur ratione necessitatibus reiciendis facere?</p>
                            </Tab>
                            <Tab eventKey="Tab-3" title="Tab-3" className="mt-3">
                                <h2>Tab 03</h2>
                                <p>Tab-3 ipsum dolor sit, amet consectetur adipisicing elit. Provident illo, nostrum sit quasi magnam itaque tenetur laboriosam impedit est fuga facere quod earum aut explicabo vel quo, dolore voluptates laudantium eius? Alias aliquid dolorum, error autem fugiat voluptas non. A aspernatur ratione necessitatibus reiciendis facere?</p>
                            </Tab>
                        </Tabs>
                    </Col>
                    <Col md={6} sm={12}>
                        <Tabs
                            id="controlled-tab-example"
                            activeKey={key}
                            onSelect={(k) => setKey(k)}
                        >
                            <Tab eventKey="Section-1" title="Section-1" className="mt-3">
                                <h2>Section 01</h2>
                                <p>Section-1 ipsum dolor sit, amet consectetur adipisicing elit. Provident illo, nostrum sit quasi magnam itaque tenetur laboriosam impedit est fuga facere quod earum aut explicabo vel quo, dolore voluptates laudantium eius? Alias aliquid dolorum, error autem fugiat voluptas non. A aspernatur ratione necessitatibus reiciendis facere?</p>
                            </Tab>
                            <Tab eventKey="Section-2" title="Section-2" className="mt-3">
                                <h2>Section 02</h2>
                                <p>Section-2 ipsum dolor sit, amet consectetur adipisicing elit. Provident illo, nostrum sit quasi magnam itaque tenetur laboriosam impedit est fuga facere quod earum aut explicabo vel quo, dolore voluptates laudantium eius? Alias aliquid dolorum, error autem fugiat voluptas non. A aspernatur ratione necessitatibus reiciendis facere?</p>
                            </Tab>
                            <Tab eventKey="Section-3" title="Section-3" className="mt-3">
                                <h2>Section 03</h2>
                                <p>Section-3 ipsum dolor sit, amet consectetur adipisicing elit. Provident illo, nostrum sit quasi magnam itaque tenetur laboriosam impedit est fuga facere quod earum aut explicabo vel quo, dolore voluptates laudantium eius? Alias aliquid dolorum, error autem fugiat voluptas non. A aspernatur ratione necessitatibus reiciendis facere?</p>
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </Container> <br/> <br/> <br/>
        </Styles>
    );
}

export default AccordionStyle;