//import React from 'react'
import { useState,useEffect } from "react"
import Count from "./Count"

const UseEfectyFetch = () => {
 
 const [contador, setContador] = useState(1)
 const [toggle,setToggle]=useState(true);
 
 console.log("Se actualizo el componente",contador)

 const fetchApi=()=>{
  fetch("https://fakestoreapi.com/products")
  .then((res)=> res.json())

  /*
  o
  .then((res)=>{
    return res.json()
  })

  */
  .then((data)=>console.log(data));
}


// con use Effect y [] 'array de dependencia' la funcion se ejecuta al inicio solamente

 useEffect( ()=>{ 
  fetchApi()


},[])








 const sumar=()=>{
  setContador(contador+1)
  //document.getElementById("lcontador").innerHTML=contador
  //console.log("Cantidades",contador)
 }

 const  reset=()=>{
  setContador(1)
  
 }

 const cambiarValorToggle=()=>{
  setToggle(toggle?false:true);
  /*
    setToggle(!toggle);
  */
 }
  return (
    <div>
    <Count contador={contador} sumar={sumar} reset={reset}/>
    <p>Valro del Toggle: {toggle.toString()}</p>
    <button onClick={cambiarValorToggle}>Cambiar valor Toggle</button>
    </div>
  )
}

export default UseEfectyFetch