import  './Services.css'
import React from "react";
import { FaCheck } from "react-icons/fa";
import { RiTruckFill } from "react-icons/ri";


export default function Services(){



    return(
        <>
        <div className="Services">
            <div className="container">
                <div className="row w-100">
                    <div className="col-lg-3 col-md-6 my-md-2 text-dark my-lg-5 my-1 flex">
                        <div className='bg-white shadow'>
                            <FaCheck style={{color: 'var(--secondry-color)'}}/>
                            <span>    Quality Product</span>
                        </div>
                    </div>                   
                    <div className="col-lg-3 col-md-6 my-md-2 text-dark my-lg-5 my-1 flex">

                        <div className='bg-white shadow'>
                            <RiTruckFill style={{color: 'var(--secondry-color)'}}/>
                            <span>    Free Shipping</span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 my-md-2 text-dark my-lg-5 my-1 flex">

                        <div className='bg-white shadow'>
                            <FaCheck style={{color: 'var(--secondry-color)'}}/>
                            <span>    14-Day Return</span>
                         </div>
                    </div>
                    <div className="col-lg-3 col-md-6 my-md-2 text-dark my-lg-5 my-1 flex">

                        <div className='bg-white shadow'>
                            <RiTruckFill style={{color: 'var(--secondry-color)'}}/>
                            <span>    24/7 Support</span>
                        </div>
                    </div>

                    </div>
                </div>
            </div>

        
        </>
    )
}