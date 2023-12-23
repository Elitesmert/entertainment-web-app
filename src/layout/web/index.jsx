import {Outlet} from 'react-router-dom'
import Sidebar from './compenents/Sidebar'

const WebLayout = () => {
  return (
    <main className='max-h-full text-white md:pt-6'>
      <Sidebar />
      <div className='h-max'>
        <Outlet />
      </div>
    </main>
  )
}

export default WebLayout
