import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


export const NewJobs = (props) => (
    <div className="grid-view brows-job-list">
        <div className="brows-job-company-img"><img src={props.img} className="img-responsive"
            alt="" /></div>
        <div className="brows-job-position">
            <h3><a href="job-detail.html">{props.title}</a></h3>
            <p><span>{props.company}</span></p>
        </div>
        <div className="job-position"><span className="job-num">{props.position}</span></div>
        <div className="brows-job-type"><span className={props.class}>{props.time}</span></div>
        <ul className="grid-view-caption">
            <li>
                <div className="brows-job-location">
                    <p><i className="fa fa-map-marker"></i>{props.location}</p>
                </div>
            </li>
            <li>
                <p><span className="brows-job-sallery"><i className="fa fa-money"></i>{props.salary}</span></p>
            </li>
        </ul>
    </div>
);
