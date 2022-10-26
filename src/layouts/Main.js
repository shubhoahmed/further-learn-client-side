import React from 'react';
import { Outlet } from 'react-router-dom'
import Header from '../Shared/Header/Header';
import SideNav from '../Shared/SideNav/SideNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;