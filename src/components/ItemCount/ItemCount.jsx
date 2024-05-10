import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './ItemCount.css'

const ItemCount = ({handleAddToCar,stock}) => {
 const [count, setCount] = useState(1)
 const [saldoInicial,setSaldoInciai]=useState(5)

 const handleSubtract=()=>{
  if (count>1){
   setCount(count-1)
  }
 }

 const handleAdd=()=>{
  if (count<stock){
   setCount(count+1)

  }
  

 }

 
  return (
    <div>
     <div className="itemCount">
      <button className='btn btn-info botones' onClick={handleSubtract}><h3>-</h3></button>
      <h3 className="cantidad">{count}</h3>
      <button className='btn btn-info botones' onClick={handleAdd}><h3>+</h3></button>
     </div>
     <div>
      <button className='btn btn-success botones' onClick={()=>handleAddToCar(count)}>Agregar a Carrito</button>

     </div>
    
    </div>
  )
}

export default ItemCount

