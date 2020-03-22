import React from 'react';
import {routes} from "../../routes";
import {useRoutes} from "hookrouter";
import {NotFound} from "../NotFound/NotFound";

function App() {
    return useRoutes(routes) || <NotFound/>
}

export default App;
