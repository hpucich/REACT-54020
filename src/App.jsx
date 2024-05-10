
import './App.css'
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from './components/itemListContainer/ItemListContainer'
import ItemDetallContainer from './components/ItemDetallContainer/ItemDetallContainer'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { CartProvider } from './context/CartContext'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'
import { ToastContainer } from 'react-toastify'


function App() {
  const addToCart=(count) =>{
    console.log("ejecutando funcion desde App",count)
  }
  return (
    <BrowserRouter>
        <CartProvider>
            <NavBar/>
            <ToastContainer/>
            <Routes>
                
                <Route path='/' element={<ItemListContainer saludo="Nuestros productos para" nombre="Hernan"/>}/> //path'/' raiz principal
                <Route path='categoria/:idCategoria' element={<ItemListContainer saludo="Nuestros productos para" nombre="Hernan"/>}/>
                <Route path='/detail/:idProduct' element={<ItemDetallContainer />}></Route>
                <Route path='/checkout' element={<Checkout/>}></Route>
                <Route path='/cart' element={<Cart/>}></Route>
                
            </Routes>    
        </CartProvider>  
    </BrowserRouter>
  )
}

export default App

