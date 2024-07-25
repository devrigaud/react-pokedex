import { useNavigate } from 'react-router-dom'
import { lowercase } from '../../utils/textFormat'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

const Header = () => {
	const iconSearch = <FontAwesomeIcon icon={faSearch} />
	const navigate = useNavigate()

	const handleSearch = (e) => {
		e.preventDefault()
		const search = lowercase(e.target.search.value)
		console.log(search)
		if (search !== '' && search !== 'undefined') {
			navigate(`/pokemon/${search}`)
		}
	}

	return (
		<>
			<header className={styles.header}>
				<div className={styles.container}>
					<div className={styles.split}>
						<div className={styles.side}>
							<Link to="/">
								<img
									src="../../../../logo-pokedex.png"
									alt="pokeball"
									className={styles.logo}
								/>
							</Link>
						</div>
						<div className={styles.side}>
							<form onSubmit={handleSearch}>
								<input
									className={styles.searchbar}
									type="search"
									name="search"
									id="search"
									placeholder="Search for a Pokemon..."
								/>
								<button type="submit">{iconSearch}</button>
							</form>
						</div>
					</div>
				</div>
			</header>
		</>
	)
}

export default Header
