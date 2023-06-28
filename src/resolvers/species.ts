import {  Character, Film, Planet, Species,  } from "../types.ts";

export const SpecieResolver = {
    films : async (parent : Species) : Promise<Film[]> => {
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
    people : async (parent : Species) : Promise<Character[]> => {
        try {
          const respones = await Promise.all(parent.people.map(async (episode): Promise<Character> =>{
            const data  = await fetch(episode)
            const data2 =  data.json()
            return data2
        }))
  
        return respones
  
        } catch (error) {
          throw new Error(error)
        }
    },
    homeworld : async (parent : Species) : Promise<Planet> => {
        try {
          const id  = parent.homeworld;
          const character = await fetch(id);
          return character.json();
        } catch (error) {
          throw new Error(error)
        }
      },
    
  
};
