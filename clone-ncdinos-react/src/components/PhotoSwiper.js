// src/components/PhotoSwiper.js
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function PhotoSwiper({
  slides = [],
  spaceBetween = 10,
  slidesPerView = 4,
  slidesPerGroup = 1,
  loop = false,
  autoplay = { delay: 4000 },
  pagination = { clickable: true },
  showNavigation = true,
}) {
  return (
    <Swiper
      modules={[Pagination, Autoplay, ...(showNavigation ? [Navigation] : [])]}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      slidesPerGroup={slidesPerGroup}
      loop={loop}
      autoplay={autoplay}
      pagination={pagination}
      navigation={
        showNavigation
          ? { nextEl: '.ico-next', prevEl: '.ico-prev' }
          : false
      }
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <a href="#" className="img">
            <img src={slide.img} alt="" />
          </a>
          <a href="#" className="txt">
            <strong className="title">{slide.title}</strong>
            <span className="date">{slide.date}</span>
          </a>
        </SwiperSlide>
      ))}

      {showNavigation && (
        <>
          <div className="ico ico-next"></div>
          <div className="ico ico-prev"></div>
        </>
      )}
    </Swiper>
  );
}
