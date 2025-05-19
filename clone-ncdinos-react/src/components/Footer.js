import '../styles/footer.css';
import PartnerSlider from './PartnerSlider'
export default function Footer() {
    return(
        <footer class="index-header">
        <a href="#" style={{position: 'fixed', bottom: '60px', right: '60px', zIndex: '999'}}>
            <img src="https://www.ncdinos.com/assets/images/btn_won_chatbot@3x.png" style={{width: '8rem', height: '8rem'}}/>
        </a>
        <PartnerSlider />
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