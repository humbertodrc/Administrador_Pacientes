import React, { Fragment, useState } from 'react';

const Formulario = () => {

    // Crear el State de citas
    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    })

    // Funcion que se ejecuta cada vez que el usuario escribe en un input
    const actualizarState = e => {
        // console.log(e.target.name)
        actualizarCita({
            // para crear la copia de citas y que no re-escriba los campos
            ...cita,
            [e.target.name] : e.target.value
        })
    }

    // Extraer los valores de cita
    const {mascota, propietario, fecha, hora, sintomas} = cita;


    return (
        <Fragment>
            <h2>Crear Cita</h2>

            <form action="">
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

export default Formulario;