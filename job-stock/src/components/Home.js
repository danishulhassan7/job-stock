import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import styled from 'styled-components';
import HomeImg from '../assets/img/home.jpg';


const Styles = styled.div`
    .jumbo {
        background: url(${HomeImg}) no-repeat fixed;
        background-size: cover;
        height: 100vh;
        position: relative;
        z-index: -2;
        color: #fff;
    }

    .overlay {
        background-color: #ceceef;
        opacity: 0.2;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }

    .text-size {
        margin-top: 230px;
        color: black;
        font-size: 3em;
        font-weight: bold;
        // margin: 90px 10px 0px 10px;
    }
`;

export const Home = () => (
    <Styles>
        <div className="jumbo">
            <div className="overlay"></div>
                <Container>
                    <Row>
                        <Col md={12} className="App-header App">
                            <p className="text-size"> 50,000+ Job Search</p>
                        </Col>
                    </Row>
                </Container>
            
        </div>
    </Styles>
);