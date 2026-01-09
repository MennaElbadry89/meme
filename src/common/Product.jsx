import { useContext, useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import Swal from 'sweetalert2'
import {cartContext } from "../context/CartContext";
import toast from "react-hot-toast";
import { wishListContext } from "../context/WishListContext";
import { authContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";



export default function Product({value}){

    const navigate = useNavigate()
    const { currentUser } = useContext(authContext)

    const {addToWishList} = useContext(wishListContext) 
    const{addToCart , cartIdes} = useContext(cartContext)
    console.log(cartIdes)
    
    const [isDisabledBtn , setIsDisabledBtn] = useState(false)

    const finalPrice = value.price - ((value.price * value.discount )/ 100)

    const productFullInfo = {
        ...value,
        amount : cartIdes[value.id] ? cartIdes[value.id] : 0
    }
 
    // const handleAddToCart = (product)=>{

    //     addToCart(product.id)
    //     setIsDisabledBtn(true)
    //     setTimeout(()=>{
    //       if(cartIdes[product.id] ===1){
    //        Swal.fire({
    //        title: "successfull operation",
    //        text: "click the button",
    //        icon: "success" ,
    //        timer: 1000 ,
    //        showConfirmButton: 'false'
    //      });
    //         }else{
    //             toast.success(`You have ${cartIdes[product.id]} of this product`)           
    //         }
    //     } , 1000)      
    // }
    
const handleAddToCart = (product)=>{
        // Check if user is authenticated
        if (!currentUser) {
            Swal.fire({
                title: "Authentication Required",
                text: "Please login or register to add items to cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Go to Register",
                cancelButtonText: "Cancel"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/register');
                }
            });
            return;
        }
        const result = addToCart(product.id, true);        
         if (result.success) {
            setIsDisabledBtn(true)
            setTimeout(()=>{
              if(cartIdes[product.id] === 1){
               Swal.fire({
               title: "successfull operation",
               text: "click the button",
               icon: "success" ,
               timer: 1500 ,
               showConfirmButton: 'false'
             });
                }else{
                    toast.success(`You have ${cartIdes[product.id]} of this product`)           
                }
            } , 1500)
        } else if (result.needsAuth) {
            Swal.fire({
                title: "Authentication Required",
                text: result.message,
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Go to Register",
                cancelButtonText: "Cancel"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/register');
                }
            });
        }
    }

const handleaddToWishList = (product)=>{
        // Check if user is authenticated
        if (!currentUser) {
            Swal.fire({
                title: "Authentication Required",
                text: "Please login or register to add items to WishList",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Go to Register",
                cancelButtonText: "Cancel"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/register');
                }
            });
            return;
        }
        const result = addToWishList(product, true);        
         if (result.success) {
            setIsDisabledBtn(true)
            setTimeout(()=>{
              if(product ){
               Swal.fire({
               title: "successfull operation",
               text: "click the button",
               icon: "success" ,
               timer: 1500 ,
               showConfirmButton: 'false'
               });
              }
            } , 1500)
        } else {if (result.needsAuth) {
            Swal.fire({
                title: "Authentication Required",
                text: result.message,
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Go to Register",
                cancelButtonText: "Cancel"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/register');
                }
            });
        }}
    }

    useEffect(()=>{
        if(!isDisabledBtn){
            return
        }
        setIsDisabledBtn(true)
        setTimeout(()=>{
            setIsDisabledBtn(false)
        }, 500)
    }, [isDisabledBtn])
    return(
        <>         
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="card border-2 shadow">
                        <div className="flex p-2" style={{overflow: 'hidden'}}>
                            <img className='w-100' src={productFullInfo.image} style={{height: '240px'}} alt="" />
                        </div>
                        <div className="card-body flex-column flex gap-1">
                            <b className='fs-4 d-block text-center opacity-50'> {productFullInfo.catogery}</b>
                            <p className='fw-bold m-0'style={{color: 'var(--main-color'} }> {finalPrice}$  
                                <del className='fw-bold text-danger m-0 opacity-50'>  {productFullInfo.discount}%</del></p>
                            
                            <div className="text-warning h5"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></div>
                            <div className="procces justify-content-between w-100 flex">
                                <button className="btn"  onClick={()=>handleaddToWishList(value)}>
                                    <FaHeart style={{color: 'var(--main-color', cursor: 'pointer'}}/>
                                </button>
                                <button className="btn"
                                  disabled= {productFullInfo.stock - productFullInfo.amount == 0 || isDisabledBtn}
                                 onClick={()=>handleAddToCart(productFullInfo)}>
                                    {
                                        isDisabledBtn ? 
                                        <div>
                                            <div className="spinner-border text-primary"></div>
                                        </div>
                                        :
                                     <FaShoppingCart style={{color: 'var(--main-color', cursor: 'pointer'}}/>

                                    }
                                </button >
                            </div>
                         </div>  
                      </div>
                    </div>

                     </>
    )}              