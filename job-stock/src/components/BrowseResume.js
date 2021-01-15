import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Styles from './Styles';
import bannerImg from '../assets/img/banner-10.jpg';
import can1 from '../assets/img/can-1.png';
import {BrowsResComp} from './BrowsResComp';
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


            {/* Browse Resume Section  */}
            <Container>
            <section>
                <BrowsResComp
                    img = {can1}
                    name = "Charles Hopman"
                    title = "App Developer"
                    address = " Street #210, Make New London"
                    rate = "$16/Hour"
                    sk1 = "HTML"
                    sk2 = "CSS"
                    sk3 = "JS"
                    sk4 = "Kotlin"
                    sk5 = "MySql"
                    exp = "Exp. 3 Years"
                />
                {/* <a href="resume-detail.html" className="item-click" style={{textDecoration:'none'}}>
                    <article>
                        <div className="brows-resume">
                            <Row className="row no-mrg">
                                <Col md={2} sm={2}>
                                    <div className="brows-resume-pic">
                                        <img src={can1} className="img-responsive" alt="" />
                                    </div>
                                </Col>
                                <Col md={4} sm={4}>
                                    <div className="brows-resume-name">
                                        <h4>Charles Hopman</h4>
                                        <span className="brows-resume-designation">App Developer</span>
                                    </div>
                                </Col>
                                <Col md={4} sm={4}>
                                    <div className="brows-resume-location">
                                        <p><i className="fa fa-map-marker"></i> Street #210, Make New London</p>
                                    </div>
                                </Col>
                                <Col md={2} sm={2}>
                                    <div className="browse-resume-rate">
                                        <span><i className="fa fa-money"></i>$15/hour</span>
                                    </div>
                                </Col>
                            </Row>
                            <div className="row extra-mrg row-skill">
                                <div className="browse-resume-skills">
                                    <Row>
                                    <Col md={7} sm={8}>
                                        <div className="br-resume ml-3">
                                            <span>css</span><span>html</span><span>photoshop</span><span>wordpress</span>
                                            <span>css</span>
                                        </div>
                                    </Col>
                                    <Col md={5} sm={4}>
                                        <div className="browse-resume-exp" style={{textAlign:"end", float:"right", marginLeft:"560px"}}>
                                            <span className="resume-exp">Exp. 3 Year</span>
                                        </div>
                                    </Col>
                                    </Row>
                                </div>
                            </div>
                        </div>
                    </article>
                </a> */}
            </section>
            </Container>
            <br /> <br /> <br />
            <Footer />
        </Styles>
    );
}

export default BrowseResume;