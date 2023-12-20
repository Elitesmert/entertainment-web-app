import React from 'react'
import Sidebar from './compenents/Sidebar'
import {Outlet} from 'react-router-dom'
import Search from '@/component/Search'

const WebLayout = () => {
  return (
    <main className='max-h-full text-white pl-[25px] pr-6'>
      <Sidebar />
      <Search />
      <div className='h-[1500px]'>
        <Outlet />
      </div>
    </main>
  )
}

export default WebLayout
