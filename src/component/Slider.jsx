import React from 'react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import {Swiper, SwiperSlide} from 'swiper/react'
import {useState} from 'react'
import Card from './Card'
import {movies} from '@/data/movies'

const Slider = () => {
  const [swiperRef, setSwiperRef] = useState(null)

  const handleBookmarkChange = (index, newBookmarkState) => {
    const newData = [...movies]
    newData[index].isBookmarked = newBookmarkState
  }

  return (
    <div className='mb-[39px]'>
      <h1 className='typographyHLL mb-[25px]'>Trending</h1>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={'auto'}
        centeredSlides={false}
        loop={true}
        spaceBetween={40}
        className='mySwiper'
      >
        {movies.map(
          (item, index) =>
            item.isTrend && (
              <SwiperSlide className='w-[470px]' key={index}>
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
