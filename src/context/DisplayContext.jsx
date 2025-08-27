import { createContext , useEffect, useState } from "react";
import axios from 'axios'
import { FaLandmark } from "react-icons/fa";


export const displaycontext = createContext()
export const DisplayContextProvider = ({children})=>{

    const [mainStore , setMainStore] = useState([])
    const [isLoading , setIsLoading] = useState(false)
    const [mainStoreError , setMainStoreError] = useState(null)

    const [bagsStore , setBagsStore ] = useState([])
    const [isLoadingBags , setIsLoadingBags] = useState(false)
    const [bagsError , setBagsError] = useState(null)

    const [clothesStore , setClothesStore ] = useState([])
    const [isLoadingClothes , setIsLoadingClothes] = useState(false)
    const [clothesError , setClothesError] = useState(null)

    const [shoesStore , setShoesStore ] = useState([])
    const [isLoadingShoes , setIsLoadingShoes] = useState(false)
    const [shoesError , setShoesError] = useState(null)

    const getMainStoreData = async()=>{
        try {
        setIsLoading( true )
        const {data} = await axios.get('http://localhost:3003/Products')
        setMainStore(data)
        console.log(data) 
        setIsLoading( false )

        } catch ( error){
            setMainStoreError(error)
    }
    }
    
    const getBagsStoreData = async()=>{
        try {
        setIsLoadingBags( true )
        const {data} = await axios.get('http://localhost:3003/Products?catogery=Bags')
        setBagsStore(data)
        console.log(data) 
        setIsLoadingBags( false )

        } catch ( error){
            setBagsError(error)
    }

    }
       const getClothesStoreData = async()=>{
         try {
        setIsLoadingClothes( true )
        const {data} = await axios.get('http://localhost:3003/Products?catogery=Clothes')
        setClothesStore(data)
        console.log(data) 
        setIsLoadingClothes( false )

        } catch ( error){
            setClothesError(error)
    }

    }
        const getShoesStoreData = async()=>{
         try {
        setIsLoadingShoes( true )
        const {data} = await axios.get('http://localhost:3003/Products?catogery=Shoes')
        setShoesStore(data)
        console.log(data) 
        setIsLoadingShoes( false )

        } catch ( error){
            setShoesError(error)
    }
    }
    useEffect(()=>{
        getMainStoreData()
        getBagsStoreData()
        getClothesStoreData()
        getShoesStoreData()

    }, [])


    return <displaycontext.Provider value={{
        mainStore, isLoading , mainStoreError ,
        bagsStore, isLoadingBags , bagsError ,
        clothesStore, isLoadingClothes,  clothesError ,
        shoesStore , isLoadingShoes , shoesError

    }}>

        {children}

    </displaycontext.Provider>
}