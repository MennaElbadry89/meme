import { createContext, useEffect, useState } from "react";
import { signInWithEmailAndPassword, signOut} from 'firebase/auth'
import { createUserWithEmailAndPassword} from 'firebase/auth'
import { onAuthStateChanged} from 'firebase/auth'

import {auth , db} from '../firebase/firebase'
import { doc , setDoc , getDoc} from 'firebase/firestore'


export const authContext = createContext()

export const AuthContextProvider = ({children})=>{

        const [isLoading , setIsLoading] = useState(false)
        const [loadingDisplayCurrentUser , setLoadingDisplayCurrentUser] = useState(true)
        const [currentUser , setCurrentUser] = useState(null)
 
    const registerHandler = async(data)=>{ 
        
        const { firstName , lastName , phone , email , password} = data
        try {
            setIsLoading(true)
            const userdata = await createUserWithEmailAndPassword(auth , email , password)
            console.log('successful' )

            await setDoc(doc( db , 'users' , userdata.user.uid), {
            id : userdata.user.uid , 
            firstName , 
            lastName , 
            phone , 
            email , 
            createdAt : new Date()
        }) 
        console.log('successful firestore' )
        return { success : true}

        } catch (error) {            
        console.log(error.message)
        return { success : false , message : error.message}

        }finally{
            setIsLoading(false)
        }
    }

    const loginHandler = async(data) => {         
        const { email , password} = data
        try {
            setIsLoading(true)
            await signInWithEmailAndPassword(auth , email , password)
            setLoadingDisplayCurrentUser(true)
            console.log('successful' )
            return { success : true}

        } catch (error) {
            console.log(error.message)
            return { success : false , message : error.message}

        }finally{
            setIsLoading(false)
        }
    }

    const fetchUserData = async(uid)=>{
        const user = await getDoc( doc(db , 'users' , uid))
        if(user.exists()){
            setCurrentUser(user.data())
        }
    }

    const logout = async()=>{
        try {
            await signOut(auth)
            setCurrentUser(null)
        } catch (error) {
            console.log(error.message)            
        }
    }


    useEffect(()=>{
        const records = onAuthStateChanged(auth , async(user)=>{
            if(user){
              await fetchUserData(user.uid)
            } else{
                setCurrentUser(null)
            }
            setLoadingDisplayCurrentUser(false)
        })
        return ()=> records()

    } , [])


    return <authContext.Provider value={{
        registerHandler ,
        loginHandler ,
        logout ,
        isLoading,
        loadingDisplayCurrentUser,
        currentUser
    }}>
        {children}
    </authContext.Provider>
}