

export const getImage = async() => {

    try {
        const apiKey = 'OqTcLmCMKF14S4NgYyaompv7KzZthkPc'
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`)
        const { data } = await resp.json()
    
        const { url } = data.images.original
    
       return url

    } catch (error) {
       // manejo del error 
      return 'No existe'
    }
}
