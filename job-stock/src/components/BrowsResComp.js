import React from 'react';
import { Row, Col,Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMapMarker, faMoneyCheckAlt} from '@fortawesome/free-solid-svg-icons';

export const BrowsResComp = (props) => (
    <div>
    <a href="resume-detail.html" className="item-click" style={{textDecoration:'none'}}>
    <article>
        <div className="brows-resume">
            <Row className="row no-mrg">
                <Col md={2} sm={2}>
                    <div className="brows-resume-pic">
                        <Image src={props.img} className="img-responsive" alt="" />
                    </div>
                </Col>
                <Col md={4} sm={4}>
                    <div className="brows-resume-name">
                        <h4>{props.name}</h4>
                        <span className="brows-resume-designation">{props.title}</span>
                    </div>
                </Col>
                <Col md={4} sm={4}>
                    <div className="brows-resume-location">
                        <p><i className="fa fa-map-marker"><FontAwesomeIcon icon={faMapMarker} /></i>{props.address}</p>
                    </div>
                </Col>
                <Col md={2} sm={2}>
                    <div className="browse-resume-rate">
                        <span><i className="fa fa-money"><FontAwesomeIcon icon={faMoneyCheckAlt} /></i>{props.rate}</span>
                    </div>
                </Col>
            </Row>
            <div className="row extra-mrg row-skill">
                <div className="browse-resume-skills">
                    <Row>
                    <Col md={7} sm={8}>
                        <div className="br-resume ml-3">
                            <span>{props.sk1}</span><span>{props.sk2}</span><span>{props.sk3}</span><span>{props.sk4}</span>
                            <span>{props.sk5}</span>
                        </div>
                    </Col>
                    <Col md={5} sm={4}>
                        <div className="browse-resume-exp" style={{textAlign:"end", float:"right", marginLeft:"560px"}}>
                            <span style={{display:"inline-block", padding:"6px 0px"}} className="resume-exp">{props.exp}</span>
                        </div>
                    </Col>
                    </Row>
                </div>
            </div>
        </div>
    </article>
</a>
</div>
);
