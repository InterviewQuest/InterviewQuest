import React from "react";
import { createRoot } from 'react-dom/client';

export default function App() {
    return (
        <div>
            <button type="button">Hello World!</button>
        </div>
    )
}

const root = createRoot(document.getElementById('root'));
root.render( <App/>)