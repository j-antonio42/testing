import React from 'react'

const PrimeraApp = ({saludo, subtitulo = 'soy el subtitulo lol'}) => {
    return (
        <>
        <h1>{ saludo }</h1>
        <h2>{ subtitulo }</h2>   
        </>
    )
}

export default PrimeraApp

