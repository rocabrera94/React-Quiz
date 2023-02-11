import React,{useState} from 'react'
import './App.css';
import Preguntas from './components/Preguntas';
import { v4 as uuidv4 } from 'uuid';
function App() {
  const [preguntaActual, setPreguntaActual] = useState(0)
  const [puntaje, setPuntaje] = useState(0);
  const [siguiente, setSiguiente] = useState(false)
  const [mostrarPuntaje, setMostrarPuntaje] = useState(false)
  //const sigbtn = document.getElementsByClassName('siguiente')
  const handleRespuesta = (correcta) => {
    (correcta ? setPuntaje(puntaje + 1): setPuntaje(puntaje))
    setSiguiente(true)
    
  }
  const handleSiguiente = () =>{
    setSiguiente(false);
    
    (preguntaActual < Preguntas.length -1 ? setPreguntaActual(preguntaActual +1) : setMostrarPuntaje(true))
  }
  return (
    <div className="App">
      {mostrarPuntaje ? (
        <div>
          <p>Finalizado!</p>
          <p>{puntaje}/{Preguntas.length} </p>
        </div>):(
        <>
          <section>
          <div className='preg-container'>
            Pregunta {preguntaActual +1} de {Preguntas.length}
          </div>
          <div className='pregunta'>
            <p>{Preguntas[preguntaActual].pregunta}</p>
          </div>
          </section>
          <section className='respuestas'>
            {Preguntas[preguntaActual].respuestas.map((opciones)=>(
              <li key={uuidv4()}>
                <button onClick={()=>handleRespuesta(opciones.correcta)}>{opciones.respuesta}</button>
              </li> 
            ))}
          </section>
          {siguiente ? <button className='siguiente' onClick={()=>handleSiguiente()}>Next</button> :<button className='siguiente' onClick={()=>handleSiguiente()} disabled>Next</button>}
        </>)}
    </div>
  );
}

export default App;
