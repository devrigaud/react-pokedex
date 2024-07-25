import PokemonCard from './components/PokemonCard'
import styles from './PokemonList.module.css'

const PokemonList = ({ pokemons }) => {
	const renderPokemon = () => {
		let filteredList = pokemons
		return filteredList.map((pokemon) => (
			<PokemonCard
				key={pokemon.url.split('/')[6]}
				id={pokemon.url.split('/')[6]}
				name={pokemon.name}
			/>
		))
	}

	return <div className={styles.pokemonList}>{renderPokemon()}</div>
}

export default PokemonList
