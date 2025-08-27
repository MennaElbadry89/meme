import  './auth.css'
import React, { useState } from "react";
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import RegisterSchema from '../../validations/Register';
import { useContext } from 'react';
import { authContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';


export default function Regiser(){
const { registerHandler  , isLoading} = useContext(authContext)

const navigate = useNavigate()
const [errorFirebase , setErrorFirebase] = useState(null)

const {register , handleSubmit ,  formState: { errors , isDirty , isValid}} = useForm({

        resolver : zodResolver( RegisterSchema),
        mode : 'all'
})

const RegisterSubmitHandler = async(data)=>{
    const response = await registerHandler(data)
    if(response.success){
        navigate('/profile')
    }else{
        setErrorFirebase(response.message)
    }

}
    return(
        <>
        <div className="auth container">
            <p className='text-center my-5 h1'><span style={{color: 'var(--secondry-color)'}}>Regiser </span>Now</p>
            <div className="row">
                <div className="col-8 offset-2">

                  <form onSubmit={handleSubmit(RegisterSubmitHandler)} className='my-2 mx-3 border border-2 rounded '>
                       <p className='h3 text-center my-2' style={{color: 'var(--secondry-color)'}}>Register</p>
                    <div className="mx-3 my-2">
                           <label htmlFor="firstName" className="form-label">First Name</label>
                           <input 
                                 className={`form-control ${errors.firstName ? 'is invalid ' : ""}`}
                                 { ...register('firstName')}
                                 type="text"  id="firstName"/>
                           {errors.firstName && <div className='invalid-feedback'>{errors.firstName?.message} </div>}
                       </div>
                    <div className="mx-3 my-2">
                           <label htmlFor="lastName" className="form-label">Last Name</label>
                           <input 
                                 className={`form-control ${errors.lastName ? 'is invalid ' : ""}`}
                                 { ...register('lastName')}
                                 type="text" id="lastName"/>
                          {errors.lastName && <div className='invalid-feedback'>{errors.lastName?.message} </div>}
  
                       </div>
                       <div className="mx-3 my-2">
                           <label htmlFor="Email" className="form-label">E-mail</label>
                           <input 
                                  className={`form-control ${errors.email ? 'is invalid ' : ""}`}
                                  { ...register('email')}
                                  type="email"  id="Email"/>
                           {errors.email && <div className='invalid-feedback'>{errors.email?.message} </div>}

                       </div>
                       <div className="mx-3 my-2">
                           <label htmlFor="phone" className="form-label">Phone</label>
                           <input 
                                  className={`form-control ${errors.phone ? 'is invalid ' : ""}`}
                                  { ...register('phone')}
                                  type="number" id="phone"/>
                           {errors.phone && <div className='invalid-feedback'>{errors.phone?.message} </div>}

                       </div>
                       <div className="mx-3 my-2">
                           <label htmlFor="password" className="form-label">Password</label>
                           <input 
                                  className={`form-control ${errors.password ? 'is invalid ' : ""}`}
                                  { ...register('password')}
                                  type="password"  id="password"/>
                            {errors.password && <div className='invalid-feedback'>{errors.password?.message} </div>}

                       </div>
                            <div className="mx-3 my-2">
                           <label htmlFor="confirmedpassword" className="form-label">Confirmed-Password</label>
                           <input 
                                  className={`form-control ${errors.confirmedpassword ? 'is invalid ' : ""}`}
                                  { ...register('confirmedpassword')}
                                  type="password" id="confirmedpassword"/>
                            {errors.confirmedpassword && <div className='invalid-feedback'>{errors.confirmedpassword?.message} </div>}

                       </div>

                       {errorFirebase && <div className='alert alert-danger'>{errorFirebase}</div>}
                     <button 
                        disabled={!isDirty || !isValid || isLoading} 
                        type="submit" className="btn btn-info mx-3 mt-2">                       
                        {
                            isLoading ?
                            <div>
                            <div className='spinner border text-light 'style={{width : '15px' , height: '15px'}} ></div>
                             <span className='ms-2 '>Loading</span>
                             </div>
                             :
                             'Submit'
                        }
                        </button>
                 </form>
                </div>
            </div>
          
        </div>
        
        </>
    )
}