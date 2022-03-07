import { getUser, getUserActive } from "../../Base/states";


describe('pruebas en funciones', () => {

    test('getUser debe retornar un objeto', () => {

        const userTest = {
            uid: '1234',
            username: 'Mikeperruno123'
        }

        const user = getUser()

        expect( user ).toEqual(userTest)
    });

    test('getUserActive debe retornar un objeto', () => {

        const name = 'Toni'

        const newUser = {
            uid: '12345',
            username: name
        }

        const userActive = getUserActive('Toni')

        expect( userActive ).toEqual( newUser )
    });
    
    
    
})
