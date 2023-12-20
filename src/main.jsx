import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from 'react-router-dom'
import {NextUIProvider} from '@nextui-org/react'
import routes from './routes'
import '@/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <NextUIProvider>
    <RouterProvider router={routes} />
  </NextUIProvider>
)
