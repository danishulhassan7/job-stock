import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Styles from './Styles';
import bannerImg from '../assets/img/banner-10.jpg';
import clientImg from '../assets/img/client-1.jpg';
import {DetResComp} from './DetResComp';
import Footer from './Footer';


function DetailResume() {
    return (
        <Styles>
            <section className="inner-header-title" style={{ backgroundImage: "url(" + bannerImg + ")", height: '360px' }}>
                <Container>
                    <Row>
                        <Col md={12}>
                            <h1 style={{ fontSize: '5em', fontStyle: 'bold' }}>Resume Detail</h1>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Adding DetResComp (Props) */}


            <DetResComp
                img = {clientImg}
                name = "Daniel Dax"
                title = "Web Developer"
                active = "08 Hours Ago"
                desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                sk1 = "HTML"
                sk2 = "CSS"
                sk3 = "Photoshop"
                sk4 = "JS"
                sk5 = "PHP"
                sk6 = "Bootstrap"
                address = "Menlo Park, CA"
                mail = "danieldax704@gmail.com"
                num = "0 123 456 7859"
                rate = "$52/Hour"
            />

            {/* Adding Desc Section  */}
            <section className="full-detail-description full-detail">
                <Container>
                    <Row className="row row-bottom mrg-0">
                        <h2 className="detail-title">About Resume</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </Row>
                </Container>
                <Container>
                    <Row className="row row-bottom mrg-0">
                        <h2 className="detail-title">Education</h2></Row>
                    <Row><p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></Row>
                    <Row>
                        <ul className="detail-list">
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur.</li>
                        </ul>
                    </Row>

                    <Row className="row row-bottom mrg-0">
                        <h2 className="detail-title">Work Experience</h2></Row>
                    <Row>
                        <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </Row>
                    <Row>
                        <ul className="detail-list">
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur.</li>
                        </ul>
                    </Row>
                </Container>
            </section>


            <br /> <br />
            <Footer />
        </Styles >
    );
}

export default DetailResume;