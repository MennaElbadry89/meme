import LottiHandeler from '../../assets/Lottifiles/LottiHandeler';
import { authContext } from '../../context/AuthContext';
import  './Profile.css'
import React, { useContext } from "react";
import { Navigate } from 'react-router-dom';

export default function Profile(){

        const {loadingDisplayCurrentUser, currentUser} = useContext(authContext)
        if( loadingDisplayCurrentUser){
            return <LottiHandeler  status={'page'} />
        }
        else if( !loadingDisplayCurrentUser && ! currentUser){
            return <Navigate to={'/login'}/>
        }
        else{
            return(
                <>
                <div className="Profile container mb-5">
                   <p className='text-center h2 my-5' >Your <span style={{color: 'var(--secondry-color)'}}>profile</span></p>
                   <p className='my-2 h5'>First Name : <span style={{color: 'var(--secondry-color)'}}>{currentUser?.firstName}</span></p>
                   <p className='my-2 h5'>Last Name : <span style={{color: 'var(--secondry-color)'}}>{currentUser?.lastName}</span></p>
                   <p className='my-2 h5'>E-mail : <span style={{color: 'var(--secondry-color)'}}>{currentUser?.email}</span></p>
                   <p className='my-2 h5'>Phone : <span style={{color: 'var(--secondry-color)'}}>{currentUser?.phone}</span></p>        
                </div>        
               </>
    )
}
    
}