import ItemCount from "../ItemCount/ItemCount"
import 'bootstrap/dist/css/bootstrap.css'
import './itemDetall.css'
const ItemDetall = ({product}) => {
  return (


    <div className="card mb-3 text-center max_ancho centrado">
        <div className="row g-0">
        <div className="col-md-6">
            <img  className="imagenClass" src={product.imagen}/>
        </div>
        <div class="col-md-6">
            <h1>{product.nombre}</h1>
            <p>{product.descripcion}</p>
            <h2> Precio $ {product.precio}</h2>
            <ItemCount/>
            
        </div>    

            
    </div>   
</div>
  )
}

export default ItemDetall


// style="max-width: 540px;"