//import React from 'react'
import { useState } from "react"
import Count from "./Count"

const CountController = () => {
 
 const [contador, setContador] = useState(1)
 
 const sumar=()=>{
  setContador(contador+1)
  //document.getElementById("lcontador").innerHTML=contador
  //console.log("Cantidades",contador)
 }

 const  reset=()=>{
  setContador(1)
 }

  return (
    <Count contador={contador} sumar={sumar} reset={reset}/>
  )
}

export default CountController