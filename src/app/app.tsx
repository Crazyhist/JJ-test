import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { HomePage } from '@/pages/home'
import { Layout } from '@/pages/layout'

import { pathKeys } from '@/shared/router'

const browserRouter = createBrowserRouter([
	{
		children: [
			{
				path: pathKeys.root,
				element: <Layout />,
				children: [
					{
						path: pathKeys.root,
						element: <HomePage />,
					},
				],
			},
		],
	},
])

function App() {
	return <RouterProvider router={browserRouter} />
}

export default App
