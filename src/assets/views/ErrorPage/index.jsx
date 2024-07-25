import Header from '../../components/Header'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
	return (
		<div>
			<Header />
			<h1>Something went wrong!</h1>
			<Link to="/">Go back to the home page</Link>
		</div>
	)
}

export default ErrorPage
