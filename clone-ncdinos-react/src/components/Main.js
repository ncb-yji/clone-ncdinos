// Main.js
import NewsSlider from "./NewsSlider";
import MainBanner from "./MainBanner";
import '../styles/main.css';
export default function Main() {
    return(
    <main>
        <MainBanner />
        <section class="board main-board">
            <div class="con f-wrap main-notice-new">
                <div class="tab-board">
                    <h2>구단소식</h2>
                    <p>NC 다이노스의 다양한 소식들을 만나보세요</p>
                    <a href="#" class="more"><span class="ico ico-more">더보기</span></a>
                    <div class="tabs f-wrap">
                        <button class="active">전체</button>
                        <button>공지사항</button>
                        <button>이벤트</button>
                    </div>
                    <div class="tab-container">
                        <ul class="cont active">
                            <li>
                                <span class="sort">공지사항</span>
                                <a href="#" class="tit new">
                                    NC 다이노스, 4월 투&middot;타 MVP 손주환, 손아섭 선정
                                </a>
                                <span class="date">2025-05-04</span>
                            </li>
                            <li>
                                <span class="sort">공지사항</span>
                                <a href="#" class="tit new">
                                    작년에 이어 올해도 다시 만난다! 조구만 I NC 다이노스 두 번째 협업 상품 출시
                                </a>
                                <span class="date">2025-05-04</span>
                            </li>
                            <li>
                                <span class="sort">공지사항</span>
                                <a href="#" class="tit new">
                                    NC 다이노스, 임시 대체 홈구장 검토 착수
                                </a>
                                <span class="date">2025-05-02</span>
                            </li>
                            <li>
                                <span class="sort">공지사항</span>
                                <a href="#" class="tit new">
                                    NC 다이노스 이재학, 팔꿈치 수술 결정
                                </a>
                                <span class="date">2025-04-29</span>
                            </li>
                            <li>
                                <span class="sort">공지사항</span>
                                <a href="#" class="tit new">
                                    NC 다이노스, 코칭스태프 보직 변경
                                </a>
                                <span class="date">2025-04-28</span>
                            </li>
                        </ul>
                        <ul class="cont">
                            <li>
                                <span class="sort">공지사항</span>
                                <a href="#" class="tit new">
                                    NC 다이노스, 4월 투&middot;타 MVP 손주환, 손아섭 선정
                                </a>
                                <span class="date">2025-05-04</span>
                            </li>
                            <li>
                                <span class="sort">공지사항</span>
                                <a href="#" class="tit new">
                                    작년에 이어 올해도 다시 만난다! 조구만 I NC 다이노스 두 번째 협업 상품 출시
                                </a>
                                <span class="date">2025-05-04</span>
                            </li>
                            <li>
                                <span class="sort">공지사항</span>
                                <a href="#" class="tit new">
                                    NC 다이노스, 임시 대체 홈구장 검토 착수
                                </a>
                                <span class="date">2025-05-02</span>
                            </li>
                            <li>
                                <span class="sort">공지사항</span>
                                <a href="#" class="tit new">
                                    NC 다이노스 이재학, 팔꿈치 수술 결정
                                </a>
                                <span class="date">2025-04-29</span>
                            </li>
                            <li>
                                <span class="sort">공지사항</span>
                                <a href="#" class="tit new">
                                    NC 다이노스, 코칭스태프 보직 변경
                                </a>
                                <span class="date">2025-04-28</span>
                            </li>
                        </ul>
                        <ul class="cont">
                            <li>
                                <span class="sort">이벤트</span>
                                <a href="#" class="tit">
                                    2025시즌 창원NC파크 전광판 기념일 광고 이벤트
                                </a>
                                <span class="date">2025-03-21</span>
                            </li>
                            <li>
                                <span class="sort">이벤트</span>
                                <a href="#" class="tit">
                                    가상티켓 예매 이벤트
                                </a>
                                <span class="date">2025-01-31</span>
                            </li>
                            <li>
                                <span class="sort">이벤트</span>
                                <a href="#" class="tit">
                                    2024 타운홀 미팅 상세 안내
                                </a>
                                <span class="date">2024-11-21</span>
                            </li>
                            <li>
                                <span class="sort">이벤트</span>
                                <a href="#" class="tit">
                                    10월 엔팍 별다방클래스 안내
                                </a>
                                <span class="date">2024-10-18</span>
                            </li>
                            <li>
                                <span class="sort">이벤트</span>
                                <a href="#" class="tit">
                                    YOGA IN THE 창원NC파크 안내
                                </a>
                                <span class="date">2024-09-25</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="story">
                    <h3><img src="https://www.ncdinos.com/assets/images/nc_story_txt.png" alt="NC DINOS STORY"/></h3>
                    <p>공룡의 꿈을 향한 NC 다이노스의 발자취와<br />
                        팬 여러분의 이야기가 함께하는 공간입니다.</p>
                    <ul class="sns-wrap f-wrap">
                        <li>
                            <a href="http://www.youtube.com/user/ncdinos" target="_blank">
                                <img src="https://www.ncdinos.com/assets/images/ic_story_youtube.png" alt="유투브"/>
                            </a>
                        </li>
                        <li>
                            <a href="http://www.instagram.com/ncdinos2011" target="_blank">
                                <img src="https://www.ncdinos.com/assets/images/ic_story_instagram.png" alt="인스타그램"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/ncdinos_futures" target="_blank">
                                <img src="https://www.ncdinos.com/assets/images/ic_story_futures.svg" alt="퓨쳐스"/>
                            </a>
                        </li>
                        <li>
                            <a href="http://www.facebook.com/ncdinos" target="_blank">
                                <img src="https://www.ncdinos.com/assets/images/ic_story_facebook.png" alt="페이스북"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/ncdinos_fan" target="_blank">
                                <img src="https://www.ncdinos.com/assets/images/ic_story_twitter.png" alt="트위터"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <section class="tv">
            <div class="con">
                <h2>다이노스 영상</h2>
                <p>NC 다이노스의 업로드 영상을 확인하세요!</p>
                <div class="f-wrap">
                    <div class="gall video-gall">
                        <a href="#" class="img new">
                            <div class="ab-box">
                                <span class="date">2025-05-06</span>
                                <strong class="title">
                                    어린이날의 주인공! NC & KT 어린이의 애국가 제창 #ncd...
                                </strong>
                            </div>
                            <span class="img-wrap">
                                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/5O29SOrEy6k"></iframe>
                                {/* <img src="https://i.ytimg.com/vi/5O29SOrEy6k/sddefault.jpg" alt="" style={{width: 100%;}}/> */}
                            </span>
                        </a>
                    </div>
                    <div class="gall style2">
                        <div>
                            <a href="#" class="img">
                                <img src="https://i.ytimg.com/vi/5vLY1gyiT_Y/sddefault.jpg" alt=""/>
                            </a>
                            <a href="#" class="txt">
                                <strong class="title">
                                    선취점+홈런 = 완벽, 연타석 타점쇼를 펼쳐주는 형준! #ncdinos ...
                                </strong>
                                <span class="date">2025-05-06</span>
                            </a>
                        </div>
                        <div>
                            <a href="#" class="img">
                                <img src="https://i.ytimg.com/vi/YO0zcXM7fMk/sddefault.jpg" alt=""/>
                            </a>
                            <a href="#" class="txt">
                                <strong class="title">
                                    [ ] 5월 6일 NC vs KT
                                </strong>
                                <span class="date">2025-05-06</span>
                            </a>
                        </div>
                        <div>
                            <a href="#" class="img">
                                <img src="https://i.ytimg.com/vi/Ly17YsSEsR0/sddefault.jpg" alt=""/>
                            </a>
                            <a href="#" class="txt">
                                <strong class="title">
                                    4연승을 확신으로 타점, 득점 다 한 9회 초 캡틴 #ncdinos #...
                                </strong>
                                <span class="date">2025-05-06</span>
                            </a>
                        </div>
                    </div>
                </div>
                <a href="#" class="more"><span class="ico ico-more">더보기</span></a>
            </div>
        </section>
        <NewsSlider />
        <section class="last">
            <div class="con f-wrap" style={{textAlign: 'center'}}>
                <ul class="main-bottom-banner-wrap">
                    <li>
                        <a href="#">
                            <strong>D-NATION</strong>
                            <span class="txt">
                                NC 다이노스는 지역사회에 대한<br />지속가능한 기여를 실천합니다.
                            </span>
                            <span class="ico ico-people"></span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <strong>다이노스 월페이퍼</strong>
                            <span class="txt"> NC 다이노스의 주요 일정을<br />바탕 화면으로 만나보세요. </span>
                            <span class="ico ico-computer"></span>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    </main>
    )
}