// MainSlider.js
import PhotoSwiper from "./PhotoSwiper";
import '../styles/newsSlider.css'

export default function MainSlider() {
  const slides = [
    {img: '/images/main_banner.jpg'},
    {img: '/images/main_banner2.jpg'},
    {img: '/images/main_banner3.jpg'},
  ];

  return (
    <div className="slider" style={{ background: '#061d3d' }}>
      <PhotoSwiper
        slides={slides}
        loop={false}
        spaceBetween={0}
        slidesPerView={1}
        effect="fade"
        showNavigation={false}
        pagination={{ type: 'bullets', clickable: true, }}
        autoplay={{ delay: 4000 }}
        speed={800}
      />
    </div>
  );
}