import React, {useEffect , useState} from 'react';
import {setup_dropdown} from "../Utils/Setup";
import {NavDrop} from "../NavDrop/NavDrop";
import {Footer} from "../Footer/Footer";
import Typed from 'react-typed';
import {options} from "../Utils/Constants";

export let Template = (props) => {
    useEffect(() => {
        setup_dropdown();
    });
    setup_dropdown();
    let motto_options = options;
    motto_options.startDelay = 2000;
    motto_options.loop = false;
    motto_options.onComplete = function (self) {
        self.strings = ["Hustler  Hacker  Hipster"];
    };
    return (
        <div className="App">
            <div data-offset="30" data-spy="scroll" data-target="#navigation" id="body">
                    <div className="menu-overlay"/>

                    <NavDrop/>

                    <div className="container-fluid d-flex" id="header">
                        <div className="row align-items-center justify-content-center text-center">
                            <div>
                                <h1><Typed {...options}
                                           strings={ ["Sanket Mokashi","Software Developer"]}/></h1>
                                <hr/>
                                <h4>
                                    <Typed {...motto_options} strings={["Hipster" , "Hacker" , "Hustler"]}/>
                                </h4>
                            </div>
                        </div>

                        <div id="overlay"/>
                    </div>
                    {props.children}
                </div>
                <Footer/>
        </div>
    )
}