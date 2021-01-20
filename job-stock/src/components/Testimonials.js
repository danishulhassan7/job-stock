import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Image} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf} from '@fortawesome/free-solid-svg-icons';

export const Testimonials = (props) => (

    <div className="client-testimonial">
        <div className="pic"><Image src={props.img} alt="" /></div>
        <p className="client-description">
        {props.desc}
        </p>
        <h3 className="client-testimonial-title">
        {props.title}
        </h3>
        <ul className="client-testimonial-rating">
            <li className="fa fa-star-o"><FontAwesomeIcon icon={faStar}/></li>
            <li className="fa fa-star-o"><FontAwesomeIcon icon={faStar}/></li>
            <li className="fa fa-star"><FontAwesomeIcon icon={faStarHalf}/></li>
        </ul>
    </div>
);