import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import styled from 'styled-components';
import FreelancingImg from '../assets/img/freelance-cover.jpg';


const Styles = styled.div`
    .jumbo {
        background: url(${FreelancingImg}) no-repeat fixed;
        background-size: cover;
        height: 100vh;
        position: relative;
        z-index: -2;
        color: #fff;
    }

    .overlay {
        background-color: #000;
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }

    .text-size {
        color: #000;
        font-size: 3em;
        font-weight: bold;
        margin: 90px 10px 0px 10px;
    }
`;

export const Freelancing = () => (
    <Styles>
        <div className="jumbo">
            <div className="overlay"></div>
                <Container>
                    <Row>
                        <Col md={6}>
                            <p className="text-size"> Talent? <br/> Meet Opportunity. </p>
                            <p className="text-muted" style={{fontStyle:"italic"}}>Maxime voluptatum sint consequatur explicabo consequuntur vero delectus autem exercitationem id quos rem totam voluptatem asperiores aut, dolores optio esse sunt expedita eveniet quas quasi necessitatibus! Aperiam minus eius minima eveniet, quasi assumenda non aliquam perferendis adipisci dolores saepe enim quibusdam eligendi, maiores perspiciatis sunt fugiat! Aliquid dolorem aliquam dolor aspernatur exercitationem excepturi tempore provident pariatur accusantium, at quo ab, enim placeat!</p>
                        </Col>
                    </Row>
                </Container>
            
        </div>
    </Styles>
);