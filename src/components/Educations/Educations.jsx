import React from "react";

import Education from "../Education/Education";

export default function Educations() {
    return (
        <div>
            <h3>Education</h3>
            <div className="educations">
            <Education
                course="Bachelor of Engineering - Computer Science"
                college="VSM's Somashekhar R. Kothiwale Intitute of Technology"
                place="Nipani, Karnataka, India"
                date="2019 - 2023"
                grade = "Grade: 8.4"
            />
          
            <Education
                course="PUC - Science"
                college="KLE's G. I. Bagewadi Arts, Science and Commerce College"
                place="Nipani, Karnataka, India"
                date="2017 - 2019"
                grade= "Percentage: 66.67%"
            />

          

            <Education
                course="SSLC"
                college="Nutan Marathi Vidyalay"
                place="Nipani, Karnataka, India"
                date="2017"
                grade = "Percentage: 87.36%"
            />
            </div>
        </div>
    );
}