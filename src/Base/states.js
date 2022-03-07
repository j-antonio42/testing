

const usState = (valor) => {
    return [ valor , () => { console.log(`Hola ${valor}`)}]
}

const [ nombre, setNombre ] = usState('toni')

//console.log( nombre )
//setNombre()

export function getSaludo(nombre = ' Toni'){
    return 'Fuck u' + nombre
}



export const getUser = () => ({
    uid: '1234',
    username: 'Mikeperruno123'
})

export const getUserActive = (nombre) => ({
    uid: '12345',
    username: nombre
})

export const returnArr = () => {
    return ['ABC', 123]
}

//console.log(getHeroesByOwner('DC'))


