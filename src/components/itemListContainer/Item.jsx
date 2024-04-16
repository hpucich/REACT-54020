//import React from 'react'
import './item.css'
import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css'





const Item = ({product}) => {
  return (

   <div key={product.id} className="col">
        <div className="card">
            <img src={product.imagen} classname="card-img-top imagen" alt="..."/>
            <div classname="card-body">
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