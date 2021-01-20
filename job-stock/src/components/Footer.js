import React from 'react';
import '../Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col} from 'react-bootstrap';
import Styles from './Styles';
import FooterImg from '../assets/img/footer-logo.png';
import FooterForm from './FooterForm';
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
function Footer() {
    return (
        <Styles>
            <footer className="footer">
                <Container className="lg-menu">
                    <Row>
                        <Col md={4} sm={4}>
                            <Image src={FooterImg} className="img-responsive" alt="" />
                        </Col>
                        <Col className="pull-right" md={8} sm={8}>
                            <ul>
                                <li><a href="index-2.html" title="">Home</a></li>
                                <li><a href="blog.html" title="">Blog</a></li>
                                <li><a href="404.html" title="">404</a></li>
                                <li><a href="faq.html" title="">FAQ</a></li>
                                <li><a href="contact.html" title="">Contact Us</a></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row className="row no-padding">
                        <Col md={3} sm={12}>
                            <div className="footer-widget">
                                <h3 className="widgettitle widget-title">About Job Stock</h3>
                                <div className="textwidget">
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
                                    <p>7860 North Park Place<br />San Francisco, CA 94120</p>
                                    <p><strong>Email:</strong> Support@careerdesk</p>
                                    <p><strong>Call:</strong> <a href="tel:+15555555555">555-555-1234</a></p>
                                    <ul className="footer-social">
                                        <li><a href="#"><i> <FacebookIcon /></i></a></li>
                                        <li><a href="#"><i><EmailIcon /></i></a></li>
                                        <li><a href="#"><i><TwitterIcon /></i></a></li>
                                        <li><a href="#"><i><InstagramIcon /></i></a></li>
                                        <li><a href="#"><i><LinkedInIcon /></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col md={3} sm={12}>
                            <div className="footer-widget">
                                <h3 className="widgettitle widget-title">All Navigation</h3>
                                <div className="textwidget">
                                    <div className="textwidget">
                                        <ul className="footer-navigation">
                                            <li><a href="manage-company.html" title="">Front-end Design</a></li>
                                            <li><a href="manage-company.html" title="">Android Developer</a></li>
                                            <li><a href="manage-company.html" title="">CMS Development</a></li>
                                            <li><a href="manage-company.html" title="">PHP Development</a></li>
                                            <li><a href="manage-company.html" title="">IOS Developer</a></li>
                                            <li><a href="manage-company.html" title="">Iphone Developer</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col md={3} sm={12}>
                            <div className="footer-widget">
                                <h3 className="widgettitle widget-title">All Categories</h3>
                                <div className="textwidget">
                                    <ul className="footer-navigation">
                                        <li><a href="manage-company.html" title="">Front-end Design</a></li>
                                        <li><a href="manage-company.html" title="">Android Developer</a></li>
                                        <li><a href="manage-company.html" title="">CMS Development</a></li>
                                        <li><a href="manage-company.html" title="">PHP Development</a></li>
                                        <li><a href="manage-company.html" title="">IOS Developer</a></li>
                                        <li><a href="manage-company.html" title="">Iphone Developer</a></li>
                                    </ul>
                                </div>
                            </div>
                        </Col>

                        <Col md={3} sm={12}>
                            <div className="footer-widget">
                                <h3 className="widgettitle widget-title">Connect Us</h3>
                                <div className="textwidget">
                                    <FooterForm/>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Row className="row copyright">
                    <Container>
                        <p><a target="_blank" href="/">Job Stock 2021</a></p>
                    </Container>
                </Row>
            </footer>
        </Styles>
    );
}

export default Footer;