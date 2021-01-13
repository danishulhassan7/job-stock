import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import step1 from '../assets/img/step-1.png';


export const HowItWorks = (props) => (
    <div className="working-process">
        <span className="process-img"><img src={step1} height="60px" className="img-responsive ml-3 mt-4" alt="" /><span
            className="process-num">{props.count}</span></span>
        <h6 className="text-muted mt-3">
            {props.heading}
        </h6>
        <p className="text-muted" style={{ fontSize: "85%", fontStyle: "italic" }}>
           {props.desc}
        </p>
    </div>
);
