import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import useFirebase from '../../Firebase/useFirebase/useFirebase';
const Routeswapper = () => {
    const {googlelog,handlesignout}=useFirebase()
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Routeswapper;