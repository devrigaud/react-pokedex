import { useState, useEffect } from 'react'
import styles from './PokemonDetail.module.css'
import { fetchPokemonDetails } from '../../utils/fetch'
import { capitalize } from '../../utils/textFormat'

const PokemonDetail = ({ name }) => {
	const [isLoading, setIsLoading] = useState(true)
	const [pokemonDetails, setPokemonDetails] = useState(null)
	const [error, setError] = useState(null)

	const loadDetails = () => {
		fetchPokemonDetails(name)
			.then((data) => {
				setPokemonDetails(data)
				setIsLoading(false)
				console.log(data)
			})
			.catch((error) => {
				console.error('Error fetching Pokemon data:', error)
				setError(error)
				setIsLoading(false)
			})
	}

	useEffect(() => {
		loadDetails()
	}, [name])

	if (isLoading) {
		return (
			<div className="loading">
				<img src="../../../../../pokeball.png" alt="pokeball" />
				<span>Loading...</span>
			</div>
		)
	}

	const renderPokemonDetail = (pokemon) => {
		if (error) {
			return <div>Error: {error.message}</div>
		}
		return (
			<div className={styles.pokemonDetail}>
				<div className={styles.split}>
					<div className={styles.side}>
						<img
							src={pokemon.sprites.other.dream_world.front_default}
							alt={pokemon.name}
						/>
					</div>
					<div className={styles.side}>
						<h3 className={styles.title}>
							{capitalize(pokemon.name)}
							<span> #0{pokemon.id}</span>
						</h3>
						<div className={styles.types}>
							{pokemon.types.map((type) => (
								<span
									className={`${styles.type} ${type.type.name}`}
									key={type.slot}
								>
									{capitalize(type.type.name)}
								</span>
							))}
						</div>
						<div className={styles.info}>
							<div className={styles.infoRow}>
								<span>
									<strong>Abilities:</strong>
								</span>
								<ul>
									{pokemon.abilities.map((ab) => (
										<li key={ab.slot}>{capitalize(ab.ability.name)}</li>
									))}
								</ul>
							</div>
							<div className={styles.infoRow}>
								<span>
									<strong>Height:</strong>
								</span>
								<span>
									<span>{(pokemon.height * 0.328084).toFixed(2)} ft.</span>
								</span>
							</div>
							<div className={styles.infoRow}>
								<span>
									<strong>Weight:</strong>
								</span>
								<span>{pokemon.weight} lbs.</span>
							</div>
						</div>
						<div className={styles.stats}>
							<h4>
								Stats <span>200%</span>
							</h4>
							<div className={styles.statsWrapper}>
								{pokemon.stats.map((stat) => (
									<div key={stat.stat.name} className={styles.stat}>
										<span
											className={styles.statusBar}
											style={{ width: stat.base_stat / 2 + '%' }}
										></span>
										<span
											className={styles.statName}
											style={{ width: stat.base_stat / 2 + '%' }}
										>
											{capitalize(stat.stat.name)}
											<span>{stat.base_stat}%</span>
										</span>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}

	return <>{renderPokemonDetail(pokemonDetails)}</>
}

export default PokemonDetail
