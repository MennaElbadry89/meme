import './Shoes.css'
import LottiHandeler from '../../assets/Lottifiles/LottiHandeler';
import React, { useContext } from "react";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { displaycontext } from '../../context/DisplayContext';
import Product from '../../common/Product' ;


export default function Shoes(){

    const {shoesStore , isLoadingShoes , shoesError} = useContext(displaycontext)

    return(
        <>
        <div className="Products container my-5">
            <p className='h1 text-center  mb-5' style={{color: 'var(--secondry-color'}}>Shoes Products</p>
            <div className="row">
                { 
                isLoadingShoes?
                 <LottiHandeler status={'main'}/>
                :
                shoesError?
                 <LottiHandeler status={'error'}/>
                :
                shoesStore.map((value , index)=>{
                    return < Product value={value} key={index}/>
                })}
           
            </div>
        </div>
        
        </>
    )
}