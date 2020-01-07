import React from 'react'

const Boton = ({ texto, funcion }) => {
    return (
        <>
            <button className="btn btn-info" onClick={e => funcion(e)}>
                {texto}
            </button>
        </>
    )
}

export default Boton
