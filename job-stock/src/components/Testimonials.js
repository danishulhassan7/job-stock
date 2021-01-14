import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Testimonials = (props) => (

    <div className="client-testimonial">
        <div className="pic"><img src={props.img} alt="" /></div>
        <p className="client-description">
        {props.desc}
        </p>
        <h3 className="client-testimonial-title">
        {props.title}
        </h3>
        <ul className="client-testimonial-rating">
            <li className="fa fa-star-o"></li>
            <li className="fa fa-star-o"></li>
            <li className="fa fa-star"></li>
        </ul>
    </div>
);