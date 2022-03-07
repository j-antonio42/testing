
describe('Pruebas en el archivo demo.test.js', () => {

    test( 'deben ser iguales los strings', () => {

        //inicializacion
      const mensaje = 'Hola putos'
    
      //estimulo
      const mensaje2 = "Hola putos"
    
      // observar comportamiento
      expect(mensaje).toBe(mensaje2)
    
    })

})



