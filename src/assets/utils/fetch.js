async function fetchAllPokemon(url) {
	const targetUrl = url ? url : `https://pokeapi.co/api/v2/pokemon`
	try {
		const response = await fetch(targetUrl)
		const data = await response.json()
		return data
	} catch (error) {
		console.error('Error fetching data:', error)
		return {}
	}
}

async function fetchPokemonDetails(pokemonName) {
	try {
		const response = await fetch(
			`https://pokeapi.co/api/v2/pokemon/${pokemonName}`
		)
		const data = await response.json()
		return data
	} catch (error) {
		console.error('Error fetching data:', error)
		return {}
	}
}

export { fetchAllPokemon, fetchPokemonDetails }
