import { gql } from "graphql_tag";

export const typeDefs = gql`

  type Query {
    character(id: ID!): Character
    charactersByIds(ids: [ID!]!): [Character]
  }

  type Character {
    name: String!
    height :Int
    species: [Species]
    mass : Int
    gender: String
    hair_color : String
    homeworld : Planet
    created : String!
    films : [Film!]!
    starships :  [Starship]
    vehicles : [Starship]
  }

  type Species{
    created : String!
    classification : String!
    people : [Character]
    films : [Film]
    name : String!
    homeworld : Planet
  }

  type Planet{
    climate : String!
    created : String!
    films : [Film]
    residents : [Character]
    name : String!
  }

  type Film {
    title : String!
    director : String!
    characters : [Character!]!
    planets : [Planet]
    created : String!
    species : [Species]
    starships :  [Starship]
    vehicles : [Starship]
  }

  type Starship {
    name : String!
    passengers : Int!
    films : [Film]
    pilots : [Character]
  }

`;
