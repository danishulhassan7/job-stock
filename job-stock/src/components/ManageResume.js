import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Styles from './Styles';
import bannerImg from '../assets/img/banner-10.jpg';
import client1 from '../assets/img/client-1.jpg';
import client2 from '../assets/img/client-2.jpg';
import client3 from '../assets/img/client-3.jpg';
import client4 from '../assets/img/client-4.jpg';
import client5 from '../assets/img/client-5.jpg';
import { BrowsResComp } from './BrowsResComp';
import { BrowsResForm } from './BrowsResForm';
import { PaginationComp } from './PaginationComp';
import Footer from './Footer';

function ManageResume() {
    return (
        <Styles>
            <section class="inner-header-title" style={{ backgroundImage: "url(" + bannerImg + ")", height: '360px' }}>
                <Container>
                    <Row>
                        <Col md={12}>
                            <h1 style={{ fontSize: '5em', fontStyle: 'bold' }}>Manage Resume</h1>
                        </Col>
                    </Row>
                </Container>
            </section> <br /> <br /> <br />

            {/* Adding a BrowsResComp Component  */}

            <Container>
                <BrowsResForm />
            </Container>
            <br />
            {/* Browse Resume Section  */}
            <Container>
                <article>
                    <div className="mng-resume">
                        <Row>
                                <Col md={2} sm={2}>
                                    <div className="mng-resume-pic">
                                        <img src={client1} className="img-responsive" alt="" />
                                    </div>
                                </Col>
                                <Col md={3} sm={3}>
                                    <div className="mng-resume-name">
                                        <h4>Alexander Weir <span className="cand-designation">(Web Developer)</span></h4>
                                        <span className="cand-status">10 Hour Ago</span>
                                    </div>
                                </Col>
                                <Col md={2} sm={2}>
                                    <div className="per-hour-rate">
                                        <p><i className="fa fa-money"></i> $17/Hour</p>
                                    </div>
                                </Col>
                                <Col md={4} sm={4}>
                                    <div className="mng-employee-skill">
                                        <span>html</span><span>css</span><span>java</span>
                                        <span>bootstrap</span>
                                    </div>
                                </Col>
                                <Col md={1} sm={1}>
                                    <div className="mng-resume-action">
                                        <a href="#" data-toggle="tooltip" title="Edit"><i className="fa fa-edit"></i></a>
                                        <a href="#" data-toggle="tooltip" title="Delete"><i className="fa fa-trash-o"></i></a>
                                    </div>
                                </Col>
                        </Row>
                    </div>
                </article>
            </Container>
            <br />
            <PaginationComp />
            <br /> <br />
            <Footer />
        </Styles>
    );
}

export default ManageResume;