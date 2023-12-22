import React from 'react'
import {movies} from '@/data/movies'
import CardMini from '@/component/CardMini'

const Recommended = ({searchResults, searchText}) => {
  const handleBookmarkChange = (index, newBookmarkState) => {
    const newData = [...movies]
    newData[index].isBookmarked = newBookmarkState
  }

  return (
    <div className=' px-4'>
      <h1 className='text-base mb-6'>
        {searchText.length > 2
          ? `Found ${searchResults.length} results for '${searchText}'`
          : 'Recommended for you'}
      </h1>
      <div className='grid grid-cols-auto-fit gap-y-6 gap-x-[15px] justify-items-center'>
        {searchText.length < 3
          ? movies
              .filter((item) => item.isTrend !== true)
              .map((item, index) => (
                <CardMini
                  key={index}
                  data={item}
                  handleBookmark={(newBookmarkState) =>
                    handleBookmarkChange(index, newBookmarkState)
                  }
                />
              ))
          : searchResults.map((item, index) => (
              <CardMini
                key={index}
                data={item}
                handleBookmark={(newBookmarkState) => handleBookmarkChange(index, newBookmarkState)}
              />
            ))}
      </div>
    </div>
  )
}

export default Recommended
