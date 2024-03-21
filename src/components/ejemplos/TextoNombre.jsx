//import React from 'react'
import { useState } from "react"

const TextoNombre = () => {
 

  const aMayuscula=()=>{
   const [Tnombre, setTnombre] = useState("")

    console.log(setTnombre)


 }

  return (
   <div>
    <span>Cual es tu nombre:</span>
    <input type='text' onBlur={aMayuscula(this)}></input>
   </div>

  )
}

export default TextoNombre