import React from 'react';
import '../styles/newsSlider.css';
// Swiper React 컴포넌트
import { Swiper, SwiperSlide } from 'swiper/react';
// 모듈은 반드시 swiper/modules에서 가져옵니다
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
// Swiper 기본 스타일과 모듈별 스타일
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { photos } from "../data/photos";

// '다이노스 포토'란 슬라이더
export default function NewsSlider() {

  return (
    <section className="news">
      <div class="con">
        <a href="#" class="more"><span class="ico ico-more">더보기</span></a>
        <div class="slider">
          {/* navigation className */}
          <div className="ico ico-next"></div>
          <div className="ico ico-prev"></div>
          <div class="gall">
            <Swiper
              // 사용하려는 모듈 등록
              modules={[Navigation, Pagination, Autoplay, EffectFade]}
              loop={false}
              slidesPerView={4}
              spaceBetween={10}
              slidesPerGroup={1}
              navigation={{
                prevEl: ".ico.ico-prev",
                nextEl: ".ico.ico-next"
              }}
              pagination={{ type: 'bullets', clickable: true }}
              autoplay={{ delay: 4000 }}
              className="news-slider"
            >
              {photos.map((src, idx) => (
                <SwiperSlide key={idx}>
                  <img src={src.img} alt={`photo-${idx}`} />
                  <a href="#" className="txt">
                    <strong className="title">{src.title}</strong>
                    <span className="date">{src.date}</span>
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}