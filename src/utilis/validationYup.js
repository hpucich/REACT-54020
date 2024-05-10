import { number, object, string } from "yup";

let userScheama=object(
    {
        name:string().required("El campo Nombre es requerido"),
        phone:number().required("Debe Ingresar un Telefono").positive().integer(),
        email:string().email("debe tener un formato mail").required()

    }
)
const validateForm=async(dataForm)=>{
    try{
        await userScheama.validate(dataForm)
        return{ status:"success"}
        

    } catch(error){
        return {status:"error", error:error.message}


    }

}
export default validateForm;