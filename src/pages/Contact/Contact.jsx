import './Contact.css'
import React from "react";
import { MdMyLocation } from "react-icons/md";
import { FaRegMessage } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";


export default function Contact(){



    return(
        <>
        <div className="Contact">
            <div className="container my-5 w-100">
                <div className="row">
                    <div className="col-lg-8">
                        <form action="" className='flex-col gap-3 border-2'>
                            <input type="text" id="Name" placeholder='Name'/>
                            <input type="email" name="" id="mail" placeholder='E-mail' />
                            <input type="text" name="" id="Subject" placeholder='Subject'/>
                            <textarea name="" id="message" placeholder='message'></textarea>
                            <button className='btn btn-info '>Send Message</button>
                        </form>
                    </div>
                    <div className="col-lg-4"> 
                        <div className='bg-white map'>     
                       <iframe className='p-4'
                         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27453.08424795764!2d31.566209391817463!3d30.672390125210306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.             1!3m3!1m2!1s0x14f7f52373e67c9d%3A0x453a60c07ffe674!2sHihya%2C%20Hehya%2C%20Hihya%2C%20Al-Sharqia%20Governorate!5e0!3m2!1sen!2seg!4v1754168651433!5m2!1sen!2seg" 
                         width="350"
                         height="250"
                         style={{ border: 0 }}
                         allowFullScreen=""
                         loading="lazy"
                         referrerPolicy="no-referrer-when-downgrade" >               
                         </iframe>
                        </div>  
                        <div className='contac my-3 p-3 '>
                            <div className='location '>
                                <MdMyLocation  style={{color: 'var(--main-color)'}}/>
                                <b>Egypt - Sharkia - Zagazig</b>
                            </div>
                            <div className='message '>
                                <FaRegMessage  style={{color: 'var(--main-color)'}}/>
                                <b>mennaelbadry21@gmail.com</b>
                            </div>
                            <div className='phone '>
                                <FaPhoneAlt  style={{color: 'var(--main-color)'}}/>
                                <b>0120011001100</b>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <div>
           
</div>
        
        </>
    )
}