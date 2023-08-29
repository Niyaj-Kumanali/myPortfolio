import React from 'react';
import './Intro.css'
import cloudImg from '../../images/cloud.png';
import mountainImg from '../../images/mountain.png';

export default function Intro() {
  return (
    <div className="top-container">
      <img className="top-cloud" src={cloudImg} alt="cloud-img" />
      <h1>I'm Niyaj</h1>
      <h2>
        a <span className="pro">pro</span>grammer
      </h2>
      <img className="bottom-cloud" src={cloudImg} alt="cloud-img" />
      <img className="mountain-img" src={mountainImg} alt="mountain-img" />
    </div>
  );
}
