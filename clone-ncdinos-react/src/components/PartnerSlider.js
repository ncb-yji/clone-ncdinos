// components/PartnerSlider.js
import React from "react";
import '../styles/partnerSlider.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { partners } from "../data/partners";

function PartnerSlider() {
  return (
    <section className="partner">
      <div class="slider">
        {/* navigation className */}
        <div className=".partner ico ico-next"></div>
        <div className=".partner ico ico-prev"></div>
        <div class="swiper-wrapper">

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            speed={500}
            slidesPerView={5}
            slidesPerGroup={1}
            navigation={{
              prevEl: ".partner .ico.ico-prev",
              nextEl: ".partner .ico.ico-next"
            }}
            loop
            autoplay={{ delay: 2000 }}
            className="partner-slider"
          >
            {partners.map((p, idx) => (
              <SwiperSlide key={idx}>
                <a href={p.href} target="_blank" rel="noopener noreferrer">
                  <img src={p.img} alt={p.alt} />
                </a>
              </SwiperSlide>
            ))}
          </Swiper></div></div>
    </section>
  );
}

export default PartnerSlider;
