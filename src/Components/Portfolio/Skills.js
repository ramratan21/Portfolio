import React from 'react'
import ScrollAnimation from "react-animate-on-scroll"
import react_lib from "../res/react_lib.png"
import "./Skills.css"
import js from "../res/js.png"
import html from "../res/html.png"
import xd from "../res/xd.png"


function Skills() {
    return (
        <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center", marginTop: "-20px"}}>
            <ScrollAnimation animateIn="bounceInLeft">
                <div className='skill-container'>
                    <h1>Skills</h1>
                    <div id="skill">
                        <img alt ="" src={xd} />
                        <img alt ="" src={html} />
                        <img alt ="" src={js} />
                        <img alt ="" src={react_lib} />
                    </div>
                </div>
            </ScrollAnimation>
            <ScrollAnimation  animateIn="bounceInRight">
                <div className='skill-container'>
                    <h1>Features Of My Websites</h1>
                    <ul id="skill">
                        <li>Easy Navigation.</li>
                        <li>Responsive Design</li>
                        <li>Attractive Animations</li>
                        <li>User Interactions and Dynamic features</li>
                        <li>Trendy, intuitive design and user experience</li>
                        <li>Product visuals and descriptions</li>
                    </ul>
                </div>
            </ScrollAnimation>
        </div>
    )
}

export default Skills
