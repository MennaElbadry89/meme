import { useContext , useState } from "react";
import { createContext } from "react";
import { authContext } from './AuthContext';
import { cartContext } from './CartContext';
import axios from "axios";


export const placeOrderContext = createContext()

export const PlaceOrderContextProvider = ({children}) =>{

    const {records , cartIdes} = useContext(cartContext)
    const {currentUser } = useContext(authContext)

    const [orderList , setOrderList] = useState({
        userId : null ,
        items : [] ,
        subTotal : null
    })

    const items = records.map((value)=>({
        ...value , 
        amount : cartIdes[value.id]
    })
    )


    const placeOrder = async(total)=>{
    console.log('userId' , currentUser.id)
    console.log('cartData' , items)
    console.log('subTotal' , total)

    try {
        await axios.post('http://localhost:3003/orders' , {
            userId : currentUser.id , 
            items ,
            total
        })
        return {success : true}
    } catch (error) {
        return {success : false , message : error.message}        
    }
    }

    return <placeOrderContext.Provider value={{
        placeOrder,
    }}>
        {children}
    </placeOrderContext.Provider>
}