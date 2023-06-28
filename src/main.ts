import { Server } from "std/http/server.ts";
import { GraphQLHTTP } from "gql";
import { makeExecutableSchema } from "graphql_tools";

import { Query } from "./resolvers/query.ts";
import { CharacterResolver } from "./resolvers/character.ts";
import { typeDefs } from "./schema.ts";
import { SpecieResolver } from "./resolvers/species.ts";
import { PlanetResolver } from "./resolvers/planet.ts";
import { FilmResolver } from "./resolvers/film.ts";
import { ShipResolver } from "./resolvers/starship.ts";

const resolvers = {
  Query,
  Character : CharacterResolver,
  Species : SpecieResolver,
  Planet : PlanetResolver,
  Film : FilmResolver,
  Starship : ShipResolver
};

const s = new Server({
  handler: async (req) => {
    const { pathname } = new URL(req.url);

    return pathname === "/graphql"
      ? await GraphQLHTTP<Request>({
          schema: makeExecutableSchema({ resolvers, typeDefs }),
          graphiql: true,
        })(req)
      : new Response("Not Found", { status: 404 });
  },
  port: 3000,
});

s.listenAndServe();

console.log(`Server running on: http://localhost:3000/graphql`);
