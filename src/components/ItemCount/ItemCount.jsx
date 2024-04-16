import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './ItemCount.css'

const ItemCount = ({addToCart}) => {
 const [count, setCount] = useState(1)
 const [saldoInicial,setSaldoInciai]=useState(5)

 const restar=()=>{
  if (count>1){
   setCount(count-1)
  }
 }

 const sumar=()=>{
  if (count<saldoInicial){
   setCount(count+1)

  }
  // condicionado por el stock actual
  

 }

 
  return (
    <div>
     <div className="itemCount">
      <button className='btn btn-info botones' onClick={()=>restar()}><h3>-</h3></button>
      <h3 className="cantidad">{count}</h3>
      <button className='btn btn-info botones' onClick={sumar}><h3>-</h3></button>
     </div>
     <div>
      <button className='btn btn-success botones' onClick={()=>addToCart(count)}>Agregar a Carrito</button>

     </div>
    
    </div>
  )
}

export default ItemCount

//()=>addToCart(count) funcion anonima para que no se ejecute al inciar  la app y solo cuando se le de clic
// si a sumar y restar le ponemos parentesis tambien se autoejecutaria
// se puede poner como funcion restar o funcion sumar 
