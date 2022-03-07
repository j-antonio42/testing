import { returnArr } from "../../Base/states";


describe('Pruebas en desestructuracion de arreglos', () => {

    test('', () => {

        const [letras, numeros] = returnArr()

        expect( letras ).toBe( 'ABC')
        expect( typeof letras ).toBe( 'string')
        
        expect( numeros ).toBe( 123 )
        expect( typeof numeros ).toBe( 'number')

    });
    
})
