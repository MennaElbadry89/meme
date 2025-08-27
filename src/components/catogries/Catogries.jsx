import  './Catogries.css'
import React from "react";
import img1 from '../../../public/imag/7.jpg'
import img2 from '../../../public/imag/44.jpg'
import img3 from '../../../public/imag/30.jpg'
import img4 from '../../../public/imag/17.jpg'
import img5 from '../../../public/imag/5.jpg'
import img6 from '../../../public/imag/20.jpg'
import img7 from '../../../public/imag/38.jpg'
import img8 from '../../../public/imag/35.jpg'


export default function Catogries(){



    return(
        <>
        <div className="Catogries">
            <div className="container g-1">
                <p className='text-center h1 mb-5' style={{color: "var(--secondry-color"}}>Catogries</p>
                <div className="row g-2">
                    <div className="col-lg-3 col-md-6">
                        <div className="card d-flex flex-row">
                            <img src={img1}  style={{width: '100px', height: "100px"}} />
                            <div className="card-body">
                                <b>Catogry Name</b>
                                <p>100 Products</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="card d-flex flex-row">
                            <img src={img8} style={{width: '100px', height: "100px"}} />
                            <div className="card-body">
                                <b>Catogry Name</b>
                                <p>100 Products</p>
                            </div>
                        </div>                        
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="card d-flex flex-row">
                            <img src={img3} style={{width: '100px', height: "100px"}} />
                            <div className="card-body">
                                <b>Catogry Name</b>
                                <p>100 Products</p>
                            </div>
                       </div>                        
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="card d-flex flex-row">
                            <img src={img4} style={{width: '100px', height: "100px"}} />
                            <div className="card-body">
                                <b>Catogry Name</b>
                                <p>100 Products</p>
                            </div>
                        </div>                        
                    </div>
                </div>
                <div className="row g-2">
                    <div className="col-lg-3 col-md-6">
                        <div className="card d-flex flex-row">
                            <img src={img6}  style={{width: '100px', height: "100px"}} />
                            <div className="card-body">
                                <b>Catogry Name</b>
                                <p>100 Products</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="card d-flex flex-row">
                            <img src={img4}  style={{width: '100px', height: "100px"}} />
                            <div className="card-body">
                                <b>Catogry Name</b>
                                <p>100 Products</p>
                            </div>
                        </div>                        
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="card d-flex flex-row">
                            <img src={img7} style={{width: '100px', height: "100px"}} />
                            <div className="card-body">
                                <b>Catogry Name</b>
                                <p>100 Products</p>
                            </div>
                       </div>                        
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="card d-flex flex-row">
                            <img src={img8} style={{width: '100px', height: "100px"}} />
                            <div className="card-body">
                                <b>Catogry Name</b>
                                <p>100 Products</p>
                            </div>
                        </div>                        
                    </div>
                </div>
                <div className="row g-2">
                    <div className="col-lg-3 col-md-6">
                        <div className="card d-flex flex-row">
                            <img src={img5} style={{width: '100px', height: "100px"}} />
                            <div className="card-body">
                                <b>Catogry Name</b>
                                <p>100 Products</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="card d-flex flex-row">
                            <img src={img2} style={{width: '100px', height: "100px"}} />
                            <div className="card-body">
                                <b>Catogry Name</b>
                                <p>100 Products</p>
                            </div>
                        </div>                        
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="card d-flex flex-row">
                            <img src={img8} style={{width: '100px', height: "100px"}} />
                            <div className="card-body">
                                <b>Catogry Name</b>
                                <p>100 Products</p>
                            </div>
                       </div>                        
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="card d-flex flex-row">
                            <img src={img1} style={{width: '100px', height: "100px"}} />
                            <div className="card-body">
                                <b>Catogry Name</b>
                                <p>100 Products</p>
                            </div>
                        </div>                        
                    </div>
                </div>
                {/* <div className="row g-2">
                    <div className="col-lg-3 col-md-6">
                        <div className="card d-flex flex-row">
                            <img src={img1} card-img style={{width: '100px', height: "100px"}} />
                            <div className="card-body">
                                <b>Catogry Name</b>
                                <p>100 Products</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="card d-flex flex-row">
                            <img src={img4} card-img style={{width: '100px', height: "100px"}} />
                            <div className="card-body">
                                <b>Catogry Name</b>
                                <p>100 Products</p>
                            </div>
                        </div>                        
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="card d-flex flex-row">
                            <img src={img8} card-img style={{width: '100px', height: "100px"}} />
                            <div className="card-body">
                                <b>Catogry Name</b>
                                <p>100 Products</p>
                            </div>
                       </div>                        
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="card d-flex flex-row">
                            <img src={img5} card-img style={{width: '100px', height: "100px"}} />
                            <div className="card-body">
                                <b>Catogry Name</b>
                                <p>100 Products</p>
                            </div>
                        </div>                        
                    </div>
                </div> */}


            </div>
        </div>
        
        </>
    )
}