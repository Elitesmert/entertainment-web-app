import face from '@/assets/image/face.jpg'
import logo from '@/assets/svg/Movie.svg'
import classNames from 'classnames'
import {BiSolidCategory} from 'react-icons/bi'
import {PiBookmarkSimpleFill, PiTelevisionFill} from 'react-icons/pi'
import {RiFilmFill, RiLoginBoxFill} from 'react-icons/ri'
import {Link, NavLink} from 'react-router-dom'
const Sidebar = () => {
  const jsonData = localStorage.getItem('localData')
  const parseData = JSON.parse(jsonData)

  return (
    <aside className='xs:px-6'>
      <div
        className='w-full h-14 bg-semiDarkBlue 
       flex justify-between pr-4 pl-6 items-center xs:rounded-[10px]'
      >
        <div>
          <Link to='/'>
            <img src={logo} alt='logo' className='w-[25px] h-5 xs:w-8 xs:h-6' />
          </Link>
        </div>
        <div className='flex gap-5 xs:gap-7'>
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
              <img src={face} alt='logo' className='w-6 h-6 xs:w-8 xs:h-8' />
            </Link>
          </div>
        ) : (
          <Link to='/login'>
            <RiLoginBoxFill className='w-5 h-5 xs:w-8 xs:h-8 cursor-pointer' />
          </Link>
        )}
      </div>
    </aside>
  )
}

export default Sidebar
