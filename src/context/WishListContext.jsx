import axios from "axios"
import { createContext , useContext, useEffect, useState } from "react"
import Swal from "sweetalert2"
import { json } from "zod"
import Product from "../common/Product"
import { cartContext } from "./CartContext"


export const wishListContext = createContext()


export const WishListContextProvider = ({children})=>{

    // const {records} = useContext(cartContext)
    const [wishListItems , setwishListItems] = useState([])
    
    // localStorage.clear()

    // useEffect(()=>{
    //     let x = localStorage.getItem('wishListItems')
    //     if(x){
    //         setwishListItems(JSON.parse(x))
    //     }else{
    //         setwishListItems([])
    //     }

    // }, [])
    
     useEffect(()=>{
        let x = localStorage.getItem('wishListItems')
        if(x){
            try {
                const parsed =JSON.parse(x)
                if(Array.isArray(parsed)){
                    setwishListItems(parsed)
                }else{
                    setwishListItems([])
                }
            } catch (error) {
            setwishListItems([])                
            }
        }
    }, [])

    useEffect(()=>{
        localStorage.setItem('wishListItems', JSON.stringify(wishListItems))
    },[wishListItems])


    const addToWishList = (product, isAuthenticated = false )=>{
        // Check if user is authenticated
        // if (!isAuthenticated) {
        //     return { success: false, needsAuth: true, message: "Please login or register to add items to wishlist" }
        // }  
       
        const x = wishListItems.some(item => item.id === product.id)

        if(!x && product.stock === 0){
        setwishListItems([...wishListItems, product])
        // return { success: true, needsAuth: false } 
        // }else {
        // return { success: false, needsAuth: false, message: "Already in wishlist" };
    }
    }


    const handelDelete = (Product)=>{
        Swal.fire({
        title: "Are you sure to delete items from wishList",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "red",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
        }).then((result) => {
        if (result.isConfirmed) {
        delete wishListItems[ Product]
        const newFilteredArry = wishListItems.filter(el => el !== Product)
        setwishListItems(newFilteredArry)
        Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success" ,
        timer: 1500
    });
  }
});
}

    const clearWishListData = ()=>{
        setwishListItems([])
    }

    useEffect(()=>{
        localStorage.setItem('wishListItems' , JSON.stringify(wishListItems))
    }, [wishListItems ])


    return <wishListContext.Provider value={{
        wishListItems ,
        addToWishList ,
        handelDelete ,
        clearWishListData
    }} >

        {children}

        </wishListContext.Provider>


}