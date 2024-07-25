import { useParams } from 'react-router-dom'
import PokemonDetail from '../../components/PokemonDetail'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import styles from './Detail.module.css'

const Detail = () => {
	const { pokemonName } = useParams()
	return (
		<>
			<Header />
			<PokemonDetail name={pokemonName} />
			<Footer />
		</>
	)
}

export default Detail
