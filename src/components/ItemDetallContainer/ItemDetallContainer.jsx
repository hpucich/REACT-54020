import { useState,useEffect } from "react"
import getProducts from "../../data/getProducts"
import ItemDetall from "./ItemDetall"
import { useParams } from "react-router-dom"
const ItemDetallContainer = () => {
    const[product,setProduct]=useState({})  //lo inicializamnos con objeto vacio {}

    const {idProduct }=useParams()
    
      
    useEffect(()=>{
        getProducts
        .then((respuesta)=>{
            const newProduct= respuesta.find((product)=>product.id ===idProduct)
            setProduct(newProduct)
        })
        .catch((error)=>console.log(error))
      
      
      
      },[])
      
      


  return (
    <div>
        <ItemDetall product={product}/>

    </div>
    
    
    
    
  )
}

export default ItemDetallContainer