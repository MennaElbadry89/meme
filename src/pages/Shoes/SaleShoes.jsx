import LottiHandeler from '../../assets/Lottifiles/LottiHandeler';
import './Shoes.css'
import React, { useContext } from "react";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { displaycontext } from '../../context/DisplayContext';
import Product from '../../common/Product' ;


export default function Shoes(){

    const {shoesStore , isLoadingShoes , shoesError} = useContext(displaycontext)
    const saleShoes = shoesStore.filter( x => x.discount > 0)


    return(
        <>
        <div className="Products container my-5">
            <p className='h1 text-center  mb-5' style={{color: 'var(--secondry-color'}}>Shoes Products (sale)</p>
            <div className="row">
                { 
                isLoadingShoes?
                 <LottiHandeler status={'main'}/>
                :
                shoesError?
                 <LottiHandeler status={'error'}/>
                :
                saleShoes.map((value , index)=>{
                    return < Product value={value} key={index}/>
                })}
           
            </div>
        </div>
        
        </>
    )
}