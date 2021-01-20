import React from 'react';
import { Container, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Styles from './Styles';


export const FreelancingForm = (props) => (
    <Styles>
        <section>
                <Form
                 style={{
                     padding:"0px",
                    //  backgroundColor:"rgba(138, 131, 131, 0.465)"
                 }}>
                    <Form.Row className="align-items-center">
                        <Col md={7}>
                            <Form.Label htmlFor="inlineFormInput" srOnly>
                                Skills
                            </Form.Label>
                            <Form.Control
                                size="lg"
                                className="mb-2"
                                id="inlineFormInput"
                                placeholder="Skills, Companies"
                            />
                        </Col>
                        <Col md={5}>
                            <Button type="submit" className="mb-2" variant="success" style={{ backgroundColor: '#03a504', display: 'inline-block', padding: "8px 20px", fontSize: "20px" }}>
                                Search
                             </Button>
                        </Col>
                    </Form.Row>
                </Form>
        </section>
    </Styles>
);



