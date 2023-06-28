import { Character, Film, Planet, Species, Starship } from "../types.ts";

export const CharacterResolver = {
    homeworld : async (parent : Character) : Promise<Planet> => {
      try {
        const id  = parent.homeworld;
        const character = await fetch(id);
        return character.json();
      } catch (error) {
        throw new Error(error)
      }
    },
    films : async (parent : Character) : Promise<Film[]> => {
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
    species : async (parent : Character) : Promise<Species[]> => {
      try {
        const respones = await Promise.all(parent.species.map(async (episode): Promise<Species> =>{
          const data  = await fetch(episode)
          const data2 =  data.json()
          return data2
      }))

      return respones

      } catch (error) {
        throw new Error(error)
      }
    },
    vehicles : async (parent : Character) : Promise<Starship[]> => {
      try {
        const respones = await Promise.all(parent.vehicles.map(async (episode): Promise<Starship> =>{
          const data  = await fetch(episode)
          const data2 =  data.json()
          return data2
      }))

      return respones

      } catch (error) {
        throw new Error(error)
      }
    },
    starships : async (parent : Character) : Promise<Starship[]> => {
      try {
        const respones = await Promise.all(parent.starships.map(async (episode): Promise<Starship> =>{

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
