import React, { useState,useEffect } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { collection,getDocs,query,where } from 'firebase/firestore'
import db from "../../db/db"

const ItemListContainer = ({saludo,nombre}) => {
 

const [products,setProducts]=useState([]) 
const [loading,setLoading]=useState(false)

const {idCategoria} =useParams()

const getProducts= async()=>{
    const datadb=await getDocs(collection(db,"products"));
    const data=datadb.docs.map((productDb) =>{
        return{
            id:productDb.id,...productDb.data()}
    })
    setProducts(data);
}

const getProductsByCategory=async()=>{
    const q=query(collection(db,"products"), where("categoria","==",idCategoria));
    const datadb=await getDocs(q);
    const data=datadb.docs.map((productDb) =>{
        return{
            id:productDb.id,...productDb.data()}
    })
    setProducts(data);


}



useEffect(()=>{
    if(idCategoria){
        getProductsByCategory();
    }else{
        getProducts()
    }


  
  

},[idCategoria])





 return (
   <>
    <div className='texto'>{saludo} {nombre}</div>
    
    {
        loading ?<div>Cargando...</div>:<ItemList products={products}/>
    }
    
    
    

   </>
   
  )
}

export default ItemListContainer