import { createContext , useContext, useEffect, useState } from "react"
import Swal from "sweetalert2"
import { cartContext } from "./CartContext"
import {authContext} from "./AuthContext"


export const wishListContext = createContext()


export const WishListContextProvider = ({children})=>{
    const {currentUser } = useContext(authContext)

    const { cartIdes } = useContext(cartContext)
    const cartItems = Array.isArray(cartIdes) ? cartIdes : [];

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

    
    const addToWishList = (product) => {
  if (!currentUser) {
    return { success: false, message: "Please login first" };
  }

  const isInWishList = wishListItems.some(item => item.id === product.id);
  const isInCart = cartItems.some(item => item.id === product.id);

  if (isInCart) {
    return { success: false, message: "Product already in cart" };
  }

  if (isInWishList) {
    return { success: false, message: "Product already in wishlist" };
  }

  setwishListItems([...wishListItems, product]);
  return { success: true, message: "Product added to wishlist" };
};



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