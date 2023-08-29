import React from "react";
import './Experience.css';

export default function Experience(props)
{
    return (
        <div className="Experience-row">
            <div className="exp">
                <p><strong>{props.role}</strong></p>
                <p><i>{props.company}</i></p>
            </div>
            <div className="exp">
                <p>{props.date}</p>
                <p><i>{props.place}</i></p>
            </div>
        </div>
    );
}