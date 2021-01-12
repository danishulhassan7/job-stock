import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import styled from 'styled-component';
import FreelancingImg from '../assets/img/freelance-cover.jpg';


const Styles = styled.div`
    .jumbo {
        background: url(${CoverImage}) no-repeat fixed;
        background-size: cover;
        height: 290px;
        position: relative;
        z-index: -2;
        color: #fff;
    }

    .overlay {
        background-color: #000;
        opacity: 0.5;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
    }
`;

export const Freelancing = () => (
    <Styles>
        
    </Styles>
);