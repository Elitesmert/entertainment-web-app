import React from 'react'
import Sidebar from './compenents/Sidebar'
import {Outlet} from 'react-router-dom'

const WebLayout = () => {
  return (
    <main className='max-h-full text-white pl-[25px] pr-6'>
      <Sidebar />
      <div className='h-max'>
        <Outlet />
      </div>
    </main>
  )
}

export default WebLayout
