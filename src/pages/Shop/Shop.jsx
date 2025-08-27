import './Shop.css'
import LottiHandeler from '../../assets/Lottifiles/LottiHandeler';
import React, { use, useContext, useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { displaycontext } from '../../context/DisplayContext';
import Product from '../../common/Product' ;
import ReactPaginate from 'react-paginate';
import { TbPlayerTrackPrevFilled } from "react-icons/tb";
import { TbPlayerTrackNextFilled } from "react-icons/tb";

import { useRef } from 'react';

export default function Shop(){
    const row = useRef()

    const { mainStore, isLoading , mainStoreError } = useContext(displaycontext)

    const[slicedArry, setSlicedArray] = useState([])
    const productsPerPage = 8

    const handlePagination = (currentPage)=>{
        let lastIndex = currentPage * productsPerPage
        let firstIndex = lastIndex - productsPerPage
        setSlicedArray(mainStore.slice(firstIndex , lastIndex ))
    }

    useEffect(()=>{
        handlePagination(1)

    }, [])
    
    const handlePageClick = (data)=>{
        let selectedPage = data.selected + 1
        handlePagination(selectedPage)   
    }

    return(
        <>
        <div className="Products container my-5">
            <p className='h1 text-center  mb-5' style={{color: 'var(--secondry-color'}}>Products</p>
            <div className="row" style={{transition: "1s"}}  ref={row}>
                { isLoading?
                 <LottiHandeler status={'main'}/>
                 :
                 mainStoreError?
                 <LottiHandeler status={'error'}/>
                 :
                slicedArry.map((value , index)=>{
                    return < Product value={value} key={index}/>
                })}
            
            </div>
            <div className='my-5 mx-auto'style={{width: "max-content"}}>
                <ReactPaginate
                containerClassName='pagination'
                pageClassName='page-item'
                nextPageLinkClassName='page-link'
                nextPageClassName='page-item'
                previousPageLinkClassName='page-link'
                previousPageClassName='page-item'
                breakPageLinkClassName='page-link'
                breakPageClassName='page-item'
                pageLinkClassName='page-link'
                activeClassName='active'
                breakLabel="..."
                nextLabel={ <TbPlayerTrackNextFilled  style={{display : "flex", alignItems : "center" , justifyContent : "center", margin : "5px", fontSize : "26px"}}/> } 
                onPageChange={handlePageClick}
                pageRangeDisplayed={Math.ceil(mainStore.length / productsPerPage)}
                pageCount={7}
                previousLabel= {<TbPlayerTrackPrevFilled  style={{display : "flex", alignItems : "center" , justifyContent : "center" , margin : "5px" , fontSize : "26px"}}/>}
                renderOnZeroPageCount={null}
                />
            </div>
        </div>
        
        </>
    )
}