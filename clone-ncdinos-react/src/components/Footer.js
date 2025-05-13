import '../styles/footer.css'
export default function Footer() {
    return(
        <footer class="index-header">
        <a href="#" style={{position: 'fixed', bottom: '60px', right: '60px', zIndex: '999'}}>
            <img src="https://www.ncdinos.com/assets/images/btn_won_chatbot@3x.png" style={{width: '8rem', height: '8rem'}}/>
        </a>
        <div class="partner">
            <div class="slider">
                <div class="swiper-wrapper">
                    <a href="#" class="swiper-slide" target="_blank">
                        <img src="https://www.ncdinos.com/partner/jpg/img_footerlogo_01_2024.jpg" alt="NC"/>
                    </a>
                    <a href="https://banking.nonghyup.com/" class="swiper-slide" target="_blank">
                        <img src="https://www.ncdinos.com/partner/jpg/img_footerlogo_02.jpg" alt="NH bank"/>
                    </a>
                    <a href="http://www.pkpork.co.kr/" class="swiper-slide" target="_blank">
                        <img src="https://www.ncdinos.com/partner/jpg/img_footerlogo_03.jpg" alt="부경양돈농협"/>
                    </a>
                    <a href="http://brand.pkpork.co.kr/" class="swiper-slide" target="_blank">
                        <img src="https://www.ncdinos.com/partner/jpg/img_footerlogo_04.jpg" alt="포크밸리"/>
                    </a>
                    <a href="https://www.hitejinro.com/" class="swiper-slide" target="_blank">
                        <img src="https://www.ncdinos.com/partner/jpg/img_footerlogo_16.jpg" alt="켈리"/>
                    </a>
                    <a href="https://www.knbank.co.kr/" class="swiper-slide" target="_blank">
                        <img src="https://www.ncdinos.com/partner/jpg/img_footerlogo_06.jpg" alt="BNK 경남은행"/>
                    </a>
                    <a href="https://www.abllife.co.kr/" class="swiper-slide" target="_blank">
                        <img src="https://www.ncdinos.com/partner/jpg/img_footerlogo_07.jpg" alt="ABL"/>
                    </a>
                    <a href="https://www.muhak.co.kr/" class="swiper-slide" target="_blank">
                        <img src="https://www.ncdinos.com/partner/jpg/img_footerlogo_14.jpg" alt="무학"/>
                    </a>
                    <a href="https://www.tving.com/onboarding" class="swiper-slide" target="_blank">
                        <img src="https://www.ncdinos.com/partner/png/partner_tving.png" alt="티빙"/>
                    </a>
                    <a href="https://www.tongyeong.go.kr/main.web" class="swiper-slide" target="_blank">
                        <img src="https://www.ncdinos.com/partner/png/partner_tongyeong.png" alt="통영시"/>
                    </a>
                    <a href="https://smartstore.naver.com/busanmilk" class="swiper-slide" target="_blank">
                        <img src="https://www.ncdinos.com/partner/png/partner_busanMilk.png" alt="부산우유"/>
                    </a>
                    <a href="http://www.camc.co.kr/" class="swiper-slide" target="_blank">
                        <img src="https://www.ncdinos.com/partner/jpg/img_footerlogo_11.jpg" alt="청아병원"/>
                    </a>
                    <a href="http://www.muruphospital.com/" class="swiper-slide" target="_blank">
                        <img src="https://www.ncdinos.com/partner/jpg/img_footerlogo_13.jpg" alt="무룹병원"/>
                    </a>
                    <a href="https://www.hahahospital.co.kr/" class="swiper-slide" target="_blank">
                        <img src="https://www.ncdinos.com/partner/png/partner_haha.png" alt="365하하병원"/>
                    </a>
                </div>
                {/* Add Arrows */}
                <div class="ico ico-next"></div>
                <div class="ico ico-prev"></div>
            </div>
        </div>
        <div class="f-wrap">
            <h1 class="f-logo"><img src="https://www.ncdinos.com/assets/images/f_logo.png" alt="nc dinos"/></h1>
            <div class="privacy"><a href="#" style={{fontSize: '1.1em'}}>개인정보처리방침</a></div>
            <div class="info-wrap">
                <ul class="f-menu">
                    <li><a href="#">이용약관</a></li>
                    <li><a href="#">이메일무단수집거부</a></li>
                    <li><a href="#">이용안내</a></li>
                    <li><a href="#">CONTACT US</a></li>
                </ul>
                <p class="copy">
                    Copyright 2024 &copy; NC Dinos Baseball Club. All Right Reserved.
                </p>
                <ul class="sns-wrap">
                    <li><a href="http://www.youtube.com/user/ncdinos" target="_blank"><span
                                class="ico ico-youtube">유투브</span></a></li>
                    <li><a href="http://www.instagram.com/ncdinos2011" target="_blank"><span
                                class="ico ico-insta">인스타그램</span></a></li>
                    <li><a href="http://www.facebook.com/ncdinos" target="_blank"><span
                                class="ico ico-facebook">페이스북</span></a></li>
                    <li><a href="https://twitter.com/ncdinos_fan" target="_blank"><span
                                class="ico ico-twitter">트위터</span></a></li>
                </ul>
            </div>
            <div class="family">
                <a href="http://www.ncsoft.com" target="_blank"> <img
                        src="https://www.ncdinos.com/assets/images/logo_footer_nc_2024.png" alt="NC"/></a>
                <a href="http://www.plaync.co.kr" target="_blank"><img
                        src="https://www.ncdinos.com/assets/images/logo_footer_plaync_2024.png" alt="PLAY NC"/></a>
            </div>
            <span class="p-txt">이 홈페이지는 문화체육관광부와 국민체육진흥공단의 재정후원으로 제작되었습니다.</span>
        </div>
        </footer>
        )
}