
import 'bootstrap/dist/css/bootstrap.css'

const FormularioCheckout = ({dataForm,handleChangeInput,handleSubmit}) => {
  return (
    <div class="container">
    <h2>Ingresa tus datos</h2>
    <form>
        <div className="form-group">
            <label for="name">Nombre:</label>
            <input type="text" className="form-control" id="name" name="name" placeholder="Ingrese su nombre" value={dataForm.name} onChange={handleChangeInput}/>
        </div>
        <div className="form-group">
            <label for="phone">Teléfono:</label>
            <input type="tel" className="form-control" id="phone" name="phone" placeholder="Ingrese su teléfono" value={dataForm.phone} onChange={handleChangeInput}/>
        </div>
        <div className="form-group">
            <label for="email">Correo Electrónico:</label>
            <input type="email" className="form-control" id="email" name="email" placeholder="Ingrese su correo electrónico" value={dataForm.email} onChange={handleChangeInput}/>
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Enviar</button>
    </form>
</div>

    
)
}




export default FormularioCheckout