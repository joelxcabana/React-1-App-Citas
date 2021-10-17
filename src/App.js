import React,{Fragment,useState,useEffect} from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';

function App() {

  //citas en localstorage
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));

  if(!citasIniciales){
    citasIniciales = [];
  }

   //arreglo de citas
   const [citas,setCitas] = useState(citasIniciales);

   //useEfect para real;izar ciertas condiciones cuando el state cambia
   useEffect( () =>{
    if(citasIniciales){
      localStorage.setItem('citas',JSON.stringify(citas));
    }else{
      localStorage.setItem('citas',JSON.stringify([]));
    }
   },[citas,citasIniciales])

   //funcion toma la cita actual y agrega la nueva
   const crearCita = cita =>{
    setCitas([
      ...citas,
      cita
    ]);
   }

   //funcion que elimina una cita por su id
   const eliminarCita = id =>{
     const nuevaCitas = citas.filter( cita => cita.id !== id);
     setCitas(nuevaCitas);
   }

   //mensaje condicional
   const titulo = citas.length === 0 ? 'No hay citas' : 'Administra tus citas';

  return (
    <Fragment>
    <h1>Administrar de Pacientes</h1>
    <div className="container">
      <div className="row">
         <div className="one-half column">
           <Formulario
            crearCita={crearCita}
           />
         </div>
         <div className="one-half column">
          <h2>{titulo}</h2>
          { citas.map( cita => (
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