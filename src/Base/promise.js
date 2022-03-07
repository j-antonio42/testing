import { getHeroesById } from "./highOrder"


 export const getHeroesByIdAsync = ( id ) => {

    return new Promise( (resolve, reject) => {

        setTimeout( () => {

            const p1 = getHeroesById( id )
            if ( p1 ){
                resolve( p1 )
            } else {
                reject( 'No se pudo encontrar el heroe' )
            }
        }, 1000)

    })

}