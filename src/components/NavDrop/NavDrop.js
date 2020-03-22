import React from "react";

export let NavDrop = (props) => {
    return (
        <div className="menu">

            <div className="toggler">
                <div className="bar1"/>

                <div className="bar2"/>

                <div className="bar3"/>
            </div>

            <ul className="nav-content dropdown-menu" id="navigation">
                <li><a className="nav-link" href="#header">Home</a></li>
                <li><a className="nav-link" href="#about">About</a></li>
                <li><a className="nav-link dropdown-toggle" id="dropdown-link" href="#root">CV</a>
                    <div id="dropdown-menu">
                        <ul>
                            <li><a className="dropdown-item" href="#cv">Skills</a></li>
                            <li><a className="dropdown-item" href="#experience">Experience</a></li>
                            <li><a className="dropdown-item" href="#education">Education</a></li>
                            <li><a className="dropdown-item" href="#diplomas">Diplomas</a></li>
                        </ul>
                    </div>
                </li>
                <li><a className="nav-link" href="#portfolio">Portfolio</a></li>
                <li><a className="nav-link" href="#contact">Contact</a></li>
            </ul>
        </div>
    )
}