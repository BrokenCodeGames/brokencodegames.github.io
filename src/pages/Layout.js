import React from "react";
import {Outlet} from "react-router-dom";
import NavBar from "./components/NavBar";
import Banner from './components/Banner';
import BottomInfo from './components/BottomInfo';
import seamlessMetal from './img/metal-seamless.jpg';

const Layout = () => {
    return (
        <div className=' flex justify-center h-screen'>
            <div className='pageWidth' >
                <div className='py-1'>
                    <Banner />
                </div>

                <div className='py-1'>
                    <NavBar />
                </div>

                <div className='py-1' style={{backgroundImage: `url(${seamlessMetal})` }}>
                    <Outlet />
                </div>

                <div className='py-1'>
                    <BottomInfo />
                </div>
            </div>
        </div>
    )
}

export default Layout;