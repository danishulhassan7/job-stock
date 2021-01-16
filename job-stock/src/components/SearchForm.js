import React from 'react';
import { Container, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Styles from './Styles';


export const SearchForm = (props) => (
    <Styles>
        <section>
            <Container>
                <Form
                 style={{
                     padding:"30",
                     backgroundColor:"#e6e6e6"
                 }}>
                    <Form.Row className="align-items-center">
                        <Col md={3}>
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
                        <Col md={3}>
                            <Form.Label htmlFor="inlineFormInput" srOnly>
                                Location
                            </Form.Label>
                            <Form.Control
                                size="lg"
                                className="mb-2"
                                id="inlineFormInput"
                                placeholder="Location: City, State, Zip"
                            />
                        </Col>
                        <Col md={3}>
                            <Form.Group controlId="formGridState">
                                <Form.Control as="select" defaultValue="Choose City" size="lg"
                                style={{marginTop:"10px"}}>
                                    <option>Choose City</option>
                                    <option>Karachi</option>
                                    <option>Lahore</option>
                                    <option>Islamabad</option>
                                    <option>Multan</option>
                                    <option>Quetta</option>
                                    <option>Peshawar</option>
                                    <option>Kashmir</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col md={3}>
                            <Button type="submit" className="mb-2" variant="success" style={{ backgroundColor: '#03a504', display: 'inline-block', padding: "6px 60px", fontSize: "20px" }}>
                                Search Job
                             </Button>
                        </Col>
                    </Form.Row>
                </Form>
            </Container>
        </section>
    </Styles>
);



