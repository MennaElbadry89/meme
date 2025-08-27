
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, EffectFade, EffectCreative , Pagination} from 'swiper/modules'
// import 'swiper/css';
// import 'swiper/css/effect-fade';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { displaycontext } from '../../context/DisplayContext';

import './Header.css'
import React from "react";

function Header (){
    
    return(
        <div className='Header container my-3'>
                <div className="row">
                    <div className="col-md-8">
                        <Swiper 
                         spaceBetween={0}
                         slidesPerView={1}
                         modules={[Autoplay , EffectFade , EffectCreative , Pagination]}
                         pagination = {true}
                         effect='fade'
                         autoplay={{
                            delay: 1500,
                            pauseOnMouseEnter : true
                         }}
                         loop= { true}                         
                        
                        className="slidr">
                            <SwiperSlide>
                            <div className="bags flex">
                                <div  className='data flex-col gap-2'>
                                    <b> Bags </b>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, tempora. </p>
                                    <button className='btn btn-primary'><Link to={"/shop"} style={{textDecoration: "none", color: "white"}}>Shop Now</Link></button>
                                </div>
                            </div>
                            </SwiperSlide>
                           <SwiperSlide>           
                             <div className="colthes flex">
                                <div  className='data flex-col gap-2'>
                                    <b>Colthes </b>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, tempora. </p>
                                    <button className='btn btn-primary'><Link to={"/shop"} style={{textDecoration: "none", color: "white"}}>Shop Now</Link></button>
                                </div>
                            </div>
                            </SwiperSlide>                     
                             <SwiperSlide>
                               <div className="shoes flex">
                                <div  className='data flex-col gap-2'>
                                    <b> shoes </b>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, tempora. </p>
                                    <button className='btn btn-primary'><Link to={"/shop"} style={{textDecoration: "none", color: "white"}}>Shop Now</Link></button>
                                </div>
                            </div>
                             </SwiperSlide>
                            
                    </Swiper>
                </div>
                <div className="col-md-4">
                    <div className="offers d-flex flex-column">
                        <div className="offer1 flex-col">
                            <p>Save up to 50%</p>
                            <b className='d-block'>Spetial Offer</b>
                            <button className='btn btn-primary'><Link to={"/saleClothes"} style={{textDecoration: "none", color: "white"}}>Shop Now</Link></button>
                        </div>
                         <div className="offer2 flex-col">
                            <p>Save up to 50%</p>
                            <b className='d-block'>Spetial Offer</b>
                            <button className='btn btn-primary'><Link to={"/saleBags"} style={{textDecoration: "none", color: "white"}}>Shop Now</Link></button>
                        </div>
                         <div className="offer3 flex-col ">
                            <p>Save up to 50%</p>
                            <b className='d-block'>Spetial Offer</b>
                            <button className='btn btn-primary'><Link to={"/saleShoes"} style={{textDecoration: "none", color: "white"}}>Shop Now</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Header


