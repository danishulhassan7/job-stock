import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

export const DetResComp = (props) => (
    <section className="detail-desc">
        <Container className="container white-shadow">
            <Row className="row mrg-0">
                <div className="detail-pic">
                    <img src={props.img} className="img" alt="client" />
                    <a href="#" className="detail-edit" title="edit" ><FontAwesomeIcon icon={faEdit}/></a>
                </div>
                <div className="detail-status">
                    <span>{props.active}</span>
                </div>
            </Row>
            <Row className="row bottom-mrg mrg-0">
                <Col md={8} sm={8}>
                    <div className="detail-desc-caption">
                        <h4 className="ml-3">{props.name}</h4>
                        <span className="designation ml-3">{props.title}</span>
                        <p className="ml-3" style={{ fontSize: "16px" }}>{props.desc}</p>
                    </div>
                    <div className="detail-desc-skill" style={{ fontSize: "13px" }}>
                        <span className="ml-2">{props.sk1}</span><span>{props.sk2}</span><span>{props.sk3}</span>
                        <span>{props.sk4}</span><span>{props.sk5}</span><span>{props.sk6}</span>
                    </div>
                </Col>
                <Col md={4} sm={4}>
                    <div className="get-touch">
                        <h4>Get in Touch</h4>
                        <ul>
                            <li><i className="fa fa-map-marker"></i><span>{props.address}</span></li>
                            <li><i className="fa fa-envelope"></i><span>{props.mail}</span></li>
                            <li><i className="fa fa-phone"></i><span>{props.num}</span></li>
                            <li><i className="fa fa-money"></i><span>{props.rate}</span></li>
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
);



