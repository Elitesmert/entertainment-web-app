import React from 'react'
import Thumbnail from './Thumbnail'
import {GoBookmark, GoBookmarkFill, GoDotFill} from 'react-icons/go'
import {RiFilmFill} from 'react-icons/ri'
import {useState} from 'react'
const CardMini = ({data, initialBookmarked, handleBookmark}) => {
  const [bookmarked, setBookmarked] = useState(initialBookmarked)

  const handleBookmarkClick = () => {
    setBookmarked(!bookmarked)
    if (handleBookmark) {
      handleBookmark(!bookmarked)
    }
  }
  return (
    <div className='w-[220px] flex flex-col gap-2'>
      <div className='relative'>
        <Thumbnail image={data.image} />
        <div
          className='w-8 h-8 rounded-full bg-darkBlue/50 absolute flex items-center justify-center right-4 top-4 hover:bg-white group'
          onClick={handleBookmarkClick}
        >
          {bookmarked ? (
            <GoBookmarkFill className='group-hover:text-darkBlue cursor-pointer' />
          ) : (
            <GoBookmark className='group-hover:text-darkBlue cursor-pointer' />
          )}
        </div>
      </div>
      <div>
        <div className='w-full h-[100xp] bottom-0'>
          <div className='flex gap-2 items-center text-gray-300 h-[19px]'>
            <p className='typographyBSL'>{data.year}</p>
            <GoDotFill className='h-[3px] w-[3px]' />
            <div className='flex gap-[6px] items-center'>
              <RiFilmFill className='w-3 h-3' />
              <p className='typographyBSL'>{data.presentation}</p>
            </div>
            <GoDotFill className='h-[3px] w-[3px]' />
            <p className='typographyBSL'>{data.ageRestriction}</p>
          </div>
          <div>
            <h1 className='typographyHXSM'>{data.title}</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardMini
