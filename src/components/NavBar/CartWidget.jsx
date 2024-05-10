
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
const CartWidget = () => {
    const {totalQuantity}=useContext(CartContext)
  return (
    <>
    
    <Link to='/cart'>
      <img  className='cart' src='/img/cart.png'></img>
      <span className="cantidadCompradas">{
      
      totalQuantity()===0? "":totalQuantity()}</span>      
    </Link>
                 
    </>     

  )
}

export default CartWidget

