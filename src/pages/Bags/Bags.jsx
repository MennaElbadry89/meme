import './Bags.css'
import React, { useContext } from "react";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { displaycontext } from '../../context/DisplayContext';
import Product from '../../common/Product' ;
import LottiHandeler from '../../assets/Lottifiles/LottiHandeler';


export default function Bags(){

    const { bagsStore, isLoadingBags , bagsError } = useContext(displaycontext)

    return(
        <>
        <div className="Products container my-5">
            <p className='h1 text-center  mb-5' style={{color: 'var(--secondry-color'}}>Bags Products</p>
            <div className="row">
                {
                 isLoadingBags ?
                 <LottiHandeler status={'main'}/>
                 :
                 bagsError?
                 <LottiHandeler status={'error'}/>
                 :
                bagsStore.map((value , index)=>{
                    return < Product value={value} key={index}/>
                })}
       
            </div>
        </div>
        
        </>
    )
}