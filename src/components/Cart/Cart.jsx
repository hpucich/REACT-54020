import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css'
import './Cart.css'



const Cart = () => {

    const {cart,clearCart,deleteProductById,totalPrice}=useContext(CartContext)

    if (cart.length===0){
        return <div className="text-center"><h3>Carrito vacio</h3></div>
    }


    return (
    <div>
        <div className="container">

            <div className="row align-items-start border border-info">
                <div className="col">
                    
                </div>
                <div className="col">
                    Descripión
                </div>
                <div className="col center">
                    Cantidad
                </div>
                <div className="col center">
                    Precio
                </div>
                <div className="col center">
                    Total
                </div>
                <div className="col">
                    
                </div>
            </div>   
            {


        
            cart.map((producto)=>(
                <div key={producto.id} className="row align-items-start border border-info">
                    <div className="col">
                        <img src={producto.imagen} style={{width:"120px", height:"120px"}} />
                        
                    </div>   
                    <div className="col item">
                    <span>{producto.nombre}</span>
                    </div>
                    <div className="col item center ">
                        <p className="align-middle">{producto.quantity}</p>
                    </div>   
                    <div className="col item center">
                        <p>{producto.precio}</p>
                    </div>   
                    <div className="col item center">
                        <p>{producto.quantity*producto.precio}</p>
                    </div>   
                    <div className="col item">
                        <button className="btn btn-danger" onClick={()=>deleteProductById(producto.id)}>Eliminar</button>
                    </div>   

                </div>
                


            ))

        }
      

        <div className="row align-items-start border border-info">
    <div className="col">
        
    </div>
    <div className="col">
       
    </div>
    <div className="col center">
       
    </div>
    <div className="col center itemGrande">
       Total General $
    </div>
    <div className="col center itemGrande verde">
    {totalPrice()}

    </div>
    <div className="col">
    </div>
</div>

        
        
        
    </div> 
    <div className="row align-items-start">
    <div className="col center">
    <Link  className="btn btn-primary btn-lg botonGrande btn btn-success" to="/checkout">Finalizar compra</Link>
    </div>
    <div className="col center ">
    <button  className="btn btn-primary btn-lg botonGrande btn btn-danger"  onClick={clearCart}>Limpiar Carrito </button>    

    </div>   
    </div>

    </div>
  )
}

export default Cart