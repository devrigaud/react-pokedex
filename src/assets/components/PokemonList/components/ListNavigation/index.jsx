import styles from './ListNavigation.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faHouse,
	faChevronRight,
	faChevronLeft
} from '@fortawesome/free-solid-svg-icons'

const ListNavigation = ({ urlPrev, urlNext, listNavigate }) => {
	const iconHome = <FontAwesomeIcon icon={faHouse} />
	const iconNext = <FontAwesomeIcon icon={faChevronRight} />
	const iconPrev = <FontAwesomeIcon icon={faChevronLeft} />

	const handleNavigatePrev = () => {
		listNavigate(urlPrev)
	}
	const handleNavigateNext = () => {
		listNavigate(urlNext)
	}
	const handleNavigateFirst = () => {
		listNavigate('https://pokeapi.co/api/v2/pokemon')
	}

	if (!urlPrev && !urlNext) {
		return null
	}

	if (!urlPrev) {
		return (
			<div className={styles.listNavigation}>
				<button onClick={handleNavigateNext}>{iconNext}</button>
			</div>
		)
	}

	if (!urlNext) {
		return (
			<div className={styles.listNavigation}>
				<button onClick={handleNavigatePrev}>{iconPrev}</button>
			</div>
		)
	}

	return (
		<div className={styles.listNavigation}>
			<button onClick={handleNavigateFirst}>{iconHome}</button>
			<button onClick={handleNavigatePrev}>{iconPrev}</button>
			<button onClick={handleNavigateNext}>{iconNext}</button>
		</div>
	)
}

export default ListNavigation
