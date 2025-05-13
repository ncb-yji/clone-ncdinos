import '../styles/newsSlider.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import PhotoSwiper from './PhotoSwiper';

// '다이노스 포토'란 슬라이더
export default function NewsSlider() {
    const slides = [
        {
            title: '[사진첩] 2025 정규시즌 NC 13 - 4 롯데 (2025. 5. 3. 부산 사직야구장)',
            img: '/images/photo_slide.jpg',
            date: '2025-04-27',
        },
        {
            title: '[사진첩] 2025 정규시즌 NC 3 - 13 기아 (2025. 4. 29. 광주 기아챔피언스필드)',
            img: '/images/photo_slide_2.jpg',
            date: '2025-04-29',
        },
        {
            title: '[사진첩] 2025 정규시즌 NC 3 - 4 롯데 (2025. 5. 2. 부산 사직야구장)',
            img: '/images/photo_slide_3.jpg',
            date: '2025-04-30',
        },
        {
            title: '[사진첩] 2025 정규시즌 NC 4 - 8 삼성 (2025. 4. 27. 대구 삼성라이온즈파크)',
            img: '/images/photo_slide_4.jpg',
            date: '2025-05-02',
        },
        {
            title: '[사진첩] 2025 정규시즌 NC 6 - 2 KT (2025. 5. 5. 수원 KT위즈파크)',
            img: '/images/photo_slide_5.jpg',
            date: '2025-05-03',
        },
        {
            title: '[사진첩] 2025 정규시즌 NC 6 - 3 KT (2025. 5. 6. 수원 KT위즈파크)',
            img: '/images/photo_slide_6.jpg',
            date: '2025-05-04',
        },
        {
            title: '[사진첩] 2025 정규시즌 NC 7 - 0 기아 (2025. 4. 30. 광주 기아챔피언스필드)',
            img: '/images/photo_slide_7.jpg',
            date: '2025-05-05',
        },
        {
            title: '[사진첩] 2025 정규시즌 NC 9 - 6 롯데 (2025. 5. 4. 부산 사직야구장)',
            img: '/images/photo_slide_8.jpg',
            date: '2025-05-06'
        }
    ];

    return (
        <section className="news">
            <div className="con">
                <h2>다이노스 포토</h2>
                <a href="#" className="more"><span className="ico ico-more">더보기</span></a>
                <div className="slider">
                    <div className="gall">
                         <PhotoSwiper 
                            slides={slides} 
                            spaceBetween={10}
                            slidesPerView={4}
                            slidesPerGroup={1}
                            showNavigation={true}
                            pagination={{type: 'bullets',clickable: true,}}
                            autoplay={{delay:4000}}
                         />
                    </div>
                </div>
            </div>
        </section>);
}