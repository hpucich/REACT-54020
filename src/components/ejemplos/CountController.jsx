//import React from 'react'
import { useState,useEffect } from "react"
import Count from "./Count"
import Banner from "./Banner"

const CountController = () => {
 
 const [contador, setContador] = useState(1)
 const [toggle,setToggle]=useState(true);
let seVeelBanner=<Banner/> 

 //se ejecuta sola al montar el componente

 useEffect(()=>{
    console.log("1er useEffect");

 },[])

// se ejecuta en el montaje y cada ver que contador se actualice
useEffect( ()=>{
  console.log("2do useEffect")


},[contador])


// se ejecuta el montaje y cada vez que se actualice cualquier estado del componente (simpre)
useEffect( ()=>{
  console.log("3er useEffect")



})

 const sumar=()=>{
  setContador(contador+1)
  //document.getElementById("lcontador").innerHTML=contador
  //console.log("Cantidades",contador)
 }

 const  reset=()=>{
  setContador(1)
  
 }

 const cambiarValorToggle=()=>{
    setToggle(!toggle)

 }
 
 
  return (
    <div>
      <Count contador={contador} sumar={sumar} reset={reset}/>
      <div>
        <p>Valor del Toggle: {toggle.toString()}</p>
      <button onClick={cambiarValorToggle}>Cambiar valor Toggle</button>
        {
          toggle && <Banner/>
        }  
        </div>
      </div>
  )
  };

export default CountController