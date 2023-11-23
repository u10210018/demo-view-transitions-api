const list = reactive([])

const fetchPokemonData = async (pokemon: { name: string; url: string }) => {
  const { name } = pokemon
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
  const resJson = await res.json()
  const res2 = await fetch(resJson.species.url)
  const pokemonData = await res2.json()
  return {
    id: pokemonData.id,
    name: pokemonData.names.find((v: any) => v.language.name === 'zh-Hant').name,
    imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonData.id}.png`,
    genera: pokemonData.genera.find((v: any) => v.language.name === 'zh-Hant').genus,
    flavorText: pokemonData.flavor_text_entries
      .filter((v: any) => v.language.name === 'zh-Hant')
      .map((v: { flavor_text: string }) => v.flavor_text),
    height: resJson.height * 10,
    weight: +(resJson.weight / 10).toFixed(2),
  }
}

const fetchKantoPokemon = async () => {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  const resJson = await res.json()
  const len = resJson.results.length
  const list = []
  for (let i = 0; i < len; i++) {
    const data = await fetchPokemonData(resJson.results[i])
    list.push(data)
  }
  return list
}
export const usePokemon = () => {
  onMounted(async () => {
    if (list.length > 0) return
    const res = await fetchKantoPokemon()
    Object.assign(list, res)
  })

  return {
    list,
  }
}
