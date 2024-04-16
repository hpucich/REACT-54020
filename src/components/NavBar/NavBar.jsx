//import React from 'react'
import "./navbar.css"
import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"
const NavBar = () => {
    return (
        <nav className="navbar">
            <Link to="/">
                <img className="icon-navbar" src="/img/icon.png"></img>
            </Link>
            
            <ul className="list">
                <Link to="/" className="itemMenu">Mostrar Todos</Link>
                <Link to="categoria/notebooks" className="itemMenu">Notebooks</Link>
                <Link to="categoria/pcs" className="itemMenu">Computadoras</Link>
                <Link to="categoria/monitores" className="itemMenu">Monitores</Link>
                
            </ul>
            <CartWidget/>    
        </nav>
        
        
    )
}

export default NavBar