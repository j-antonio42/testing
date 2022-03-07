import React from 'react'
import { shallow } from 'enzyme'
import '@testing-library/jest-dom'
import PrimeraApp from '../PrimeraApp';

describe('Pruebas en <PrimeraApp />', () => {

   /* test('debe mostrar el mensaje', () => {

        const saludo = 'Hola mundo'

        const wrapper = render()
        
    }); */

    test('debe mostrar <PrimeraApp /> correctamente', () => {

        const saludo = 'Hola te pico la cola'
        const wrapper = shallow( <PrimeraApp saludo = {saludo} /> )

        expect( wrapper ).toMatchSnapshot()
        
    });

    test('debe mostrar subtitulo enviado por props', () => {

        const saludo = 'Hola te pico la cola'
        const subtitulo = 'soy el subtitulo lol'

        const wrapper = shallow( 
            <PrimeraApp 
                saludo = {saludo} 
                subtitulo = {subtitulo}
            /> )

        
        
    });
    
    
});
