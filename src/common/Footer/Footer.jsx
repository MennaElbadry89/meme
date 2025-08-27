
import visa from '../../../public/imag/visa.png' ;
import './Footer.css'
import React from "react";
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import {Link} from 'react-router-dom'


function Footer (){


    return(
         <div className='Footer'>
                    <div className="top container">
                        <div className="row mt-5">
            <div className='col-lg-3 col-12'>
                        <div className="intouch">
                            <b>Get In Touch</b>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. quod sapiente explicabo.</p>
                        </div>
            </div>
        
            <div className='col-lg-3 col-12'>
                  <div className="quick ">
                            <b>QUICK SHOP</b>
                            <ul>
                                <li> <Link to={'/'}>Home</Link></li>
                                 <li> <Link to={"about"}>About</Link></li>
                                 <li> <Link  to={"shop"}>Shop</Link></li>
                                 <li> <Link  to={"contact"}>Contact</Link></li>
                                 <li> <Link  to={"cart"}>Cart</Link></li>
                            </ul>
                        </div>        
            </div>
        
            <div className='col-lg-3 col-12'>
                    <div className="media">
                                    <b>Shop Media </b>
                                    <ul>
                                        <li ><Link to={"https://www.facebook.com/groups/659524205073014/?ref=share_group_link"}><TiSocialFacebook className='icon'/></Link></li>
                                        <li ><Link to={""}><FaTwitter className='icon'/></Link></li>
                                        <li ><Link to={""}><FaInstagram className='icon'/></Link></li>
                                        <li ><Link to={"https://www.linkedin.com/in/menna-elbadry21/"}><FaLinkedin className='icon'/></Link></li>
                                        <li ><Link to={"https://github.com/MennaElbadry89/"}><FaGithub className='icon'/></Link></li>
                                    </ul>
                                  </div>       
            </div>
                
            <div className='col-lg-3 col-12'>
                    <div className="NEWSLETTER">
                            <b>NEWSLETTER</b>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.facilis eligendi magni officia.</p>
                            <div className='mail d-flex btn-group'>
                                <input type="e-mail" placeholder='Enter your e-mail' />
                                <button className='btn btn-primary'>Submit</button>
                            </div>
                          </div>        
            </div>
          </div>
         </div>

            <hr className=' w-75 d-flex 'style={{color: 'gray', alignItems: "center", justifyContent: "center"}} />
            
            <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="bottom my-2 mx-5">
                    <p>copywrite@ <Link to={"https://www.linkedin.com/in/menna-elbadry21/"}>Menna Elbadry</Link> </p>
                    <img src={visa} alt="" />
                    </div>
                  </div>
                </div>
            </div>
        </div>
        // </div>

    )
}

export default Footer