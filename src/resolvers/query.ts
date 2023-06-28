import { Character } from "../types.ts";

export const Query = {
  character: async (
    _: unknown,
    args: { id: string }
  ): Promise<Character> => {
    const id  = args.id;
    const character = await fetch(
      `https://swapi.dev/api/people/${id}/      `
    );
    // console.log(await character.json())
    return character.json();
  },

};
