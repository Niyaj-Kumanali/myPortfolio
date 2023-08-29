import React from "react";
import './Education.css';

export default function Education(props)
{
    return (
        <div className="Education-row">
            <div className="edu-left">
                <p><strong>{props.course}</strong></p>
                <p><i>{props.college}</i></p>
                <p>{props.grade}</p>
            </div>
            <div className="edu-right">
                <p>{props.date}</p>
                <p><i>{props.place}</i></p>
            </div>
        </div>
    );
}