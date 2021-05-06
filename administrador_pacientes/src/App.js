import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';

function App() {

  // Citas en el local Storage
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if(!citasIniciales){
    citasIniciales = [];
  }


  // Arreglo de todas las citas que va agregando el usuario
  const [citas, guardarCitas] = useState([citasIniciales]);

  // useEffect para realizar ciertas operaciones cuando el state cambia
  useEffect( () => {
    // console.log('listo');
    if(citasIniciales){
      localStorage.setItem('citas', JSON.stringify(citas))
    }else{
      localStorage.setItem('citas', JSON.stringify([]));cd 
    }
  }, [citas, citasIniciales] );


  // Funcion que tome las citas actuales y agregue la nueva
  const crearCita = cita => {
    // console.log(cita);
    // utilizamos la funcion guardarCitas para agregar la nueva cita y hacemos una copia de lo que ya esta con ...
    guardarCitas([
      ...citas,
      cita
    ])
  }

  // Funcion que elimina una cita por su id
  const eliminarCita = id => {
    // Utilizamos .filter() para eliminar cita por el id
      const nuevasCitas = citas.filter(cita => cita.id !== id );
      guardarCitas(nuevasCitas);
  }

  // Mensaje condicional en caso de que no hayan citas cargadas (esta constante se coloca en el h2)
  // console.log(citas.length)
  const titulo = citas.length === 0 ?'No hay Citas' : 'Administra tus citas';


  return (
    <Fragment>
      <h1>Administrador de Pacientes</h1>

      <div className="container">
          <div className="row">
            <div className="one-half column">
                <Formulario 
                crearCita ={crearCita}
                
                
                />
            </div>
            <div className="one-half column">
                  <h2>{titulo}</h2>
                  {citas.map(cita => (
                    <Cita
                      key={cita.id}
                      cita={cita}
                      eliminarCita={eliminarCita}
                    />
                  ))}
            </div>
          </div>
      </div>
    </Fragment>
  );
}

export default App;
