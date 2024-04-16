//import React from 'react'
import Item from "./Item"
const ItemList = ( {products} ) => {

  
 return(
 <div>
    <div class="row row-cols-1 row-cols-md-3 g-4">
        {
            products.map((product)=>
        {
            return <Item key={product.id}  product={product}/>
        }
            )
        }
    </div>
 </div>
)
}

export default ItemList


/*
   <div> 
     {
       products.map((product)=>{
        return
          <div key={product.id} className='card' >
             <h2>{product.nombre}</h2>
             <p>{product.descripcion}</p>
          </div>
       }) 
     }
    </div>

*/