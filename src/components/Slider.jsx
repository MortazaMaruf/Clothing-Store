
import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'

import slide1 from '../Images/slide1.jpg'
import slide2 from '../Images/slide2.jpg'
import slide3 from '../Images/slide3.jpg'
import slide4 from '../Images/slide4.jpg'
import slide5 from '../Images/slide5.jpg'
import slide6 from '../Images/slide6.jpg'

export default function Slider() {
  const swiperRef = useRef(null)
  const [direction, setDirection] = useState('forward')

  const images = [slide1, slide2, slide3, slide4, slide5, slide6]

  const handleSlideChange = (swiper) => {
    if (swiper.isEnd && direction === 'forward') {
      swiper.autoplay.stop()
      setDirection('backward')
      swiper.params.autoplay.reverseDirection = true
      swiper.autoplay.start()
    }

    if (swiper.isBeginning && direction === 'backward') {
      swiper.autoplay.stop()
      setDirection('forward')
      swiper.params.autoplay.reverseDirection = false
      swiper.autoplay.start()
    }
  }

  return (
    <Swiper
      onSwiper={(swiper) => (swiperRef.current = swiper)}
      onSlideChange={handleSlideChange}
      speed={1000}
      allowTouchMove={false}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
        reverseDirection: false,
      }}
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 25,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
      modules={[Autoplay]}
      className="mySwiper"
    >
      {images.map((src, index) => (
        <SwiperSlide key={index}>
          <img
            src={src}
            alt={`Slide ${index + 1}`}
            className="
              w-full
              h-[200px]
              sm:h-[260px]
              md:h-80
              lg:h-[380px]
              object-cover
              rounded-xl
            "
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
