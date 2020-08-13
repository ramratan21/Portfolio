import React, {useRef, useState} from 'react'
import './Header.css'
import UseAnimations from "react-useanimations";
import dropdown from 'react-useanimations/lib/menu4';
import {gsap} from 'gsap'


function Header() {
    const menuRef = useRef(null)
    const [isClicked, setIsClicked] = useState(false);
    const handleClick = () => {
        setIsClicked(!isClicked);
        if (!isClicked) {
            gsap.fromTo(menuRef.current, { scale: 0, opacity: 0 }, { duration: 1, scale: 1, opacity: 1 })
        } else {
            gsap.fromTo(menuRef.current, { scale: 1, opacity: 1 }, { duration: 1, scale: 0, opacity: 0 })
        }
    }

    return (
        <header>
            <div className="logo">
                <svg className="svg" xmlns="http://www.w3.org/2000/svg" width="1528.556" height="1008.409" viewBox="0 0 1528.556 1008.409">
                    <g id="Group_2" data-name="Group 2" transform="matrix(0.996, 0.087, -0.087, 0.996, -1248.786, -1183.627)">
                        <path id="Path_2" data-name="Path 2" d="M1957.511,479.852s112.911,182.215,313.288,272.07c73.739,33.066,154.975,74.558,233.774,87.349,135.128,21.934,254.448,0,254.448,0l87.466-34.367s-120.465,28.639-232.183,10.024-193.483-46.7-281.483-84.485c-189.245-81.263-310.108-250.591-310.108-250.591s85.081-59.426,125.633-133.171,36.577-161.81,36.577-161.81l-2.277-41.238-501.847,183,131.994-10.024,335.552-121.716s7.951,80.547-39.757,151.787S1957.511,479.852,1957.511,479.852Z" transform="translate(-80.576 600.038) rotate(11)" fill="#6768ff" stroke="#707070" stroke-width="1" />
                        <path id="Path_3" data-name="Path 3" d="M2306.592-570.585l12.734-112.737,34.124-302.106,643.521-125.851,28.115-29.521-718.495,128.959L2248.8-528.635Z" transform="matrix(0.999, 0.035, -0.035, 0.999, -186.299, 2066.799)" fill="#6768ff" stroke="#707070" stroke-width="1" />
                        <path id="Path_4" data-name="Path 4" d="M2314.4-992.633l30.4,29.784-6.933,149.188,111.467-48.567,9.067-165.556L2740-1084.4l-25.6,32.2-219.733,43.6L2472.8-673.864l34.667,64.4H2472.8l-38.4-64.4,14.933-159.384-114.667,49.64-11.733,109.744s.323,16.136-9.634,22.416c-8.03,5.066-25.558.8-35.7-3.1-22-8.452-34.134-43.737-34.134-43.737a130.185,130.185,0,0,1-2.27-21.287,97.771,97.771,0,0,1,2.27-24.865c2.049-8.59,4.577-22.306,13.867-31.125,13.822-13.122,35.733-19.856,35.733-19.856l15.467-7.379Z" transform="translate(-30.912 2054.492) rotate(3)" fill="#6768ff" stroke="#707070" stroke-width="1" />
                        <g id="Ellipse_1" data-name="Ellipse 1" transform="translate(2560 1525)" fill="#6768ff" stroke="#707070" stroke-width="1">
                            <ellipse cx="22.5" cy="23" rx="22.5" ry="23" stroke="none" />
                            <ellipse cx="22.5" cy="23" rx="22" ry="22.5" fill="none" />
                        </g>
                    </g>
                </svg>
            </div>
            <nav id="desktop-version">
                <a class="navigation" href="/">Home</a>
                <a class="navigation" href="#Portfolio">Portfolio</a>
                <a class="navigation" href="/">About</a>
                <a class="navigation" href="/">Contact</a>
            </nav>
            <UseAnimations id="menu4" onClick={handleClick} strokeColor = {"var(--mblue)"} reverse= {isClicked} animation={dropdown} size={55} style={{ padding: 100}}/>
            <div ref={menuRef} class="container" id="mobile-version">
                <a class="navigation" href="/">Home</a>
                <a class="navigation" href="#Portfolio">Portfolio</a>
                <a class="navigation" href="/">About</a>
                <a class="navigation" href="/">Contact</a>
            </div>
        </header>
    )
}

export default Header