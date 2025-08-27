import './Home.css'
import React from "react";
import Header from '../../components/Header/Header';
import Services from '../../components/Services/Services';
import Catogries from '../../components/catogries/Catogries';
import Shop from '../Shop/Shop'; 
import Products from '../../components/Products/Products';

import AutoPlay from '../slider/AutoPlay'
import Contact from '../Contact/Contact'

export default function Home(){



    return(
        <>
        <div className="Home">
            <Header />
            <Services />
            <Catogries />
            <Shop />
            <Contact/>
            <AutoPlay/>
        </div>
        
        </>
    )
}
