import React from 'react';
import '../styles/Skills.css'

export const Skills = () => {
  return (
    <div className='skills-container'>

        <div className='skills-title'>
            <h1>Skills</h1>
            <hr></hr>
        </div>

        <div className='skills-content'>

            <div className="skill-react"><img src={require("../images/skills/react.svg")} /></div>
            <div><img src={require("../images/skills/redux.png")} /></div>
            <div><img src={require("../images/skills/graphql.png")} /></div>
            <div><img src={require("../images/skills/nodejs.png")} /></div>
            <div><img src={require("../images/skills/mongodb.png")} /></div>
            <div><img src={require("../images/skills/psql.png")} /></div>
        </div>

        <div className='skills-content-1'>
            <div><img src={require("../images/skills/html5.png")} /></div>
            <div><img src={require("../images/skills/css3.png")} /></div>
            <div><img src={require("../images/skills/java.png")} /></div>
            <div><img src={require("../images/skills/c++.png")} /></div>
            <div><img src={require("../images/skills/c.png")} /></div>
            <div><img src={require("../images/skills/jquery.png")} /></div>
        </div>

        <div className='skills-content-2'>
            <div><img src={require("../images/skills/javascript.png")} /></div>
            <div><img src={require("../images/skills/git.png")} /></div>
        </div>

    </div>
  );
}
