import React from 'react';
import {Image} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export const HowItWorks = (props) => (
    <div className="working-process">
        <span className="process-img"><Image src={props.img} height="60px" className="img-responsive ml-3 mt-4" alt="" /><span
            className="process-num">{props.count}</span></span>
        <h6 className="text-muted mt-3">
            {props.heading}
        </h6>
        <p className="text-muted" style={{ fontSize: "85%", fontStyle: "italic" }}>
           {props.desc}
        </p>
    </div>
);
