
export type Character = {
  name : string
  height: number
  mass : number
  hair_color : string
  gender : string
  homeworld : string
  films : string[]
  species : string[]
  vehicles : string[]
  starships : string[]
  created : string
}

export type Species = {
  created : string
  classification : string
  people : string[]
  films : string[]
  name : string
  homeworld : string
}

export type Planet = {
  climate : string
  created : string
  films : string[]
  residents : string[]
  name : string
}

export type Film = {
  title : string
  director : string
  characters : string[]
  planets : string[]
  created : string
  species : string[]
  starships :  string[]
  vehicles : string[]
}

export type Starship = {
  name : string
  passengers : number
  films : string[]
  pilots : string[]
}
