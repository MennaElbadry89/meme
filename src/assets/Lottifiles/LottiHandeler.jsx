import  './Lottifiles.css'
import React from "react";
import Lottie from "lottie-react";

import { Link } from 'react-router-dom';
import lotti1 from './loading.json'
import lotti2 from './AnimatedPlantLoader.json'
import cart from './ShoppingCartLoader.json'
import Error from './ErrorAnimation.json'
import Err from './error.json'

export default function LottiHandeler({status}){

    switch (status){

        case 'main':
                return <div className="LottiHandeler " style={{height: ' 50%' , width: "50%" , margin: "auto"}}>
            <Lottie animationData={lotti1} />
                </div>
        case 'page' : 
                return <div className="LottiHandeler " style={{height: ' 50%' , width: "50%" , margin: "auto"}}>
                    <Lottie animationData={lotti2} />          
                </div>
        case 'cart' : 
                return <div className="LottiHandeler " style={{height: ' 50%' , width: "50%" , margin: "auto"}}>
                    <Lottie animationData={cart} />          
                </div>
        case 'Err' :
                return <div className="LottiHandeler " style={{height: ' 50%' , width: "50%" , margin: "auto"}}>
                    <Lottie animationData={Err} />          
                </div>
        default : 
                 return <div className="LottiHandeler " style={{height: ' 50%' , width: "50%" , margin: "auto"}}>
                    <Lottie animationData={Error} /> 
                    <p className='h3 text-danger'>Go back to Home</p>    
                    <Link to={"/"} className='h4 text-info'>Go back to Home</Link>     
                </div>


}} 