import React, { useState,useEffect } from 'react'
import ItemList from './ItemList'
//import "./NavBar/navbar.css"
import getProducts from '../../data/getProducts'
import { useParams } from 'react-router-dom'
const ItemListContainer = ({saludo,nombre}) => {
 /*
  const condicion=false
  const promesa= new  Promise((resolve,reject)=>{
    setTimeout(()=>{
      if(condicion){
        resolve("se resolvio")
      } else {
        reject("No se resolvio")
      }  



    },2000)

    
  
  } );
  
  promesa
    .then((respuesta)=>console.log(respuesta))
    .catch((error)=> console.log(error))
    .finally(()=>console.log("Finalizo la pormesa"))
*/
  

const [products,setProducts]=useState([]) //[] array vacio
const {idCategoria} =useParams()






useEffect(()=>{
  getProducts
  .then((respuesta)=>{
    if(idCategoria){
        const newProductS=respuesta.filter((producto)=>producto.categoria===idCategoria)
        setProducts(newProductS);
        //filtra por productos

    } else {
       //devuelve toda la lista 
       setProducts(respuesta)
    }
  })
  
  
  //)
  .catch((error)=> console.log(error))
  .finally(()=>console.log("Finalizo la pormesa"))



},[idCategoria])





 return (
   <>
    <div className='texto'>{saludo} {nombre}</div>
    <ItemList products={products}/>
    

   </>
   
  )
}

export default ItemListContainer