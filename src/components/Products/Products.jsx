import  './Products.css'
import React, { useContext } from "react";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { displaycontext } from '../../context/DisplayContext';
import Product from '../../common/Product' ;



export default function Products(){

    const {mainStore , isLoading , mainStoreError} = useContext(displaycontext)

    return(
        <>
        <div className="Products container my-5">
            <p className='h1 text-center  mb-5' style={{color: 'var(--secondry-color'}}>Products</p>
            <div className="row">
                { 
                isLoading?
                 <LottiHandeler status={'main'}/>
                :
                mainStoreError?
                 <LottiHandeler status={'error'}/>
                :
                mainStore.map((value , index)=>{
                    return < Product value={value} key={index}/>
                })}
           
            </div>
        </div>
        
        </>
    )
}