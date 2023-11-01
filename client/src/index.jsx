import React from "react";
import { createRoot } from 'react-dom/client';
import { store } from './store'; //imported RTK Store
import { Provider } from 'react-redux'; //imported Provider
import { useDispatch, useSelector } from 'react-redux'; //importeed dispatch and useSelector
import { addOneToCount } from './slices/mainSlice' //actions
import { Routes, Route, Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Dashboard from "./components/dashboard";



export default function App() {
    const dispatch = useDispatch();
    const { count } = useSelector((state) => state.main);

    return (
        //login route 
        //dashboard route
        //neetcode
        //technologies

        <div>
            <Routes>
            {/* <Route path='/dashboard' element={<Dashboard/>}/> */}
            <Route path='/' element={<Dashboard/>}/>
            </Routes>
        </div>
    )
}

const root = createRoot(document.getElementById('root'));
root.render( 
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
)