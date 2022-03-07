import  heroes  from './heroes'

export const getHeroesById = (id) => heroes.find( heroe => heroe.id === id )

export const getHeroesByOwner = (owner) => heroes.filter( heroe => heroe.owner === owner)