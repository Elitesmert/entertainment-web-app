import {GoBookmark, GoBookmarkFill, GoDotFill} from 'react-icons/go'
import {RiFilmFill} from 'react-icons/ri'
import React, {useState} from 'react'

const Card = ({data, initialBookmarked, handleBookmark}) => {
  const [bookmarked, setBookmarked] = useState(initialBookmarked)

  const handleBookmarkClick = () => {
    setBookmarked(!bookmarked)
    if (handleBookmark) {
      handleBookmark(!bookmarked)
    }
  }
  return (
    <div className='h-[230px] w-[470px] relative rounded-lg overflow-clip'>
      <div
        className='w-8 h-8 rounded-full bg-darkBlue/50 absolute flex items-center justify-center right-4 top-4 hover:bg-white group'
        onClick={handleBookmarkClick}
      >
        {bookmarked ? (
          <GoBookmarkFill className='group-hover:text-darkBlue' />
        ) : (
          <GoBookmark className='group-hover:text-darkBlue' />
        )}
      </div>
      <div className='absolute w-full h-[100xp] bottom-0 p-6 bg-gradient-to-t from-black/75 to-black/0'>
        <div className='flex gap-2 items-center text-gray-300 h-[19px]'>
          <p className='typographyBML'>{data.year}</p>
          <GoDotFill className='h-[3px] w-[3px]' />
          <div className='flex gap-[6px] items-center'>
            <RiFilmFill className='w-3 h-3' />
            <p className='typographyBML'>{data.presentation}</p>
          </div>
          <GoDotFill className='h-[3px] w-[3px]' />
          <p className='typographyBML'>{data.ageRestriction}</p>
        </div>
        <div>
          <h1 className='typographyHSM'>{data.title}</h1>
        </div>
      </div>
      <img src={data.image} alt='' className='w-full h-full object-cover' />
    </div>
  )
}

export default Card
