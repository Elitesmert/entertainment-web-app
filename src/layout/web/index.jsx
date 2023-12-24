import {Outlet} from 'react-router-dom'
import Sidebar from './compenents/Sidebar'

const WebLayout = () => {
  return (
    <main className='text-white xs:pt-6 md:grid md:grid-cols-main'>
      <Sidebar />
      <div className='overflow-auto'>
        <Outlet />
      </div>
    </main>
  )
}

export default WebLayout
