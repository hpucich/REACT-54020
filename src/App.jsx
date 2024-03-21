
import './App.css'
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from './components/ItemListContainer'
import CountController from './components/ejemplos/CountController'
import InputMayusculas from './components/ejemplos/InputMayusculas'
//import TextoMayuscula from './components/ejemplos/TextoMayuscula'
function App() {
 

  return (
   <div>
    <NavBar/>
    <ItemListContainer saludo="Hola" nombre="Hernan"/>
    <CountController/>
    <InputMayusculas textoIncial=""/>
  </div>
  )
}

export default App
