import Item from "./Item"
const ItemList = ( {products} ) => {

  
 return(
 <div>
    <div className="row row-cols-1 row-cols-md-3 g-4">
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

