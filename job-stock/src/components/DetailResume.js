import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Styles from './Styles';
import bannerImg from '../assets/img/banner-10.jpg';
import client1 from '../assets/img/client-1.jpg';
import client2 from '../assets/img/client-2.jpg';
import client3 from '../assets/img/client-3.jpg';
import client4 from '../assets/img/client-4.jpg';
import client5 from '../assets/img/client-5.jpg';
import { BrowsResForm } from './BrowsResForm';
import { PaginationComp } from './PaginationComp';
import Footer from './Footer';
import { MngRsmCmp } from './MngRsmCmp';

function DetailResume() {
    return (
        <Styles>
            <section class="inner-header-title" style={{ backgroundImage: "url(" + bannerImg + ")", height: '360px' }}>
                <Container>
                    <Row>
                        <Col md={12}>
                            <h1 style={{ fontSize: '5em', fontStyle: 'bold' }}>Manage Resume</h1>
                        </Col>
                    </Row>
                </Container>
            </section> <br /> <br /> <br />

            {/* Manange Resume Componoets (props)  */}
            <Container>
                <MngRsmCmp
                    img={client1}
                    name="Alexander Weir"
                    title=" (Web Developer)"
                    rate="$19/hour"
                    active="12 hours ago"
                    sk1="HTML"
                    sk2="CSS"
                    sk3="JS"
                    sk4="WordPress"
                />
                <MngRsmCmp
                    img={client2}
                    name="Henry Crooks"
                    title=" (Android Developer)"
                    rate="$32/hour"
                    active="2 hours ago"
                    sk1="Kotlin"
                    sk2="Java"
                    sk3="JS"
                    sk4="WordPress"
                />
                <MngRsmCmp
                    img={client3}
                    name="Zara Clow"
                    title=" (IOS Developer)"
                    rate="$16/hour"
                    active="5 hours ago"
                    sk1="Kotlin"
                    sk2="Java"
                    sk3="JS"
                    sk4="WordPress"
                />
                <MngRsmCmp
                    img={client4}
                    name="Joseph Macfarlan"
                    title=" (PHP Developer)"
                    rate="$19/hour"
                    active="12 hours ago"
                    sk1="HTML"
                    sk2="CSS"
                    sk3="JS"
                    sk4="PHP"
                />

                <MngRsmCmp
                    img={client1}
                    name="Raha Macfarlan"
                    title=" (PHP Developer)"
                    rate="$19/hour"
                    active="12 hours ago"
                    sk1="HTML"
                    sk2="CSS"
                    sk3="JS"
                    sk4="PHP"
                />

                <MngRsmCmp
                    img={client2}
                    name="Ramiuy Leftr"
                    title=" (PHP Developer)"
                    rate="$19/hour"
                    active="12 hours ago"
                    sk1="HTML"
                    sk2="CSS"
                    sk3="JS"
                    sk4="PHP"
                />
                <MngRsmCmp
                    img={client5}
                    name="Joseph Macfarlan"
                    title=" (JS Developer)"
                    rate="$19/hour"
                    active="12 hours ago"
                    sk1="HTML"
                    sk2="CSS"
                    sk3="JS"
                    sk4="PHP"
                />
            </Container>

            {/* Pagination  */}
            <br />
            <PaginationComp />
            <br /> <br />
            <Footer />
        </Styles>
    );
}

export default DetailResume;