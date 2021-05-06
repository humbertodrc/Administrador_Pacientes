import React, { Fragment, useState } from 'react';
import uuid from 'uuid/dist/v4';
import PropTypes from 'prop-types';


const Formulario = ({crearCita}) => {

    // Crear el State de citas
    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    // Creando segundo State para la validacion (error por campos vacios)
    const [error, actualizarError] = useState(false)


    // Funcion que se ejecuta cada vez que el usuario escribe en un input
    const actualizarState = e => {
        // console.log(e.target.name)
        actualizarCita({
            // para crear la copia de citas y que no re-escriba los campos
            ...cita,
            [e.target.name]: e.target.value
        })
    }

    // Extraer los valores de cita
    const { mascota, propietario, fecha, hora, sintomas } = cita;

    // cuando el usuario presiona agregar cita
    const submitCita = e => {
        // alert('Enviando....')
        e.preventDefault();

        // Validar-------------------------------
        // trim() quita los espacios en blanco
        // validamos cada una de las propiedades del objeto cita, que ya le realizamos destructuring:
        if (mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '') {
            // console.log('hay un error');
            // en caso de que falle la validacion
            actualizarError(true);
            return;
        }
        // Eliminar el mensaje ' <p className="alerta-error">Todos los campos son obligatorios</p>':
        actualizarError(false);

        // Asignar ID---------------------------
        // utilizamos uuid
        cita.id = uuid();
        // console.log(cita);

        // Crear la cita (colocarla en el state principal)-------------------
        crearCita(cita);
        actualizarCita({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
        })


        // Reiniciar el formulario


    }


    return (
        <Fragment>
            <h2>Crear Cita</h2>

            {/* para mostrar el error en caso de que sea true ----actualizarError(true)------null en false para que no retorne ningun mensaje */}

            {error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}

            <form
                onSubmit={submitCita}
            >
                <label htmlFor="">Nombre Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre de Mascota"
                    onChange={actualizarState}
                    value={mascota}
                />

                <label htmlFor="">Nombre Dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre Dueño de la Mascota"
                    onChange={actualizarState}
                    value={propietario}
                />

                <label htmlFor="">Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}
                />

                <label htmlFor="">Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                />

                <label htmlFor="">Sintomas</label>
                <textarea
                    className='u-full-width'
                    name="sintomas"
                    onChange={actualizarState}
                    value={sintomas}
                ></textarea>

                <button

                    type="submit"
                    className="u-full-width button-primary"

                >Agregar</button>

            </form>
        </Fragment>
    );
}

Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired,
}

export default Formulario;