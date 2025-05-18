// src/components/PhotoSwiper.js
import '../styles/newsSlider.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export default function PhotoSwiper({
  slides = [],
  spaceBetween = 10,
  slidesPerView = 4,
  slidesPerGroup = 1,
  loop = false,
  effect = "fade",
  autoplay = { delay: 4000 },
  pagination = { clickable: true },
  showNavigation = true,
  speed = 800
}) {
  return (
    <Swiper
      modules={[
        Pagination, 
        Autoplay, 
        ...(effect === 'fade' ? [EffectFade] : []),
        ...(showNavigation ? [Navigation] : [])
      ]}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      slidesPerGroup={slidesPerGroup}
      loop={loop}
      effect={effect}
      autoplay={autoplay}
      pagination={pagination}
      speed={speed}
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
          {(slide.title || slide.date)  && (
          <a href="#" className="txt">
            <strong className="title">{slide.title}</strong>
            <span className="date">{slide.date}</span>
          </a>
          )}
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
