import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import Login from '../Login/Login';
import Pages from './Pages/Pages';
import Routeswapper from './Routeswapper/Routeswapper';
import Singleproduct from './Singleproduct/Singleproduct';

const routes=createBrowserRouter([
    {
        path:"/",
        element:<Routeswapper></Routeswapper>,
        children:[
            {
                path:"/",
                element:<Pages></Pages>,
            },{
                path:"/products/:singleid",
                element:<Singleproduct></Singleproduct>
            },{
                path:'/login',
                element:<Login></Login>
            }
        ]
    }
])

export default routes;