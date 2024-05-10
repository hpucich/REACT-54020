import "./navbar.css"
import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css'
const NavBar = () => {
    return (
        <nav className="navbar">
            <Link to="/">
                <img className="icon-navbar" src="/img/icon.png"></img>
            </Link>
             
            <ul className="list">
                <Link to="/" className="btn btn-info btn-lg botonMenu">Mostrar Todos</Link>
                <Link to="categoria/notebooks" className="btn btn-info btn-lg botonMenu">Notebooks</Link>
                <Link to="categoria/pcs" className="btn btn-info btn-lg botonMenu">Computadoras</Link>
                <Link to="categoria/monitores" className="btn btn-info btn-lg botonMenu">Monitores</Link>
                
            </ul>
            <CartWidget/>    
        </nav>
        
        
    )
}

export default NavBar