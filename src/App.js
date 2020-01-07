import React, { useState } from 'react';
import './App.css';

import Titulo from "./components/Titulo";
import Boton from "./components/Boton";

function App() {

  const [counter, setCounter] = useState(10)

  console.log('HOLA MUNDO')

  function incrementar(e) {
    const newCounter = counter + 1
    setCounter(newCounter)
  }

  function decrementar(e) {
    const newCounter = counter - 1
    setCounter(newCounter)
  }


  return (
    <>

      <div className="text-center" style={{ marginTop: '10%', }}>

        <Titulo texto={counter} />

        <div className="row justify-content-center">
          <div className="col-6">
            <Boton texto="Incrementar" funcion={incrementar} />
          </div>

          <div className="col-6">
            <Boton className="col-6" texto="Decrementar" funcion={decrementar} />
          </div>


        </div>

      </div>
    </>
  );
}




export default App;
