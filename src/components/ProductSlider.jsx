
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { FreeMode, Autoplay } from 'swiper/modules';

import data from '../assets/collectionsData.json';
import Card from './Card';
import Heading from './Heading';

export default function ProductSlider({ addToCart }) {
  return (
    <>
      <div className="my-20">
        <Heading text={"new"} text1={"arrivals"} />
      </div>

      <Swiper
        spaceBetween={30}
        freeMode={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          
          0: {
            slidesPerView: 1.2,
            spaceBetween: 15,
          },

          
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },

          
          768: {
            slidesPerView: 3,
            spaceBetween: 25,
          },

     
          1024: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        modules={[FreeMode, Autoplay]}
        className="mySwiper mb-20"
      >
        {data.slice(0, 10).map((item) => (
          <SwiperSlide key={item.id}>
            <Card item={item} addToCart={() => addToCart(item)} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
