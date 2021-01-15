import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Styles from './Styles';
import bannerImg from '../assets/img/banner-10.jpg';
import can1 from '../assets/img/can-1.png';
import can2 from '../assets/img/can-2.png';
import can3 from '../assets/img/can-3.png';
import can4 from '../assets/img/can-4.png';
import can5 from '../assets/img/can-5.png';
import { BrowsResComp } from './BrowsResComp';
import Footer from './Footer';

function BrowseResume() {
    return (
        <Styles>
            <section class="inner-header-title" style={{ backgroundImage: "url(" + bannerImg + ")", height: '360px' }}>
                <Container>
                    <Row>
                        <Col md={12}>
                            <h1 style={{ fontSize: '5em', fontStyle: 'bold' }}>Browse Resume</h1>
                        </Col>
                    </Row>
                </Container>
            </section> <br /> <br /> <br />


            {/* Browse Resume Section  */}
            <Container>
                <section>
                    <BrowsResComp
                        img={can1}
                        name="Charles Hopman"
                        title="App Developer"
                        address=" Street #210, Make New London"
                        rate="$16/Hour"
                        sk1="HTML"
                        sk2="CSS"
                        sk3="JS"
                        sk4="Kotlin"
                        sk5="MySql"
                        exp="Exp. 3 Years"
                    />

                    <BrowsResComp
                        img={can2}
                        name="Charles Hopman"
                        title="App Developer"
                        address=" Street #210, Make New London"
                        rate="$16/Hour"
                        sk1="HTML"
                        sk2="CSS"
                        sk3="JS"
                        sk4="Kotlin"
                        sk5="MySql"
                        exp="Exp. 3 Years"
                    />

                    <BrowsResComp
                        img={can3}
                        name="Charles Hopman"
                        title="App Developer"
                        address=" Street #210, Make New London"
                        rate="$16/Hour"
                        sk1="HTML"
                        sk2="CSS"
                        sk3="JS"
                        sk4="Kotlin"
                        sk5="MySql"
                        exp="Exp. 3 Years"
                    />

                    <BrowsResComp
                        img={can4}
                        name="Charles Hopman"
                        title="App Developer"
                        address=" Street #210, Make New London"
                        rate="$16/Hour"
                        sk1="HTML"
                        sk2="CSS"
                        sk3="JS"
                        sk4="Kotlin"
                        sk5="MySql"
                        exp="Exp. 3 Years"
                    />

                    <BrowsResComp
                        img={can5}
                        name="Charles Hopman"
                        title="App Developer"
                        address=" Street #210, Make New London"
                        rate="$16/Hour"
                        sk1="HTML"
                        sk2="CSS"
                        sk3="JS"
                        sk4="Kotlin"
                        sk5="MySql"
                        exp="Exp. 3 Years"
                    />

                    <BrowsResComp
                        img={can2}
                        name="Charles Hopman"
                        title="App Developer"
                        address=" Street #210, Make New London"
                        rate="$16/Hour"
                        sk1="HTML"
                        sk2="CSS"
                        sk3="JS"
                        sk4="Kotlin"
                        sk5="MySql"
                        exp="Exp. 3 Years"
                    />

                    <BrowsResComp
                        img={can4}
                        name="Charles Hopman"
                        title="App Developer"
                        address=" Street #210, Make New London"
                        rate="$16/Hour"
                        sk1="HTML"
                        sk2="CSS"
                        sk3="JS"
                        sk4="Kotlin"
                        sk5="MySql"
                        exp="Exp. 3 Years"
                    />

                    <BrowsResComp
                        img={can3}
                        name="Charles Hopman"
                        title="App Developer"
                        address=" Street #210, Make New London"
                        rate="$16/Hour"
                        sk1="HTML"
                        sk2="CSS"
                        sk3="JS"
                        sk4="Kotlin"
                        sk5="MySql"
                        exp="Exp. 3 Years"
                    />
                </section>
            </Container>
            <br /> <br /> <br />
            <Footer />
        </Styles>
    );
}

export default BrowseResume;