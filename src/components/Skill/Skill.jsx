import React from "react";
import './Skill.css';

export default function Skill(props) {
  return (
    <div className="skill-row">
      <div>
        <img className="image" src={props.img} alt="" />
      </div>
      <div>
        <h3>{props.sname}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
