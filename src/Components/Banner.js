import React from 'react';
import "./Banner.css";
import Profile from "./res/Profile.svg"
import ScrollAnimation from "react-animate-on-scroll"
function Banner() {
    return (
        <div className="banner">
            <div className = "content-container">
                <h6 id="welcome">Hey! Welcome</h6>
                <ScrollAnimation duration={4} delay={300} animateIn='fadeIn' animateOnce={true}>
                    <img alt="" src={Profile} />
                </ScrollAnimation>
                <h1 id="intro">
                    I am a <span> Web Developer </span> and
                    Designer.
                </h1>
                <h6 id="comment">
                    I love to visualise ideas and make them alive in a website.
                </h6>
            </div>
        </div>
    )
}

export default Banner
