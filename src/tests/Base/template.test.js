import { getSaludo } from "../../Base/states"


describe('Pruebas en funcion getSaludo', () => {

    test('should return a name', () => {

        const nombre = 'Toni'
        
        const saludo = getSaludo( nombre )

        expect( saludo ).toBe( 'Fuck u' + nombre )

    })

    // getSaludo debe retornar saludo aun sin no hay argumento en el nombre
    test('debe retornar saludo sin argumento', () => {
        
        const saludo = getSaludo()

        expect( saludo ).toBe( 'Fuck u Toni' )
    });
    
    
})
