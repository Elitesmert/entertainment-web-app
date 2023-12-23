import { Outlet } from 'react-router-dom'
import Sidebar from './compenents/Sidebar'

const WebLayout = () => {
  return (
    <main className='max-h-full text-white '>
      <Sidebar />
      <div className='h-max'>
        <Outlet />
      </div>
    </main>
  )
}

export default WebLayout
