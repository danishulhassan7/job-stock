import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Styles from './Styles';

function HireAndJoin() {
    /*---Company Brand Carousel --*/
	 $("#company-brands").owlCarousel({
		items:5,
		itemsDesktop:[1199,5],
		itemsDesktopSmall:[979,4],
		itemsTablet:[768,3],
		itemsMobile: [600, 2],
		loop:true,
		pagination: false,
		navigation:false,
		navigationText:["",""],
		autoPlay:true
	});
    return(
        <Styles>
        <div className="company-brand freelancer">
            <Container className="container">
                <div id="company-brands" className="owl-carousel">
                    <div className="brand-img">
                        <img src="assets/img/microsoft-home-dark.png" className="img-responsive" alt="" />
                    </div>
                    <div className="brand-img">
                        <img src="assets/img/img-home-dark.png" className="img-responsive" alt="" />
                    </div>
                    <div className="brand-img">
                        <img src="#" className="img-responsive" alt="" />
                    </div>
                    <div className="brand-img">
                        <img src="assets/img/paypal-home-dark.png" className="img-responsive" alt="" />
                    </div>
                    <div className="brand-img">
                        <img src="assets/img/serv-home-dark.png" className="img-responsive" alt="" />
                    </div>
                    <div className="brand-img">
                        <img src="assets/img/xerox-home-dark.png" className="img-responsive" alt="" />
                    </div>
                    <div className="brand-img">
                        <img src="assets/img/yahoo-home-dark.png" className="img-responsive" alt="" />
                    </div>
                    <div className="brand-img">
                        <img src="#" className="img-responsive" alt="" />
                    </div>
                </div>
            </Container>
        </div>
    </Styles>
    );
}

export default HireAndJoin;


