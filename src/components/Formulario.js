import React,{Fragment,useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import PropTypes from 'prop-types';

const Formulario = ({crearCita}) => {

    //Creacion state de citas
    const [cita,setCitas] = useState({
        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:''
    });

    const [error,setError] = useState(false);

    //funcion que se ejecuta cada vez que se escribe en el input
    const handleChange = e => {
        setCitas({
            ...cita,
            [e.target.name] : e.target.value
        })
    }

    //extraer los valores
    const { mascota, propietario , fecha, hora , sintomas } = cita;

    //cuando el usuario envia el formulario
    const handleSubmit = e =>{
        e.preventDefault();
        
        //TODO:validar
        if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === ''   ){
            setError(true);
            return;
        }
        //eliminar mensaje previo de error
        setError(false);

        //TODO:asignar un id
        cita.id = uuidv4();

        //TODO:crear cita
        crearCita(cita);

        //TODO:reinicar form
        setCitas({
            mascota:'',
            propietario:'',
            fecha:'',
            hora:'',
            sintomas:''
        })
    }
    return ( 
       <Fragment>
           <h2>Crear Cita</h2>
           { error ? <p className="alerta-error">Todos los campos son obligatorios</p> :null}
           <form
              onSubmit={handleSubmit}
           >
                <label>Nombre Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={handleChange}
                    value={mascota}
                />
                <label>Nombre Dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre Dueño de la Mascota"
                    onChange={handleChange}
                    value={propietario}
                />
                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={handleChange}
                    value={fecha}
                />
                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={handleChange}
                    value={hora}
                />
                <label>Sintomas</label>
                <textarea
                    name="sintomas"
                    className="u-full-width"
                    onChange={handleChange}
                    value={sintomas}
                >
                </textarea>
                <button
                    type="submit"
                    className="u-full-width button-primary"
                >
                Agregar Cita
                </button>
           </form>
       </Fragment>
     );
}
 
Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired
}

export default Formulario;