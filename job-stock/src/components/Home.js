import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import styled from 'styled-components';
import HomeImg from '../assets/img/home.jpg';
import comImg from '../assets/img/com-1.jpg';



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


    .banner-caption .form-control,
.main-heading h2,
.search-filter .form-control,
body,
nav.bootsnav .megamenu-content .title,
nav.navbar.bootsnav ul.nav>li>a,
p {
	font-family: Montserrat, sans-serif
}

.main-heading {
	text-align: center;
	margin-bottom: 2em
}

.main-heading p {
	font-size: 16px;
	color: #707c88;
	margin-bottom: 5px;
	text-transform: uppercase
}

.dark .main-heading h2,
.dark .main-heading p {
	color: #fff
}

.main-heading h2 {
	color: #35434e;
	position: relative;
	font-weight: 600;
	margin-top: 0;
	margin-bottom: 10px
}

.main-heading h2>span {
	color: #11b719
}

.main-heading span.heading-line {
	width: 80px;
	height: 1.2px;
	display: block;
	background: #11b719;
	position: relative;
	margin: 0 auto
}

html body .extra-mrg-5 {
	margin: 0 -5px
}

html body .extra-mrg-10 {
	margin: 0 -10px
}

html body .extra-mrg-15 {
	margin: 0 -15px
}

html body .extra-mrg-20 {
	margin: 0 -20px
}


.grid-view .brows-job-company-img {
	width: 80px;
	margin: 10px auto;
	height: 80px;
	display: inline-block;
	border: 1px solid #e4e4e4;
	background: #fff;
	vertical-align: middle;
	border-radius: 50%;
	line-height: 80px
}

.grid-view .brows-job-company-img img {
	margin: 0 auto;
	vertical-align: middle;
	display: inline-block;
	max-width: 50px;
	line-height: 50px
}

.grid-view-caption {
	margin: 3em 0 0;
	padding: 0;
	border-top: 1px solid #eaeff5;
	display: flex;
	width: 100%
}

.brows-job-position {
	padding: 0 15px
}

.grid-view-caption li {
	display: inline-block;
	float: left;
	width: 50%;
	padding: 10px 0;
	line-height: 2.2
}

.brows-job-list {
	display: table;
	width: 100%;
	clear: both;
	padding: 15px 0;
	margin-bottom: 15px;
	transition: .4s;
	border: 1px solid #eaeff5;
	background: #fff;
	border-radius: 6px;
	box-shadow: 0 0 10px 0 rgba(88, 96, 109, .14);
	-webkit-box-shadow: 0 0 10px 0 rgba(88, 96, 109, .14);
	-moz-box-shadow: 0 0 10px 0 rgba(88, 96, 109, .14)
}

.brows-job-list:focus,
.brows-job-list:hover {
	transform: translateY(-5px);
	-webkit-transform: translateY(-5px)
}

.grid-view.brows-job-list {
	position: relative;
	text-align: center;
	padding-bottom: 0;
	margin-bottom: 45px
}

.grid-view.brows-job-list:focus,
.grid-view.brows-job-list:hover {
	border-color: transparent
}

.brows-job-company-img {
	width: 75px;
	margin: 10px auto;
	height: 75px;
	display: inline-block;
	background: #f4f5f7;
	vertical-align: middle;
	border-radius: 50%;
	line-height: 75px
}

.brows-job-company-img img {
	margin: 0 auto;
	vertical-align: middle;
	display: inline-block
}


.grid-view .brows-job-company-img {
	width: 80px;
	margin: 10px auto;
	height: 80px;
	display: inline-block;
	border: 1px solid #e4e4e4;
	background: #fff;
	vertical-align: middle;
	border-radius: 50%;
	line-height: 80px
}

.grid-view .brows-job-company-img img {
	margin: 0 auto;
	vertical-align: middle;
	display: inline-block;
	max-width: 50px;
	line-height: 50px
}



.brows-job-position h3 {
	color: #5b6d77;
	font-size: 20px;
	padding: 0;
	margin-bottom: 0;
	line-height: 1.4
}

span.job-num {
	padding: 5px 10px;
	border-radius: 4px;
	text-transform: capitalize;
	color: #8da2b3;
	background: #f3f6fb
}

.brows-job-position p span {
	font-size: 12px;
	color: #5a6f7c;
	margin-top: 12px;
	margin-right: 20px
}

.brows-job-position p .brows-job-sallery {
	margin-right: 0
}

.brows-job-position p .brows-job-sallery i {
	margin-right: 10px
}


.brows-job-position .job-type {
	padding: 4px 12px;
	color: #fff;
	margin-left: 10px;
	border-radius: 2px;
	text-transform: capitalize
}


span.job-num {
	padding: 5px 10px;
	border-radius: 4px;
	text-transform: capitalize;
	color: #8da2b3;
	background: #f3f6fb
}

.grid-view .brows-job-type span {
	position: absolute;
	padding: 4px 15px;
	top: 10px;
	right: 0;
	color: #fff;
	line-height: 1.4;
	font-size: 12px;
	border-radius: 2px 0 0 2px
}


.grid-view-caption {
	margin: 3em 0 0;
	padding: 0;
	border-top: 1px solid #eaeff5;
	display: flex;
	width: 100%
}

.grid-view-caption li {
	display: inline-block;
	float: left;
	width: 50%;
	padding: 10px 0;
	line-height: 2.2
}

.grid-view-caption li:first-child {
	border-right: 1px solid #eaeff5
}

.grid-view-caption li p {
	margin-bottom: 0
}

.grid-view-caption li i {
	padding-right: 10px
}

.grid-view-caption .brows-job-location {
	margin-top: 0
}

.grid-view-caption .brows-job-location p i {
	margin-right: 0
}

.grid-view-caption .brows-job-location p,
.grid-view-caption .brows-job-sallery {
	font-size: 14px;
	margin-bottom: 0
}

.brows-job-location {
	margin-top: 23px
}

.brows-job-location p {
	font-size: 18px;
	color: #5a6f7c
}

.brows-job-location p i {
	font-size: 16px;
	margin-right: 10px
}
.full-time {
	background: #03a504
}

.part-time {
	background: #f6931e
}

.enternship {
	background: #d20001
}

.freelanc {
	background: #26a9e1
}
.grid-view-caption .brows-job-location {
	margin-top: 0
}

.grid-view-caption .brows-job-location p i {
	margin-right: 0
}

.grid-view-caption .brows-job-location p,
.grid-view-caption .brows-job-sallery {
	font-size: 14px;
	margin-bottom: 0
}

.brows-job-position p .brows-job-sallery {
	margin-right: 0
}

.brows-job-position p .brows-job-sallery i {
	margin-right: 10px
}

.grid-view-caption .brows-job-location p,
.grid-view-caption .brows-job-sallery {
	font-size: 14px;
	margin-bottom: 0
}

@media screen and (max-width:767px) {


	.brows-job-list {
		text-align: center;
		padding-bottom: 30px
	}

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
        <section>
            <Container>
                <Row>
                    <Col>
                        <div className="main-heading">
                            <p>200 New Jobs</p>

                            <h2>New and Random <span>Jobs</span></h2>
                        </div>
                    </Col>
                </Row>
                <Row className="row extra-mrg">
                    <Col md={3} sm={6}>
                        <div className="grid-view brows-job-list">
                            <div className="brows-job-company-img"><img src={comImg} className="img-responsive"
                                alt="" /></div>
                            <div className="brows-job-position">
                                <h3><a href="job-detail.html">Web Developer</a></h3>

                                <p><span>Google</span></p>
                            </div>
                            <div className="job-position"><span className="job-num">5 Position</span></div>
                            <div className="brows-job-type"><span className="part-time">Part Time</span></div>
                            <ul className="grid-view-caption">
                                <li>
                                    <div className="brows-job-location">
                                        <p><i className="fa fa-map-marker"></i>QBL Park, C40</p>
                                    </div>
                                </li>
                                <li>
                                    <p><span className="brows-job-sallery"><i className="fa fa-money"></i>$110 - 200</span></p>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </Styles>
);