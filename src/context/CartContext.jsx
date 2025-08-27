import axios from "axios"
import { createContext , useEffect, useState } from "react"
import Swal from "sweetalert2"
import { json } from "zod"

export const cartContext = createContext()


export const CartContextProvider = ({children})=>{

    const [cartIdes , setCartIdes] = useState({})
    const [records , setRecoeds] = useState([])
    const [isLoadingRecords , setIsLoadingRecords] = useState(false)
    const [errorRecords , setErrorRecords] = useState(null)

    // localStorage.clear()

    useEffect(()=>{
        let x = localStorage.getItem('cartIdes')
        if(x){
            setCartIdes(JSON.parse(x))
        }else{
            setCartIdes({})
        }

    }, [])
    const addToCart = (id, isAuthenticated = false)=>{
        // Check if user is authenticated
        if (!isAuthenticated) {
            return { success: false, needsAuth: true, message: "Please login or register to add items to cart" }
        }
        
        if( !cartIdes[id]){
            cartIdes[id] = 1
        }else{
            ++cartIdes[id]
        }
        setCartIdes({...cartIdes})
        return { success: true, needsAuth: false }
          
    }

    const getProductOfCart = async()=>{
        const allIdes = Object.keys(cartIdes)
        console.log(allIdes)
        const concatenatedIdes = allIdes.map(id => `id=${id}`).join('&')
        console.log(concatenatedIdes)
        try {
            setIsLoadingRecords(true)
            if(allIdes.length > 0){
                const {data} = await axios.get(`http://localhost:3003/Products?${concatenatedIdes}`)
                setRecoeds(data)
                console.log(data)
            }
        } catch (error) {
            setErrorRecords(error.message)
            
        }finally{
            setIsLoadingRecords(false)
        }
    }

    const handlechangeAmount = (id , amount)=>{
        console.log(id , amount)
        cartIdes[id ] = +amount       //+ to convert string into number
        setRecoeds([...records])

}

    const handelDelete = (Product, isAuthenticated = false)=>{
        // Check if user is authenticated
        if (!isAuthenticated) {
            return { success: false, needsAuth: true, message: "Please login or register to modify cart" }
        }
        Swal.fire({
        title: "Are you sure to delete items from cart",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "red",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
        }).then((result) => {
        if (result.isConfirmed) {
        delete cartIdes[ Product.id ]
        const newFilteredArry = records.filter(el => el.id !== Product.id)
        setRecoeds(newFilteredArry)
        Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success" ,
        timer: 1500
    });
  }
});
        return { success: true, needsAuth: false }

}

    const clearCartData = ()=>{
        setCartIdes({})
        setRecoeds([])
    }

    useEffect(()=>{
        localStorage.setItem('cartIdes' , JSON.stringify(cartIdes))

    }, [cartIdes , records])


    return <cartContext.Provider value={{
        cartIdes ,
        records,
        isLoadingRecords,
        errorRecords,
        addToCart ,
        getProductOfCart ,
        handlechangeAmount ,
        handelDelete ,
        clearCartData
    }} >

        {children}

        </cartContext.Provider>


}