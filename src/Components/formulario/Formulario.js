import React from 'react'
import './Formulario.css';

const Formulario = ({user, setUser})=> {

    const handleChange = e =>{
        setUser({
            ...user, 
            [e.target.name] : e.target.value 
        })
    }

    const handleSubmit = () =>{
        if(user.nombre==='' || user.telefono===''|| user.email===''){
            alert('Todos los campos son obligatorios')
            return
        }

        const requestInit = {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(user)
        }
        fetch('http://localhost:9000/api', requestInit)
        .then(res => res.json())
        .then(res => console.log(res))

        setUser({
            nombre: '',
            telefono: '',
            email: ''
        })
    }

  return (
        <section>
            <form  onSubmit={handleSubmit} className="formulario">
                <legend>Dejanos tus datos</legend>
                <div className="form-container">
                    <div className="campo">
                        <label htmlFor="nombre" className="form-label">Nombre</label>
                        <input name="nombre"onChange={handleChange} type="text" id="nombre" className="form-control"/>
                    </div>

                    <div className="campo">
                        <label htmlFor="telefono" className="form-label">telefono</label>
                        <input name="telefono" onChange={handleChange} type="tel" id="telefono" className="form-control"/>
                    </div>

                    <div className="campo">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input name="email" onChange={handleChange} type="email" id="email" className="form-control"/>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
        </section>
    )
}

export default Formulario;