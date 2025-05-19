// components/MainSlider.js
import React from 'react';
import '../styles/mainBanner.css';

// Swiper React 컴포넌트
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
// Swiper 기본 스타일과 모듈별 스타일
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { slides } from "../data/slides";

// 메인 배너 슬라이드
export default function MainSlider() {

  return (
    <div class="slider" style={{ background: '#061d3d' }}>

      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        loop={false}
        slidesPerView={1}
        spaceBetween={0}
        effect="fade"
        pagination={{ type: 'bullets', clickable: true }}
        autoplay={{ delay: 4000 }}
        className="slider"
      >
        {slides.map((src, idx) => (
          <SwiperSlide key={idx}>
            <img src={src} alt={`banner-${idx}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

  );
}
