import Search from '@/component/Search'
import Slider from '@/component/Slider'
import {useState} from 'react'
import Recommended from './Recommended'

const Home = () => {
  const [searchResults, setSearchResults] = useState(null)
  const [searchText, setSearchText] = useState('')

  return (
    <div className='pt-6 md:pt-8'>
      <Search
        handleSearchResults={(handleSearchResults) => setSearchResults(handleSearchResults)}
        handleSearchText={(handleSearchText) => setSearchText(handleSearchText)}
      />
      {!searchResults || searchResults.length === 29 || searchText.length < 3 ? <Slider /> : null}
      <Recommended searchResults={searchResults} searchText={searchText} />
    </div>
  )
}

export default Home
