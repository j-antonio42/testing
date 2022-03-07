import { getImage } from "../../Base/async";


describe('Pruebas con async await y fetch', () => {

    test('debe retornar el url de la imagen', async () => {

        const url = await getImage()

        expect( url.includes( 'https://') ).toBe( true )
        
    });
    
    
})
