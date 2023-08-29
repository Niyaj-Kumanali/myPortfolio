import React from "react";
// import './Certificates.css';

import Certificate from "../Certificate/Certificate";

import aqmenzImg from '../../images/aqmenz.png';
import hackerrankImg from '../../images/hackerrank.png';
import scalerImg from '../../images/scaler.png';
import quantumlearningImg from '../../images/quantumlearning.png';
import knowledgeImg from '../../images/knowledge.png';
import techfortuneImg from '../../images/techfortune.png';
// import aqmenzImg from '../../images/aqmenz.png';


export default function Certificates(props) {
    return (
        <div classNameName="certificates">
            <h3>Certifications</h3>
            <Certificate
                img={aqmenzImg}
                title="Artificial Intelligence & Machine Learning"
                company="Aqmenz Automation Private Limited"
                date="Sep 2022"
                id="Credential ID : IN/9641/FY2022"
            />

            <Certificate
                img={hackerrankImg}
                title="Java (Basic)"
                company="HackerRank"
                date="Mar 2023"
                id="Credential ID : A72EE42C0287"
            />

            <Certificate
                img={scalerImg}
                title="Java for Beginners"
                company="Scaler"
                date="Mar 2023"
            />

            <Certificate
                img={quantumlearningImg}
                title="MACHINE LEARNING WITH AI USING PYTHON"
                company="Quantum Learnings"
                date="Dec 2022"
                id="Credential ID : QL-ML-2909-1111-63"
            />

            <Certificate
                img={knowledgeImg}
                title="MACHINE LEARNING WITH AI USING PYTHON"
                company="Knowledge Solutions India"
                date="Dec 2022"
                id="Credential ID : KSI-ML-2909-1111-63"
            />

            <Certificate
                img={techfortuneImg}
                title="AI AND ML"
                company="Tech Fortune Technologies"
                date="Sep 2022"
                id="Credential ID : TFT/INT/2022/00212"
            />

            <Certificate
                img={aqmenzImg}
                title="Artificial"
                company="Aqmenz"
                date="Sep"
                id="Credential ID : IN"
            />
        </div>
    );
}