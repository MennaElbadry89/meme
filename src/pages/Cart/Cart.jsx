import  './Cart.css'
import React, { useEffect , useState , useRef} from "react";
import { useContext } from 'react';
import { cartContext } from '../../context/CartContext';
import LottiHandeler from '../../assets/Lottifiles/LottiHandeler';
import { auth } from '../../firebase/firebase';
import { placeOrderContext } from '../../context/PlaceOrderContext';
import {authContext} from '../../context/AuthContext'
import Swal from 'sweetalert2'
import { Link, useNavigate } from 'react-router-dom';


export default function Cart(){

  const navigate = useNavigate()
    const closeModal = useRef()

    const {currentUser, loadingDisplayCurrentUser} = useContext(authContext)
    const {placeOrder} = useContext(placeOrderContext)

    const[isLoading , setIsLoading] = useState(false)
    const[errorPlacingOrder , setErrorPlacingOrder] = useState(false)


    const { cartIdes , records, isLoadingRecords, 
            errorRecords , getProductOfCart , handlechangeAmount ,
            handelDelete , clearCartData } = useContext(cartContext)
          console.log(cartIdes)
          console.log(records)
          
    const productFullInfo = records.map(val =>({
            ...val ,
            amount : cartIdes[val.id]
          }))

    const totalCart = productFullInfo.reduce((a , b)=>{
            const finalPrice = b.price - (b.price * b.discount / 100)
            return a + (finalPrice * b.amount)
          }, 0)

        const placeOrderHandler = async(total)=>{
            setIsLoading(true)
            const res = await placeOrder(total)
            if(res.success){
              clearCartData()
              closeModal.current.click()
            }else{
              setErrorPlacingOrder(res.message)
            }
            setIsLoading(false)
        }

        
        useEffect(()=>{
          getProductOfCart()
          
          }, [])

          useEffect(() => {
            if (!currentUser && !loadingDisplayCurrentUser) {
                Swal.fire({
                    title: "Authentication Required",
                    text: "Please login or register to view your cart",
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
        <div className="Cart">
            <p className='my-5 h1 text-center'>Your <span style={{color: 'var(--secondry-color)'}}>Cart</span> </p>
            <div className="container my-3">
                {
                    isLoadingRecords ?
                    <LottiHandeler status={"page"} />
                    :
                    records.legnth == 0 ?
                    <div>
                        <p>there is no products here</p>
                        <Link to={'shop'}>what about going to Shop</Link>
                    </div>
                    :    
            <div className="row gap-1 ">
                {
                   productFullInfo.map((val, index)=>{
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
                    <div className='flex gap-5'>
                        <p className='m-0 text-dark'>Price : ${val.price}</p>
                        <p className='m-0 text-dark'>TotalPrice : ${(val.price * val.amount).toFixed(2)}</p>
                    </div>
                    <div>
                    <select onChange={e=>handlechangeAmount(val.id , e.target.value)}
                    value={val.amount} className="form-select" aria-label="Default select example">
                      { options }
                    </select>
                    </div>
                    <div>
                        <button onClick={()=>handelDelete(val)} className='btn btn-danger'>Remove </button>
                    </div>                    
                </div>
                    })
                }
               
                <div className="col-8 offset-2 bg-white rounded my-2 py-2 shadow ">
                     <div className='flex flex justify-content-around '>
                        <p className='h5 text-primary'>Total : </p>
                        <p className='h5 text-primary'>${totalCart.toFixed(2)}</p>
                     </div>
                </div> 
                {  currentUser &&  < div className='col-12 mt-3'>
                        <button className='btn btn-dark'
                        data-bs-toggle="modal" data-bs-target="#exampleModal2">Place Order</button>
                        </div> }
            </div>
}
            </div>
            { errorRecords && <div  classNameName='alert alert-danger'> {errorRecords} </div> }
            { errorPlacingOrder && <div  className='alert alert-danger'> {errorPlacingOrder} </div> }
    </div>

  <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel"> Place Order</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        Are u sure to place orders ?
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" ref={closeModal}>Cancle</button>
        <button onClick={()=>{placeOrderHandler(totalCart)}} type="button" className="btn btn-info">
          {
            isLoading ?
             <div>
             <div className='spinner border text-light'style={{width : '15px' , height: '15px'}}></div>
             <span className='ms-2 '>  Loading</span>
             </div>
              :
             'Confirm'
          }
        </button>
      </div>
    </div>
  </div>
</div>
        
        </>
    )
}