import React from 'react';
import { Outlet } from 'react-router-dom'
import Header from '../Shared/Header/Header';
import SideNav from '../Shared/SideNav/SideNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div>
                <div>
                    <div lg='3'>
                        <SideNav></SideNav>
                    </div>
                    <div lg='9'>
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;