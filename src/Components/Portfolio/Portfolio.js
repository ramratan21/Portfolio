import React from 'react'
import Services from './Services'
import PF from '../res/PF_heading.png'
import "./Portfolio.css"
import Skills from './Skills'
import ScrollAnimation from "react-animate-on-scroll"

function Portfolio() {
    return (
        <div>
            <Services/>
            <div className="portfolio-container">
                <ScrollAnimation animateIn= "fadeIn">
                    <img alt={""} id="Portfolio" src= {PF}/>
                </ScrollAnimation>
                <Skills/>
            </div>
        </div>
    )
}

export default Portfolio
