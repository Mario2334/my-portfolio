import React from "react";
import '../../assets/css/404.css'
import {A} from "hookrouter"

export let NotFound = (props) => {
    return (
        <div id="notfound">
            <div className="notfound">
                <div className="notfound-404">
                    <h1>404</h1>
                    <h2>Page not found</h2>
                </div>
                <a href="/">Homepage</a>
            </div>
        </div>
    )
};