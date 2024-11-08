import React from "react";
import {BrowserRouter as Router,Route, Routes} from'react-router-dom';
import {Landing} from "./components/Landing/Landing";
import {NotFound} from "./components/NotFound/NotFound";

export function routes (){
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Landing/>}/>
                <Route
                    path="*"
                    element={<NotFound />}
                />
            </Routes>
        </Router>
    );

};