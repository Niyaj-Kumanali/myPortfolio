import React from "react";

import Experience from "../Experience/Experience";

export default function Experiences() {
    return (
        <div>
            <h3>Work Experience</h3>
            <div className="experinces">
            <Experience
                role="Machine Learning"
                company="Tech Fortune Technologies"
                place="Bengaluru, India"
                date="08/2022 - 09/2022"
            />
          
            <Experience
                role="Machine Learning"
                company="Aqmenz Automation Private Limited"
                place="Bengaluru, India"
                date="08/2022 - 09/2022"
            />

          

            <Experience
                role="Machine Learning"
                company="Knowledge Solutions India"
                place="Delhi, India"
                date="09/2022 - 12/2022"
            />
            </div>
        </div>
    );
}