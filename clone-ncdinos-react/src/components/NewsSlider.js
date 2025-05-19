// components/NewsSlider.js
import React from 'react';
import '../styles/newsSlider.css';
// Swiper React 컴포넌트
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
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
          <div className=".news ico ico-next"></div>
          <div className=".news ico ico-prev"></div>
          <div class="gall">
            <Swiper
              modules={[Navigation, Pagination, Autoplay, EffectFade]}
              loop={false}
              slidesPerView={4}
              spaceBetween={10}
              slidesPerGroup={1}
              navigation={{
                prevEl: ".news .ico.ico-prev",
                nextEl: ".news .ico.ico-next"
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