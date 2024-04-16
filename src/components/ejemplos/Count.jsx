//import React from 'react'
const Count = ({contador,sumar,reset}) => {
  return (
   <div>
    <p id="lcontador"> Contador: {contador}</p>
    <button onClick={sumar}>+</button>
    <button onClick={reset}>Reset</button>
   </div>
  )
}

export default Count