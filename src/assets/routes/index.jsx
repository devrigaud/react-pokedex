import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../views/Home'
import ErrorPage from '../views/ErrorPage'
import Detail from '../views/Detail'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		errorElement: <ErrorPage />
	},
	{
		path: '/pokemon/:pokemonName',
		element: <Detail />,
		errorElement: <ErrorPage />
	},
	{
		path: '/type/:typeName',
		element: <Home />,
		errorElement: <ErrorPage />
	}
])

const MyRoutes = () => <RouterProvider router={router} />

export default MyRoutes
