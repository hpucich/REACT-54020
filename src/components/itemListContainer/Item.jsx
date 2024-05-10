import './item.css'
import { Link } from "react-router-dom"
import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.css'





const Item = ({product}) => {

    const [expandir, setEmpandir]=useState(false)

    const handleMouseOver=()=>{
       setEmpandir(true)
    }

    const handleMouseLive=()=>{
        setEmpandir(false)
    }

    const estiloCard={
        transform: expandir ? "scale(.95)" : "scale(1)" ,

    }

  return (

   <div 
    key={product.id}
    style={estiloCard} 
     
    onMouseOver={handleMouseOver} 
    onMouseLeave={handleMouseLive} >
        <div className="card">
            <img src={product.imagen} className="card-img-top imagen" alt="..."/>
            <div className="card-body">
                <h3 className='text-center'>{product.nombre}</h3>
                <p className='text-center'>{product.descripcion}</p>
                <p className='text-center'> Precio $ {product.precio}</p>
                <div className='text-center'><Link to={`/detail/${product.id}`} className="btn btn-primary">Ver Detalle</Link> </div>
            </div>  
        </div>
    </div>

    
  )
}

export default Item