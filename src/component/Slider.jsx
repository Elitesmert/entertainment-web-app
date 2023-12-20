import React from 'react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import {Swiper, SwiperSlide} from 'swiper/react'
import {useState} from 'react'
import Card from './Card'

const Slider = () => {
  const [swiperRef, setSwiperRef] = useState(null)
  const data = [
    {
      id: 1,
      title: 'Beyond Earth',
      year: 2019,
      ageRestriction: 'PG',
      presentation: 'Movie',
      description:
        'The world is stunned when a group of time travelers arrive from the year 2051 to deliver an urgent message: Thirty years in the future, mankind is losing a global war against a deadly alien species.',
      image: './image/beyond-earth.png',
      isBookmarked: false,
    },
    {
      id: 2,
      title: 'Bottom Gear',
      year: 2021,
      ageRestriction: 'PG',
      presentation: 'Movie',
      description:
        'The world is stunned when a group of time travelers arrive from the year 2051 to deliver an urgent message: Thirty years in the future, mankind is losing a global war against a deadly alien species.',
      image: 'public/image/bottom-gear.png',
      isBookmarked: false,
    },
    {
      id: 3,
      title: 'Undiscovered Cities',
      year: 2019,
      ageRestriction: 'E',
      presentation: 'TV Series',
      description:
        'The world is stunned when a group of time travelers arrive from the year 2051 to deliver an urgent message: Thirty years in the future, mankind is losing a global war against a deadly alien species.',
      image: 'public/image/undiscovered-cities.png',
      isBookmarked: false,
    },
    {
      id: 4,
      title: '1998',
      year: 2021,
      ageRestriction: '18+',
      presentation: 'Movie',
      description:
        'The world is stunned when a group of time travelers arrive from the year 2051 to deliver an urgent message: Thirty years in the future, mankind is losing a global war against a deadly alien species.',
      image: 'public/image/1998.png',
      isBookmarked: false,
    },
    {
      id: 5,
      title: 'Dark Side Of The Moon',
      year: 2018,
      ageRestriction: 'PG',
      presentation: 'TV Series',
      description:
        'The world is stunned when a group of time travelers arrive from the year 2051 to deliver an urgent message: Thirty years in the future, mankind is losing a global war against a deadly alien species.',
      image: 'public/image/dark-side-of-the-moon.png',
      isBookmarked: false,
    },
  ]

  const handleBookmarkChange = (index, newBookmarkState) => {
    const newData = [...data]
    newData[index].isBookmarked = newBookmarkState
  }

  return (
    <div>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={'auto'}
        centeredSlides={false}
        loop={true}
        spaceBetween={40}
        className='mySwiper'
      >
        {data.map((item, index) => (
          <SwiperSlide className='w-[470px]' key={index}>
            <Card
              data={item}
              initialBookmarked={item.isBookmarked}
              handleBookmark={(newBookmarkState) => handleBookmarkChange(index, newBookmarkState)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Slider
