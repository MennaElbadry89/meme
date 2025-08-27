import './Clothes.css'
import React, { useContext } from "react";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { displaycontext } from '../../context/DisplayContext';
import Product from '../../common/Product' ;
import LottiHandeler from '../../assets/Lottifiles/LottiHandeler';


export default function Clothes(){

    const {clothesStore, isLoadingClothes,  clothesError } = useContext(displaycontext)

    return(
        <>
        <div className="Products container my-5">
            <p className='h1 text-center  mb-5' style={{color: 'var(--secondry-color'}}> Clothes Products</p>
            <div className="row">
                { 
                isLoadingClothes?
                 <LottiHandeler status={'main'}/>
                :
                clothesError?
                 <LottiHandeler status={'error'}/>
                :
                clothesStore.map((value , index)=>{
                    return < Product value={value} key={index}/>
                })}

            </div>
        </div>
        
        </>
    )
}