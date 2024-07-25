import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { capitalize } from '../../../../utils/textFormat'
import { fetchPokemonDetails } from '../../../../utils/fetch'
import styles from './PokemonCard.module.css'

const PokemonCard = ({ name, id }) => {
	const [isLoading, setIsLoading] = useState(true)
	const [pokemonDetails, setPokemonDetails] = useState(null)

	const loadDetails = () => {
		fetchPokemonDetails(name)
			.then((data) => {
				setPokemonDetails(data)
				setIsLoading(false)
			})
			.catch((error) => {
				console.error('Error fetching Pokemon data:', error)
				setIsLoading(false)
			})
	}

	useEffect(() => {
		loadDetails()
	}, [])

	if (isLoading) {
		return (
			<div className={styles.loading}>
				<img src="../../../../../pokeball.png" alt="pokeball" />
			</div>
		)
	}

	const renderPokemonCard = (data) => {
		return (
			<div className={styles.pokemonCard}>
				<Link to={`/pokemon/${data.name}`}>
					<img
						src={data.sprites.other.dream_world.front_default}
						alt={data.name}
					/>
				</Link>
				<h3>
					<div className={styles.id}>#0{id} </div>
					<Link to={`/pokemon/${data.name}`}>{capitalize(data.name)}</Link>
				</h3>
				<div className={styles.types}>
					{data.types.map((type, index) => (
						<div
							key={index}
							className={`${styles.type} ${type.type.name}`}
							key={type.slot}
						>
							{capitalize(type.type.name)}
						</div>
					))}
				</div>
			</div>
		)
	}

	return <>{renderPokemonCard(pokemonDetails)}</>
}

export default PokemonCard
