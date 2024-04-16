
import './App.css'
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from './components/itemListContainer/ItemListContainer'
import ItemDetallContainer from './components/ItemDetallContainer/ItemDetallContainer'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import ItemCount from './components/ItemCount/ItemCount'
//import CountController from './components/ejemplos/CountController'
//import InputMayusculas from './components/ejemplos/InputMayusculas'
//import ComponentePadre from './components/ejemplos/Children/ComponentePadre'

function App() {
  const addToCart=(count) =>{
    console.log("ejecutando funcion desde App",count)
  }
  return (
   <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer saludo="Nuestros productos para" nombre="Hernan"/>}/> //path'/' raiz principal
        <Route path='categoria/:idCategoria' element={<ItemListContainer saludo="Nuestros productos para" nombre="Hernan"/>}/>
        <Route path='/detail/:idProduct' element={<ItemDetallContainer />}></Route>
      </Routes>

      
  </BrowserRouter>
  )
}

export default App

/*
//  
    <InputMayusculas textoIncial=""/>
    <CountController/>      
   <ItemDetallContainer/>
      
      <ItemCount addToCart={addToCart}/>
*/