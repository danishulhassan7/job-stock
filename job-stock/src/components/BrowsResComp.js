import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


export const BrowResComp = (props) => (
    <div>
    <a href="resume-detail.html" className="item-click" style={{textDecoration:'none'}}>
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
</a>
</div>
);
