import React from 'react'

// import Swiper components and styles
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'


import { news } from '../../data/news'
import { Link } from 'react-router-dom'

const News = () => {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}        
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1180: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {
            news.map((item, index) => (
                <SwiperSlide
                     key={index}
                >
                    <div className="">
                        {/* content */}
                        <div className="py-4">
                            <Link to="/">
                                <h3>{item.title}</h3>
                            </Link>
                            
                        </div>
                    </div>
                    
                </SwiperSlide>
            ))
        }        
      </Swiper>
    </div>
  )
}

export default News
