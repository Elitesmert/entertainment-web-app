import WebLayout from '@/layout/web'
import NotFound from '@/pages/NotFound'
import Home from '@/pages/Home'
import UnderConstruction from '@/pages/UnderConstruction'
import {createBrowserRouter} from 'react-router-dom'
import Movies from '@/pages/Movies'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <WebLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/movies',
        element: <Movies />,
      },
    ],
  },
])

export default routes
