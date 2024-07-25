import Header from '../../components/Header'
import PokemonList from '../../components/PokemonList'
import Footer from '../../components/Footer'
import { fetchAllPokemon } from '../../utils/fetch'
import { useState, useEffect } from 'react'
import ListNavigation from '../../components/PokemonList/components/ListNavigation'

const Type = () => {
	const [pokemonList, setPokemonList] = useState(null)
	const [isLoading, setIsLoading] = useState(true)
	const [urlNext, setUrlNext] = useState(null)
	const [urlPrev, setUrlPrev] = useState(null)

	const loadList = (url) => {
		fetchAllPokemon(url)
			.then((data) => {
				setPokemonList(data.results)
				setUrlNext(data.next)
				setUrlPrev(data.previous)
				setIsLoading(false)
			})
			.catch((error) => {
				console.error('Error fetching Pokemon data:', error)
				setIsLoading(false)
			})
	}

	useEffect(() => {
		loadList()
	}, [])

	const renderPokemonList = () => {
		if (isLoading) {
			return (
				<div className="loading">
					<img src="../../../../../pokeball.png" alt="pokeball" />
				</div>
			)
		}
		return <PokemonList pokemons={pokemonList} />
	}

	const handleNavigation = (url) => {
		setIsLoading(true)
		loadList(url)
	}

	return (
		<>
			<Header />
			{renderPokemonList()}
			<ListNavigation
				urlPrev={urlPrev}
				urlNext={urlNext}
				listNavigate={handleNavigation}
			/>
			<Footer />
		</>
	)
}

export default Type
