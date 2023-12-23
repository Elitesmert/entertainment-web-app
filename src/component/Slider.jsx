import {movies} from '@/data/movies'
import {useState} from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import {Swiper, SwiperSlide} from 'swiper/react'
import Card from './Card'

const Slider = () => {
  const [swiperRef, setSwiperRef] = useState(null)

  const handleBookmarkChange = (index, newBookmarkState) => {
    const newData = [...movies]
    newData[index].isBookmarked = newBookmarkState
  }

  return (
    <div className='mb-[39px]'>
      <h1 className='typographyHLL mb-[25px] px-4 xs:px-6'>Trending</h1>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={'auto'}
        centeredSlides={false}
        loop={true}
        spaceBetween={16}
        className='mySwiper px-4 xs:px-6'
      >
        {movies.map(
          (item, index) =>
            item.isTrend && (
              <SwiperSlide className='w-[240px] xs:w-[470px]' key={index}>
                <Card
                  data={item}
                  initialBookmarked={item.isBookmarked}
                  handleBookmark={(newBookmarkState) =>
                    handleBookmarkChange(index, newBookmarkState)
                  }
                />
              </SwiperSlide>
            )
        )}
      </Swiper>
    </div>
  )
}

export default Slider
