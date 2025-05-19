// src/components/MainSlider.js
import React from 'react';
import '../styles/mainBanner.css';

// Swiper React 컴포넌트
import { Swiper, SwiperSlide } from 'swiper/react';
// 모듈은 반드시 swiper/modules에서 가져옵니다
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
// Swiper 기본 스타일과 모듈별 스타일
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { slides } from "../data/slides";

export default function MainSlider() {

  return (
    <div class="slider" style={{ background: '#061d3d' }}>

      <Swiper
        // 사용하려는 모듈 등록
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        loop={false}
        slidesPerView={1}
        spaceBetween={0}
        effect="fade"
        pagination={{ type: 'bullets', clickable: true }} // 페이지네이션 dot 설정
        autoplay={{ delay: 4000 }}       // 자동 재생 설정
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
