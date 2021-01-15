import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Styles from './Styles';
import bannerImg from '../assets/img/banner-10.jpg';
import Footer from './Footer';

function BrowseResume() {
    return (
        <Styles>
            <section class="inner-header-title" style={{ backgroundImage: "url(" + bannerImg + ")", height: '360px' }}>
                <Container>
                    <Row>
                        <Col md={12}>
                            <h1 style={{ fontSize: '5em', fontStyle: 'bold' }}>Browse Resume</h1>
                        </Col>
                    </Row>
                </Container>
            </section> <br /> <br /> <br />
            <Container>
                <Row>
                    <Col md={6} sm={12}>
                        <h2>Hello 01 </h2>
                    </Col>
                    <Col md={6} sm={12}>
                    <h2>Hello 02</h2>
                    </Col>
                </Row>
            </Container> <br /> <br /> <br />
            <Footer />
        </Styles>
    );
}

export default BrowseResume;