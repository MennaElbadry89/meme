import  './Wishlist.css'
import React, {  useState , useEffect} from "react";
import { useContext } from 'react';
import { wishListContext } from '../../context/WishListContext';
import LottiHandeler from '../../assets/Lottifiles/LottiHandeler';
import { authContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

export default function Wishlist(){

       const[isLoading , setIsLoading] = useState(false)   
       const navigate = useNavigate()
   
       const { wishListItems , handelDelete  } = useContext(wishListContext)    
       const {currentUser, loadingDisplayCurrentUser} = useContext(authContext)
       
 useEffect(() => {
            if (!currentUser && !loadingDisplayCurrentUser) {
                Swal.fire({
                    title: "Authentication Required",
                    text: "Please login or register to view your wishlist",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Register or Login",
                    cancelButtonText: "Cancel"
                }).then((result) => {
                    if (result.isConfirmed) {
                        navigate('/register');
                    } else {
                        navigate('/');
                    }
                });
            }
        }, [currentUser, loadingDisplayCurrentUser, navigate])
      
       return(
           <>
           <div className="Wishlist">
               <p className='my-5 h1 text-center'>Your <span style={{color: 'var(--secondry-color)'}}>Wishlist</span> </p>
               <div className="container my-3">
                   {
                       isLoading ?
                       <LottiHandeler status={"page"} />
                       :
                       wishListItems.legnth == 0?
                       <div>
                           <p>there is no products here</p>
                           <Link to={'/shop'}>what about going to Shop</Link>
                       </div>
                       :    
               <div className="row gap-1 ">
                   {
                      wishListItems.map((val, index)=>{
                       const options = Array(val.stock).fill(0).map((_,index)=>{
                           ++index
                           return <option value={index} key={index}>{index}</option>
                       })
                      return <div key={index} className="col-12 flex justify-content-around p-1 rounded bg-white shadow">
                       <div className="p-2 rounded">
                           <img src={val.image}  style={{width: '75px', height: '75px'}} alt="" />
                       </div>
                       <div>
                           <p className='text-dark'>Title : {val.catogery}</p>
                       </div>
                       <div>
                           <button onClick={()=>handelDelete(val)} className='btn btn-danger'>Remove </button>
                       </div>                    
                   </div>
                       })
                   }
               </div>
             }
            </div>
      </div>
   </>
       )
   }