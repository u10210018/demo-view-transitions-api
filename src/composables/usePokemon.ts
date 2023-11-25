import type { Pokemon } from '@/domain/pokemon'

const list = ref<Pokemon[]>([])

const fetchPokemonDataWithName = async (name: string): Promise<Partial<Pokemon>> => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
  const resJson = await res.json()
  return resJson
}

const fetchPokemonDataWithId = async (id: number): Promise<Partial<Pokemon>> => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
  const resJson = await res.json()
  return resJson
}

const fetchKantoPokemon = async () => {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  const resJson = await res.json()
  return resJson
}

const fetchPokemonDetail = async (name: string) => {
  const res1 = await fetchPokemonDataWithName(name)
  let res2 = {}
  if (res1.id) {
    res2 = await fetchPokemonDataWithId(res1.id)
  }

  const res = Object.assign({}, res1, res2)

  return {
    ...res,
    ...prokemonDataTransfer(res),
  }
}

const prokemonDataTransfer = (pokemonData: any): Pokemon => {
  return {
    ...pokemonData,
    nameTW: pokemonData.names.find((v: any) => v.language.name === 'zh-Hant').name,
    imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonData.id}.png`,
    genera: pokemonData.genera.find((v: any) => v.language.name === 'zh-Hant').genus,
    flavorText: pokemonData.flavor_text_entries
      .filter((v: any) => v.language.name === 'zh-Hant')
      .map((v: { flavor_text: string }) => v.flavor_text),
    heightDisplay: pokemonData.height * 10,
    weightDisplay: +(pokemonData.weight / 10).toFixed(2),
  }
}

export const usePokemon = () => {
  onMounted(async () => {
    if (list.value.length > 0) return
    const kantoPokemon = await fetchKantoPokemon()
    const len = kantoPokemon.results.length
    for (let i = 0; i < len; i++) {
      const data = await fetchPokemonDetail(kantoPokemon.results[i].name)
      list.value.push(data)
    }
  })

  const getDetail = async (name: string): Promise<Pokemon> => {
    const res = await fetchPokemonDetail(name)
    return res
  }

  return {
    list,
    getDetail,
  }
}
