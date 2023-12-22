import WebLayout from '@/layout/web'
import NotFound from '@/pages/NotFound'
import Home from '@/pages/Home'
import UnderConstruction from '@/pages/UnderConstruction'
import {createBrowserRouter} from 'react-router-dom'
import Movies from '@/pages/Movies'
import TVSeries from '@/pages/TVSeries'
import Bookmarked from '@/pages/Bookmarked'

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
      {
        path: '/tv-series',
        element: <TVSeries />,
      },
      {
        path: '/bookmarked',
        element: <Bookmarked />,
      },
    ],
  },
])

export default routes
