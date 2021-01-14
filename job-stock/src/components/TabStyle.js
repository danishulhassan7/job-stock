import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Tab } from 'react-bootstrap';
import Styles from './Styles';
import bannerImg from '../assets/img/banner-10.jpg';

export const TabStyle = () => (
    <Styles>
			<section class="inner-header-title" style={{backgroundImage: "url(" + bannerImg + ")"}}>
				<Container>
					<Row>
                        <Col>
                            <h1>Tab Style</h1>
                        </Col>
                    </Row>
				</Container>
			</section>
    </Styles>
);