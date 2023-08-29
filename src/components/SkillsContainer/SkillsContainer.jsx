import React from "react";

import javaImg from "../../images/java.png";
import pythonImg from "../../images/python.png";
import htmlImg from "../../images/html.png";
import cssImg from "../../images/css.png";
import javascriptImg from "../../images/js.png";
import mlImg from "../../images/machine-learning.png";
import reactjsImg from "../../images/reactjs.png";
import sqlImg from "../../images/sql.png";

import Skill from "../Skill/Skill";

export default function SkillsContainer() {
  return (
    <div className="skills">
      <h2>My Skills.</h2>
      <Skill
        img={javaImg}
        sname="Java"
        description="I learned this skill in Feb 2023 because it is programming language and includes web and mobile application development and modern technologies"
      />

      <Skill
        img={sqlImg}
        sname="SQL"
        description="I learned this skill in August 2023 during my training in JSpiders."
      />

      <Skill
        img={htmlImg}
        sname="HTML"
        description="I learned this skill in 2022 because I also wanted to be a web developer and wanted build my own website"
      />

      <Skill
        img={cssImg}
        sname="CSS"
        description="I learned this skill in 2022 because I also wanted to be a web developer and wanted build my own website"
      />

      <Skill
        img={javascriptImg}
        sname="JavaScript"
        description="I learned this skill in 2023 because I also wanted to be a web developer and wanted build my own website"
      />

      <Skill
        img={reactjsImg}
        sname="ReactJS"
        description="I learned this skill in May 2023 because it is one of the modern and popular JavaScript framework which is made web development easier."
      />
      <Skill
        img={pythonImg}
        sname="Python"
        description="I wanted to build carrier as Data Scientist so I learned this skill in 2021 because it is simple and contain machine learning libraries"
      />

      <Skill
        img={mlImg}
        sname="Machine Learning"
        description="I learned this skill in 2022 since it is one of the upcoming leading technologies. I also joined as machine learning intern and developed projects"
      />

    </div>
  );
}
