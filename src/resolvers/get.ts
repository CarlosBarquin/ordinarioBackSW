import { RouterContext } from "https://deno.land/x/oak@v11.1.0/router.ts";
import { ObjectId } from "https://deno.land/x/web_bson@v0.2.5/src/objectid.ts";
import { getQuery } from "https://deno.land/x/oak@v11.1.0/helpers.ts";
import { parseNamespace } from "https://deno.land/x/mongo@v0.31.1/src/utils/ns.ts";
import { Character, Film, Planet } from "../types.ts";

type getSlotsContext = RouterContext<"/character/:id", {
    id: string;
} & Record<string | number, string | undefined>, Record<string, any>>

export const character = async (context : getSlotsContext) => {
    try {
        const id  = context.params.id
        const character = await fetch(
          `https://swapi.dev/api/people/${id}/      `
        );
        const data : Character  = await character.json();
        
        const h = await fetch(data.homeworld)
        const h2 : Planet = await h.json()

        const films = await Promise.all(data.films.map(async (film) : Promise<Film>=> {
            const data  = await fetch(film)
            const data2  =  data.json()
            return data2
        }))


        const person = {
            name : data.name,
            height : data.height,
            mass : data.mass,
            hair_color :data.hair_color,
            gender : data.gender,
            homeworld : h2,
            films : films
        }
        context.response.body = person
        
    } catch (error) {
        context.response.body = error
    }

}