import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashbord from './components/layouts/Dashboard/dashboard'
import Dashboard from '/src/pages/Dashboard/dashboard'
import Orders from '/src/pages/Orders/orders'
import Products from '/src/pages/Products/products'
import Other from '/src/pages/Other/other'
import Login from './pages/login/login'
import Add from './pages/add/add'
import Category from './pages/category/category'
import Brands from './pages/brands/brands'
import Edit from './pages/edit/edit'

function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Dashbord />,
			children: [
				{
					path: '/',
					index: true,
					element: <Dashboard />,
				},
				{
					path: '/orders',
					element: <Orders />,
				},
				{
					path: '/products',
					element: <Products />,
				},
				{
					path: '/other',
					element: <Other />,
				},
				{
					path: '/addProduct',
					element: <Add />,
				},
				{
					path: '/category',
					element: <Category />,
				},
				{
					path: '/brands',
					element: <Brands />,
				},
				{
					path: '/edit/:id',
					element: <Edit />,
				},
			],
		},
		{
			path: '/login',
			element: <Login />,
		},
	])
	return <RouterProvider router={router} />
}

export default App
