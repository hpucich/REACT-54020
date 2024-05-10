import { useState,useEffect } from "react"
import {doc,getDoc} from "firebase/firestore"
import db from "../../db/db"
import ItemDetall from "./ItemDetall"
import { useParams } from "react-router-dom"
const ItemDetallContainer = () => {
    const[product,setProduct]=useState({})  //lo inicializamnos con objeto vacio {}

    const {idProduct }=useParams()
    
    const getProduct = async()=>{
        const docRef=doc(db,"products",idProduct)
        const dataDb=await getDoc(docRef)
        
        const data={id:dataDb.id, ...dataDb.data()}
        setProduct(data)
    }
      
    useEffect(()=>{
        getProduct()
      
      },[idProduct])
      
      


  return (
    <div>
        <ItemDetall product={product}/>

    </div>
    
    
    
    
  )
}

export default ItemDetallContainer