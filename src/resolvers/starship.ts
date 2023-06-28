import {  Character, Film, Starship,  } from "../types.ts";

export const ShipResolver = {
    films : async (parent : Starship) : Promise<Film[]> => {
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
    pilots : async (parent : Starship) : Promise<Character[]> => {
        try {
          const respones = await Promise.all(parent.pilots.map(async (episode): Promise<Character> =>{
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
