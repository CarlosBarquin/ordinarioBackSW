import {  Character, Film, Planet,  } from "../types.ts";

export const PlanetResolver = {
    films : async (parent : Planet) : Promise<Film[]> => {
      try {
        const respones = await Promise.all(parent.films.map(async (episode): Promise<Film> =>{

          const data  = await fetch(episode)
          const data2 =  data.json()
          return data2
      }))

      return respones

      } catch (error) {
        throw new Error(error)
      }
    },
    residents : async (parent : Planet) : Promise<Character[]> => {
        try {
          const respones = await Promise.all(parent.residents.map(async (episode): Promise<Character> =>{
            const data  = await fetch(episode)
            const data2 =  data.json()
            return data2
        }))
  
        return respones
  
        } catch (error) {
          throw new Error(error)
        }
    }
    
  
};
