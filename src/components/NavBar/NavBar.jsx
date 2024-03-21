//import React from 'react'
import "./navbar.css"
import CartWidget from "./CartWidget"
const NavBar = () => {
    return (
        <nav className="navbar">
            <img className="icon-navbar" src="/img/icon.png"></img>
            <ul className="list">
            <li className="itemMenu">Teclado</li>
            <li className="itemMenu">Auriculares</li>
            <li className="itemMenu">Micrófonos</li>
        </ul>
        <CartWidget/>    
        </nav>
        
        
    )
}

export default NavBar