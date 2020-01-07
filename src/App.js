import React, { useState } from 'react';
import './App.css';

function App() {

  const [counter, setCounter] = useState(10)

  console.log('HOLA MUNDO')

  function incrementar(e) {
    setCounter(counter + 1)
  }


  return (
    <>

      <div className="text-center" style={{ marginTop: '10%', }}>

        <h1 className="text-center">{counter}</h1>

        <button className="btn btn-info"
          onClick={e => incrementar(e)}
        >
          Incremenetar
        </button>


      </div>


    </>
  );
}

export default App;
