import React from 'react'
import logo from '@/assets/svg/Movie.svg'
import face from '@/assets/image/face.jpg'
import {Link} from 'react-router-dom'
import {BiSolidCategory} from 'react-icons/bi'
import {RiFilmFill} from 'react-icons/ri'
import {PiTelevisionFill, PiBookmarkSimpleFill} from 'react-icons/pi'
import {NavLink} from 'react-router-dom'
import classNames from 'classnames'
import {RiLoginBoxFill} from 'react-icons/ri'
const Sidebar = () => {
  const jsonData = localStorage.getItem('localData')
  const parseData = JSON.parse(jsonData)

  return (
    <aside className=''>
      <div
        className='w-full h-14 bg-semiDarkBlue 
       flex justify-between pr-4 pl-6 items-center'
      >
        <div>
          <Link to='/'>
            <img src={logo} alt='logo' className='w-[25px] h-5' />
          </Link>
        </div>
        <div className='flex gap-5'>
          <NavLink
            to='/'
            className={({isActive}) => classNames('text-greyishBlue', {'text-white': !isActive})}
          >
            <BiSolidCategory className='w-5 h-5' />
          </NavLink>
          <NavLink
            to='/movies'
            className={({isActive}) => classNames('text-greyishBlue', {'text-white': !isActive})}
          >
            <RiFilmFill className='w-5 h-5' />
          </NavLink>
          <NavLink
            to='/tv-series'
            className={({isActive}) => classNames('text-greyishBlue', {'text-white': !isActive})}
          >
            <PiTelevisionFill className='w-5 h-5' />
          </NavLink>
          <NavLink
            to='/bookmarked'
            className={({isActive}) => classNames('text-greyishBlue', {'text-white': !isActive})}
          >
            <PiBookmarkSimpleFill className='w-5 h-5' />
          </NavLink>
        </div>
        {parseData ? (
          <div className='rounded-full border border-white overflow-clip '>
            <Link to='/login'>
              <img src={face} alt='logo' className='w-6 h-6' />
            </Link>
          </div>
        ) : (
          <Link to='/login'>
            <RiLoginBoxFill className='w-5 h-5 cursor-pointer' />
          </Link>
        )}
      </div>
    </aside>
  )
}

export default Sidebar
