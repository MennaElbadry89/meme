import  './About.css'
import React from "react";
import { Link } from 'react-router-dom';
import img from '../../../public/imag/about.jpg'

export default function About(){



    return(
        <>
        <div className="About">
            <div className="container my-5">
                <p className='h2 mb-5 text-center' style={{color: "var(--secondry-color)"}}>About Us</p>
                <div className="row">
                    <div className="col-lg-5">
                        <img src={img} alt=""  style={{width: '450px', height: "300px"}}/>
                    </div>
                    <div className="col-lg-7">
                        <b className='h3 my-4'>Welcome To <span style={{color: "var(--secondry-color)"}}>Meme Store</span></b>
                        <p className='my-3 h5 opacity-75'><span style={{color: "var(--secondry-color)", fontWeight: '700'}}>Meme Store</span> is your best distination for online Shopping. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam expedita dolore omnis cumque ipsa vel nam non necessitatibus eius, molestiae officiis, rem et distinctio? Nisi voluptates amet in aliquam sapiente</p>
                        <button className='btn btn-primary text-dark border border-1'>
                            <Link to={'/shop'} style={{textDecoration : 'none'}}>Shop Now</Link></button>
                    </div>
                </div>
            </div>
        </div>
        
        </>
    )
}