import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../Pages/shared/Header/Header'
import Footer from '../../Pages/shared/Footer/Footer';


const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;