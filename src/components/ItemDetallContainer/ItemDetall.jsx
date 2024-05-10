import ItemCount from "../ItemCount/ItemCount"
import 'bootstrap/dist/css/bootstrap.css'
import './itemDetall.css'
import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
const ItemDetall = ({product}) => {

    const {cart,addToCart}=useContext(CartContext)
    const [clickAdd,setClickAdd]=useState(false)



    
    const handleAddToCar=(count)=>{
        setClickAdd(true)
        const productCard={...product,quantity:count}
      addToCart(productCard)
    }


  return (


    <div className="card mb-3 text-center max_ancho centrado">
        <div className="row g-0">
        <div className="col-md-6">
            <img  className="imagenClass" src={product.imagen}/>
        </div>
        <div className="col-md-6">
            <h1>{product.nombre}</h1>
            <p>{product.descripcion}</p>
            <h2> Precio $ {product.precio}</h2>
            {
                clickAdd ? <Link className="btn btn-success" to="/cart">Ir al Carrito</Link> :
                <ItemCount handleAddToCar={handleAddToCar} stock={product.stock}/>
            }
            
            
            
        </div>    

            
    </div>   
</div>
  )
}

export default ItemDetall

