import CardMini from '@/component/CardMini'
import Search from '@/component/Search'
import {movies} from '@/data/movies'
import {useState} from 'react'

const Bookmarked = () => {
  const [searchResults, setSearchResults] = useState(null)
  const [searchText, setSearchText] = useState('')
  const handleBookmarkChange = (index, newBookmarkState) => {
    const newData = [...movies]
    newData[index].isBookmarked = newBookmarkState
  }
  return (
    <div className='pt-6 xs:pt-8'>
      <Search
        handleSearchResults={(handleSearchResults) => setSearchResults(handleSearchResults)}
        handleSearchText={(handleSearchText) => setSearchText(handleSearchText)}
      />
      <div className='px-4 xs:px-6'>
        <h1 className='text-[20px] font-light mb-6'>
          {searchText.length > 2
            ? `Found ${
                searchResults.filter((item) => item.presentation === 'Movie').length
              } results for '${searchText}' from your Bookmarked Movies`
            : 'Bookmarked Movies'}
        </h1>
        <div className='grid grid-cols-auto-fit-164 xs:grid-cols-auto-fit-220 gap-y-6 gap-x-[15px] xs:gap-x-[29px] justify-items-center mb-6 xs:mb-12'>
          {searchText.length < 3
            ? movies
                .filter((item) => item.presentation === 'Movie' && item.isBookmarked)
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
                .filter((item) => item.presentation === 'Movie')
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
        <h1 className='text-[20px] font-light mb-6'>
          {searchText.length > 2
            ? `Found ${
                searchResults.filter((item) => item.presentation === 'TV Series').length
              } results for '${searchText}' from your TV Series Bookmarks`
            : 'Bookmarked TV Series'}
        </h1>
        <div className='grid grid-cols-auto-fit-164 xs:grid-cols-auto-fit-220 gap-y-6 gap-x-[15px] xs:gap-x-[29px] justify-items-center'>
          {searchText.length < 3
            ? movies
                .filter((item) => item.presentation === 'TV Series' && item.isBookmarked)
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

export default Bookmarked
