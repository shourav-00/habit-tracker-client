import React from 'react';
import { Outlet } from 'react-router';
//import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar';

const Layout = () => {
    return (
        <div className='flex flex-col min-h-screen max-w-7xl mx-auto'>
            <div className=''>
                <Navbar></Navbar>
            </div>
            <div className='flex-1'>
                <Outlet>

                </Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Layout;