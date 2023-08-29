import React from "react";
import './Certificate.css';

export default function Certificate(props) {
    return (
        <div className="certificate-row">
            <div>
                <img className="img" src={props.img} alt="" />
            </div>
            <div>
                <h3>{props.title}</h3>
                <h3>{props.company}</h3>
                <h3>Issue date : {props.date}</h3>
                <p> {props.id}</p>
            </div>

        </div>
    )
}