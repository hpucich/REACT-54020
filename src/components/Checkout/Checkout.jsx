import { useContext, useState } from "react"
import FormularioCheckout from "./FormularioCheckout"
import { CartContext} from "../../context/CartContext"
import { addDoc,collection } from "firebase/firestore"
import db from "../../db/db"
import { Link } from "react-router-dom"
import validateForm from "../../utilis/validationYup.js"
import { toast } from "react-toastify"
import 'bootstrap/dist/css/bootstrap.css'



const Checkout = () => {
    const [dataForm,setdataForm]=useState({
        name:"",
        phone:"",
        email:""
    });

    const [idOrder,setIdOrder]=useState(null)
    const {cart,totalPrice,clearCart}=useContext(CartContext)

    const handleChangeInput =(event)=>{
        setdataForm({...dataForm,[event.target.name]:event.target.value})
       
    }

    const handleSubmit=async(event)=>{
        event.preventDefault()
        const order={
            user:{...dataForm},
            products: [...cart],
            total: totalPrice()
        }
        
       
        const response= await validateForm(dataForm)
        console.log(response.status)
        if(response.status==="success"){
            uploadOrder(order)
        } else {
            toast(response.error)
        }
        
    }


    const uploadOrder=async(order)=>{
        const orderRef=collection(db,"orders")
        const response=await addDoc(orderRef,order)
        setIdOrder(response.id)
        clearCart()


    }


  return (
    <div>{
        idOrder?(
            <div>    
                <div className="card text-center">
                    <div className="card-header">
                        Felicitaciones!!!!
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Su Orden se Cargo Correctamente</h5>
                        <p className="card-text">bajo el Nro: {idOrder}</p>
                        <Link  to="/" className="btn btn-primary">Volver al inicio</Link>
                    </div>
                </div>
            </div> 
        ):(
            <FormularioCheckout 
                dataForm={dataForm}
                handleChangeInput={handleChangeInput}
                handleSubmit={handleSubmit}
            />
        )}
    </div>
  )
}

export default Checkout