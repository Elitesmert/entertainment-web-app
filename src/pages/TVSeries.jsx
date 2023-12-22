import Search from '@/component/Search'
import React from 'react'
import {useState} from 'react'
import {movies} from '@/data/movies'
import CardMini from '@/component/CardMini'

const TVSeries = () => {
  const [searchResults, setSearchResults] = useState(null)
  const [searchText, setSearchText] = useState('')
  const handleBookmarkChange = (index, newBookmarkState) => {
    const newData = [...movies]
    newData[index].isBookmarked = newBookmarkState
  }
  return (
    <div className='pt-6'>
      <Search
        handleSearchResults={(handleSearchResults) => setSearchResults(handleSearchResults)}
        handleSearchText={(handleSearchText) => setSearchText(handleSearchText)}
      />
      <div className='px-4'>
        <h1 className='text-[20px] font-light mb-6'>
          {searchText.length > 2
            ? `Found ${
                searchResults.filter((item) => item.presentation === 'TV Series').length
              } results for '${searchText}' from TV Series`
            : 'TV Series'}
        </h1>
        <div className='grid grid-cols-auto-fit-164 gap-y-6 gap-x-[15px] justify-items-center'>
          {searchText.length < 3
            ? movies
                .filter((item) => item.presentation === 'TV Series')
                .map((item, index) => (
                  <CardMini
                    key={index}
                    data={item}
                    initialBookmarked={item.isBookmarked}
                    handleBookmark={(newBookmarkState) =>
                      handleBookmarkChange(index, newBookmarkState)
                    }
                  />
                ))
            : searchResults
                .filter((item) => item.presentation === 'TV Series')
                .map((item, index) => (
                  <CardMini
                    key={index}
                    data={item}
                    initialBookmarked={item.isBookmarked}
                    handleBookmark={(newBookmarkState) =>
                      handleBookmarkChange(index, newBookmarkState)
                    }
                  />
                ))}
        </div>
      </div>
    </div>
  )
}

export default TVSeries
