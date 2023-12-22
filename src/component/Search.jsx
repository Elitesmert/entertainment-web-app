import {IoIosSearch} from 'react-icons/io'
import React, {useState} from 'react'
import classNames from 'classnames'
import {movies} from '@/data/movies'

const Search = ({handleSearchResults, handleSearchText}) => {
  const [search, setSearch] = useState('')
  const [isFocus, setIsFocus] = useState(false)
  const handleSearch = (e) => {
    const searchTerm = e.target.value
    handleSearchText(searchTerm)
    setSearch(searchTerm)

    const filteredData = movies.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    handleSearchResults(filteredData)
  }

  return (
    <div className='w-full flex gap-6 items-center h-8 mb-[34px] px-4'>
      <IoIosSearch className='w-8 h-8' />
      <div className='relative w-full'>
        <input
          type='text'
          className='placeholder:text-greyishBlue flex placeholder:typographyHXSM focus:outline-none caret-lightRed typographyHXSM bg-transparent w-full '
          placeholder='Search for movies or TV series '
          value={search}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={handleSearch}
        />
        <div
          className={classNames(
            'absolute w-full h-[1px] bottom-0 transition-all duration-300 ease-out',
            {
              'bg-white !-bottom-5': isFocus && search.length > 2,
              'bg-lightRed !-bottom-5': isFocus && search.length < 3,
            }
          )}
        >
          <p className='text-lightRed'>
            {isFocus && search.length < 3 ? 'Type at least 3 characters to search' : ''}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Search
