import React, {useEffect} from 'react';
import {setup_dropdown} from "../Utils/Setup";

export let Template = (props) => {
    useEffect(() => {
        setup_dropdown();
    });
    setup_dropdown();
    return (
        <div data-offset="30" data-spy="scroll" data-target="#navigation" id="body">
            <div className="menu-overlay"/>

            <div className="menu">

                <div className="toggler">
                    <div className="bar1"/>

                    <div className="bar2"/>

                    <div className="bar3"/>
                </div>

                <ul className="nav-content dropdown-menu" id="navigation">
                    <li><a className="nav-link" href="#header">Home</a></li>
                    <li><a className="nav-link" href="#about">About</a></li>
                    <li className="dropdown"><a className="nav-link dropdown-toggle" href="#" id="navbardrop">CV</a>
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

            <div className="container-fluid d-flex" id="header">
                <div className="row align-items-center justify-content-center text-center">
                    <div>
                        <h1 className="Title_Typed"/>

                        <hr/>
                        <h4 className="subTyped"/>
                    </div>
                </div>

                <div id="overlay"/>
            </div>
            {props.children}
        </div>
    )
}