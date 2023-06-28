import {  Character, Film, Planet, Species, Starship,  } from "../types.ts";

export const FilmResolver = {
    characters : async (parent : Film) : Promise<Character[]> => {
        try {
          const respones = await Promise.all(parent.characters.map(async (episode): Promise<Character> =>{
            const data  = await fetch(episode)
            const data2 =  data.json()
            return data2
        }))
  
        return respones
  
        } catch (error) {
          throw new Error(error)
        }
    },
    planets : async (parent : Film) : Promise<Planet[]> => {
        try {
          const respones = await Promise.all(parent.planets.map(async (episode): Promise<Planet> =>{
            const data  = await fetch(episode)
            const data2 =  data.json()
            return data2
        }))
  
        return respones
  
        } catch (error) {
          throw new Error(error)
        }
    },
    species : async (parent : Film) : Promise<Species[]> => {
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
     starships : async (parent : Film) : Promise<Starship[]> => {
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
    },
    vehicles : async (parent : Film) : Promise<Starship[]> => {
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
    }
    
  
};
