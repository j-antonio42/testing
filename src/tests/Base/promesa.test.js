import heroes from "../../Base/heroes";
import { getHeroesByIdAsync } from "../../Base/promise";



describe('Pruebas con promesas', () => {

    test('getHeroesByIdAsync debe retornar un heroe async', ( done ) => {

        const id = 1

        getHeroesByIdAsync( id )
            .then( heroe => {

                expect( heroe ).toBe( heroes[0] )
                done()
            })
         
    });

    test('debe salir error si el id no existe', ( done ) => {

        const id = 10

        getHeroesByIdAsync( id )
            .catch( error => {

                expect( error ).toBe( 'No se pudo encontrar el heroe')
                done()
            })
        
    });
    
    
});
