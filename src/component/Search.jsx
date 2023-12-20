import {IoIosSearch} from 'react-icons/io'
import React, {useState} from 'react'
import classNames from 'classnames'

const Search = () => {
  const [search, setSearch] = useState('')
  const [isFocus, setIsFocus] = useState(false)
  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div className='w-full flex gap-6 items-center h-8 mt-[34px]'>
      <IoIosSearch className='w-8 h-8' />
      <div className='relative w-full'>
        <input
          type='text'
          className='placeholder:text-greyishBlue flex placeholder:typographyHML focus:outline-none caret-lightRed typographyHML bg-transparent w-full '
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
              'bg-white !-bottom-5': isFocus && search.length > 0,
            }
          )}
        />
      </div>
    </div>
  )
}

export default Search
