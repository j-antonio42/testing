import heroes from "../../Base/heroes";
import { getHeroesById, getHeroesByOwner } from "../../Base/highOrder";


describe('Pruebas en high order functions', () => {

    test('debe retornar heroe por su id', () => {

        const id = 1
        const heroe = getHeroesById( id )

        const heroeData = heroes.find( h => h.id === id )

        expect( heroe ).toEqual( heroeData )
        
    });

    test('Debe retornar undefined si heroe no existe', () => {

        const id = 10
        const heroe = getHeroesById( id )

        expect( heroe ).toBe( undefined )
        
    });

    test('debe retornar arreglo con heroes de dc', () => {

        const owner = 'DC'
        const heroe = getHeroesByOwner( owner)

        const heroeData = heroes.filter( h => h.owner === owner )

        expect( heroe ).toEqual( heroeData )
        
    });
    
    test('debe retornar el length del arreglo con heroes de marvel', () => {

        const owner = 'Marvel'
        const heroe = getHeroesByOwner( owner)

        expect( heroe.length ).toBe( 2 )
        
    });
    
    
});
