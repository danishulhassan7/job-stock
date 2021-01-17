import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Styles from './Styles';
import bannerImg from '../assets/img/banner-10.jpg';
import clientImg from '../assets/img/client-1.jpg';
import Footer from './Footer';


function DetailResume() {
    return (
        <Styles>
            <section class="inner-header-title" style={{ backgroundImage: "url(" + bannerImg + ")", height: '360px' }}>
                <Container>
                    <Row>
                        <Col md={12}>
                            <h1 style={{ fontSize: '5em', fontStyle: 'bold' }}>Resume Detail</h1>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="detail-desc">
                <Container className="container white-shadow">
                    <Row className="row mrg-0">
                        <div className="detail-pic">
                            <img src={clientImg} className="img" alt="client" />
                            <a href="#" className="detail-edit" title="edit" ><i className="fa fa-pencil"></i></a>
                        </div>
                        <div className="detail-status">
                            <span>7 Hour Days Ago</span>
                        </div>
                    </Row>
                    <Row className="row bottom-mrg mrg-0">
                        <Col md={8} sm={8}>
                            <div className="detail-desc-caption">
                                <h4 className="ml-3">Daniel Dax</h4>
                                <span className="designation ml-3">Web Developer</span>
                                <p className="ml-3" style={{fontSize: "16px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                            <div className="detail-desc-skill" style={{	fontSize: "13px"}}>
                                <span className="ml-2">HTML</span><span>css</span><span>photoshop</span>
                                <span>java</span><span>php</span><span>bootstrap</span>
                            </div>
                        </Col>
                        <Col md={4} sm={4}>
                            <div className="get-touch">
                                <h4>Get in Touch</h4>
                                <ul>
                                    <li><i className="fa fa-map-marker"></i><span>Menlo Park, CA</span></li>
                                    <li><i className="fa fa-envelope"></i><span>danieldax704@gmail.com</span></li>
                                    <li><i className="fa fa-phone"></i><span>0 123 456 7859</span></li>
                                    <li><i className="fa fa-money"></i><span>$52/Hour</span></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                    <div className="detail pannel-footer">
                        <Row className="row no-padd mrg-0">
                            <Col md={8} sm={5}>
                                <ul className="detail-footer-social">
                                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                    <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                </ul>
                            </Col>
                            <Col md={4} sm={7} className="mt-3">
                                <div className="detail-pannel-footer-btn pull-right">
                                    <a href="#" className="footer-btn grn-btn" title="">Hire Now</a>
                                    <a href="#" className="footer-btn blu-btn" title="">Edit</a>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>


            <br /> <br />
            <Footer />
        </Styles >
    );
}

export default DetailResume;