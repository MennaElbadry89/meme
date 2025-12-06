import  './Layout.css'
import React from "react";
import { Outlet } from 'react-router-dom';
import Navbar from '../../common/Navbar/Navbar';
import Footer from '../../common/Footer/Footer';



export default function Layout() {

    return(
        <>
        <div className="Layout relative">
           < Navbar/>
           <Outlet/>
           <Footer/>
        </div>
        
        </>
    )
}