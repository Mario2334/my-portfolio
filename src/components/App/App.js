import React from 'react';
import { routes } from "../../routes";
import FluidBackground from "../Background/FluidBackground";

function App() {
    return (
        <div style={{ position: 'relative', minHeight: '100vh' }}>
            <FluidBackground />
            {routes()}
        </div>
    );
}

export default App;