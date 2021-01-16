import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Styles from './Styles';
import { Button } from 'react-bootstrap';



export const HireFreelancers = (props) => (
<Styles>
    <div className="freelance-container style-2">
        <div className="freelance-box">
            <span className={props.class}>{props.status}</span>
            <h4 className="flc-rate">{props.rate}</h4>

            <div className="freelance-inner-box">
                <div className="freelance-box-thumb"><img src={props.img} height="104px"
                    className="img-responsive img-circle" alt="" /></div>
                <div className="freelance-box-detail">
                    <h4>{props.title}</h4>
                    <span className="location">{props.country}</span>
                </div>
                <div className="rattings"><i className="fa fa-star fill"></i><i className="fa fa-star fill"></i><i
                    className="fa fa-star fill"></i><i className="fa fa-star-half fill"></i><i
                        className="fa fa-star"></i></div>
            </div>
            <div className="freelance-box-extra">
                <p>{props.desc}</p>
                <ul>
                    <li>{props.skill1}</li>
                    <li>{props.skill2}</li>
                    <li>{props.skill3}</li>
                    <li className="more-skill bg-primary">{props.skill}</li>
                </ul>
            </div> <hr/>
            <Button className="detailBtn" variant="" 
            style={{
                backgroundColor:"",
                 display:"inline-block",
                 width:"100%",
                 padding:"10px 20px",
                }}>
                {props.btnText1}</Button>
    
        </div>
    </div>
    </Styles>
);