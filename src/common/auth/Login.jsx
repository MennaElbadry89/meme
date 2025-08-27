import  './auth.css'
import React, { useState } from "react";
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import LoginSchema from '../../validations/Login';
import { useContext } from 'react';
import { authContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';


export default function Login(){
const { loginHandler  , isLoading} = useContext(authContext)

const navigate = useNavigate()
const [errorFirebase , setErrorFirebase] = useState(null)

const {register , handleSubmit ,  formState: { errors , isDirty , isValid}} = useForm({

        resolver : zodResolver( LoginSchema),
        mode : 'all'
})

const LoginSubmitHandler = async(data)=>{
    const response = await loginHandler(data)
    if(response.success){
        navigate('/profile')
    }else{
        setErrorFirebase(response.message)
    }

}
    return(
        <>
        <div className="auth container mb-5">
            <p className='text-center my-5 h1'><span style={{color: 'var(--secondry-color)'}}>Login </span>Now</p>
            <div className="row">
                <div className="col-8 offset-2">

                  <form onSubmit={handleSubmit(LoginSubmitHandler)} className='my-2 mx-3 border border-2 rounded '>
                       <p className='h3 text-center my-2' style={{color: 'var(--secondry-color)'}}>Login</p>
                 
                       <div className="mx-3 my-2">
                           <label htmlFor="Email" className="form-label">E-mail</label>
                           <input 
                                  className={`form-control ${errors.email ? 'is invalid ' : ""}`}
                                  { ...register('email')}
                                  type="email"  id="Email"/>
                           {errors.email && <div className='invalid-feedback'>{errors.email?.message} </div>}

                       </div>
  
                       <div className="mx-3 my-2">
                           <label htmlFor="password" className="form-label">Password</label>
                           <input 
                                  className={`form-control ${errors.password ? 'is invalid ' : ""}`}
                                  { ...register('password')}
                                  type="password"  id="password"/>
                            {errors.password && <div className='invalid-feedback'>{errors.password?.message} </div>}
                       </div>

                       {errorFirebase && <div className='alert alert-danger'>{errorFirebase}</div>}
                     <button 
                        disabled={!isDirty || !isValid || isLoading} 
                        type="submit" className="btn btn-info mx-3 m-2">                       
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