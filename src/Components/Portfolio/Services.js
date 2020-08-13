import React from 'react'
import designing from "../res/Designing.png"
import development from "../res/Development.png"
import teaching from "../res/Teaching.png"
import "./Services.css"
import ScrollAnimations from "react-animate-on-scroll"

function Services() {
    return (
        <div className="Services-container">
            <ScrollAnimations duration= {1} animateIn="bounceInLeft"><h1>Services</h1></ScrollAnimations>
            <div id= "Services">
                <ScrollAnimations duration = {2} animateIn="flipInY">
                    <img alt="" className="Service" src={designing}/>
                </ScrollAnimations>
                <ScrollAnimations duration={2} animateIn="flipInX">
                    <img alt="" className="Service" src={development} />
                </ScrollAnimations>
                <ScrollAnimations duration={2} animateIn="flipInY">
                    <img alt="" className="Service" src={teaching} />
                </ScrollAnimations>
            </div>
        </div>
    )
}

export default Services
