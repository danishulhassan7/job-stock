import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Styles from './Styles';


function HireAndJoin() {
    return (
        <Styles>
            <section className="call-to-act">
                <Container fluid className="container-fluid">
                    <Row>
                        <Col md={6} sm={6} className="no-padd bl-dark">
                            <div className="call-to-act-caption">
                                <h2>We Are Expert In Web design and development</h2>
                                <h3>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo</h3>
                                <a href="#" className="btn bat-call-to-act">Hire Us</a>
                            </div>
                        </Col>

                        <Col md={6} sm={6} className="no-padd gr-dark">
                            <div className="call-to-act-caption">
                                <h2>We Are Expert In Web design and development</h2>
                                <h3>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo</h3>
                                <a href="#" className="btn bat-call-to-act">Join Us</a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Styles>
    );
}

export default HireAndJoin;


