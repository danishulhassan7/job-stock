import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export const MngRsmCmp = (props) => (
    <Container>
        <article>
            <div className="mng-resume">
                <Row>
                    <Col md={2} sm={2}>
                        <div className="mng-resume-pic">
                            <img src={props.img} className="img-responsive" alt="" />
                        </div>
                    </Col>
                    <Col md={3} sm={3}>
                        <div className="mng-resume-name">
                            <h4>{props.name}<span className="cand-designation">({props.title})</span></h4>
                            <span className="cand-status">{props.active}</span>
                        </div>
                    </Col>
                    <Col md={2} sm={2}>
                        <div className="per-hour-rate">
                            <p><i className="fa fa-money"></i> {props.rate}</p>
                        </div>
                    </Col>
                    <Col md={4} sm={4}>
                        <div className="mng-employee-skill">
                            <span>{props.sk1}</span><span>{props.sk2}</span><span>{props.sk3}</span>
                            <span>{props.sk4}</span>
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
);



