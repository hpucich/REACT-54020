import React from 'react'
import "./NavBar/navbar.css"
const ItemListContainer = ({saludo,nombre}) => {
  //console.log(props) 
  //console.log(props.saludo) 
 return (
   <>
    <div className='texto'>{saludo} {nombre}</div>
    

   </>
   
  )
}

export default ItemListContainer