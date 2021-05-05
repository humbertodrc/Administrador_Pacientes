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
    const actualizarState = () => {
        console.log('escribiendo....')
    }


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
                />

                <label htmlFor="">Nombre Dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre Dueño de la Mascota"
                    onChange={actualizarState}
                />

                <label htmlFor="">Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                />

                <label htmlFor="">Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                />

                <label htmlFor="">Sintomas</label>
                <textarea
                    className='u-full-width'
                    name="sintomas" 
                    onChange={actualizarState}
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