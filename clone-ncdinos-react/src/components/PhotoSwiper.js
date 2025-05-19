// src/components/PhotoSwiper.js
import React from 'react';
import '../styles/newsSlider.css'
// Swiper React 컴포넌트
import { Swiper, SwiperSlide } from 'swiper/react';
// 모듈은 반드시 swiper/modules에서 가져옵니다
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
// Swiper 기본 스타일과 모듈별 스타일
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
