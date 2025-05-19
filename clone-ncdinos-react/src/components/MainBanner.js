import React from 'react';
import MainSlider from "./MainSlider";
import '../styles/mainBanner.css'

// '다이노스 포토'란 슬라이더
export default function MainBanner() {
    return (
        <section className="main-banner">
            <MainSlider />
            <div>
                <div className="ticket-swiper-wrap">
                    <div className="empty">
                        <p>예매 가능한 경기 없습니다.</p>
                        <span>다음 경기를 기대해 주세요.</span>
                    </div>
                </div>
            </div>
            <div className="board-box f-wrap">
                <div className="item f-wrap">
                    <span className="txt-blue-light">공지사항</span>
                    <a href="#" className="txt">NC 다이노스, 4월 투&middot;타 MVP 손주환, 손아섭 선정</a>
                    <span className="date roboto">05-04</span>
                </div>
                <div className="item f-wrap">
                    <span className="txt-mint">이벤트</span>
                    <a href="#" className="txt">2025시즌 창원NC파크 전광판 기념일 광고 이벤트</a>
                    <span className="date roboto">03-21</span>
                </div>
            </div>
        </section>
    );
}