import React from 'react'
import logo from '@/assets/svg/Movie.svg'
import face from '@/assets/image/face.jpg'
import {Link} from 'react-router-dom'
import {BiSolidCategory} from 'react-icons/bi'
import {RiFilmFill} from 'react-icons/ri'
import {PiTelevisionFill, PiBookmarkSimpleFill} from 'react-icons/pi'
import {NavLink} from 'react-router-dom'
import classNames from 'classnames'

const Sidebar = () => {
  return (
    <aside className='pt-8'>
      <div className='w-full h-[72px] bg-semiDarkBlue rounded-20 flex justify-between pr-4 pl-6 items-center'>
        <div>
          <Link to='/'>
            <img src={logo} alt='logo' className='w-8 h-6' />
          </Link>
        </div>
        <div className='flex gap-8'>
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
            to='/'
            className={({isActive}) => classNames('text-greyishBlue', {'text-white': !isActive})}
          >
            <PiTelevisionFill className='w-5 h-5' />
          </NavLink>
          <NavLink
            to='/'
            className={({isActive}) => classNames('text-greyishBlue', {'text-white': !isActive})}
          >
            <PiBookmarkSimpleFill className='w-5 h-5' />
          </NavLink>
        </div>
        <div className='rounded-full border border-white overflow-clip '>
          <Link to='/'>
            <img src={face} alt='logo' className='w-8 h-8' />
          </Link>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar