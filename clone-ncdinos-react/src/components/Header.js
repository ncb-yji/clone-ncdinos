// components/Header.js
import '../styles/header.css'
export default function Header() {
    return (
        <header className="index-header">
            <nav className="top-nav">
                <ul className="f-wrap">
                    <li><a href="#" style={{ cursor: 'pointer' }}>티켓</a></li>
                    <li><a href="#">팀스토어</a></li>
                    <li><a href="#">POD샵</a></li>
                    <li className="sns-wrap">
                        <a href="#" style={{ cursor: 'pointer' }}>로그인</a>
                        <a href="#" style={{ cursor: 'pointer' }}>회원가입</a>
                    </li>
                </ul>
            </nav>
            <div className="header-wrap null">
                <div>
                    <h1 className="logo"><a href="#" className="hidden">NC Dinos</a></h1>
                    <nav className="menu-wrap">
                        <ul className="menu f-wrap">
                            <li className="">
                                <a href="#">다이노스</a>
                                <ul className="s-menu">
                                    <li className=""><a href="#">구단소개</a></li>
                                    <li className=""><a href="#">구단소식</a></li>
                                    <li className=""><a href="#">구단VI</a></li>
                                    <li className=""><a href="#">구장, 시설안내</a></li>
                                    <li className=""><a href="#">D-NATION</a></li>
                                    <li className=""><a href="#">후원, 제휴</a></li>
                                </ul>
                            </li>
                            <li className="">
                                <a href="#">스토리</a>
                                <ul className="s-menu">
                                    <li className=""><a href="#">포토</a></li>
                                    <li className=""><a href="#">영상</a></li>
                                </ul>
                            </li>
                            <li className="name-wrap ">
                                <a href="#">경기정보</a>
                                <ul className="s-menu">
                                    <li className="name">정규리그</li>
                                    <li className=""><a href="#">경기일정/결과</a></li>
                                    <li className=""><a href="#">박스 스코어</a></li>
                                    <li className=""><a href="#">게임노트</a></li>
                                    <li className="name">퓨처스</li>
                                    <li className=""><a href="#">경기 일정/결과</a></li>
                                    <li className=""><a href="#">박스 스코어</a></li>
                                </ul>
                            </li>
                            <li className="name-wrap ">
                                <a href="#">기록실</a>
                                <ul className="s-menu">
                                    <li className="name">정규리그</li>
                                    <li className=""><a href="#">팀기록</a></li>
                                    <li className="name">퓨처스</li>
                                    <li className=""><a href="#">팀기록</a></li>
                                </ul>
                            </li>
                            <li className="">
                                <a href="#">선수단</a>
                                <ul className="s-menu">
                                    <li className=""><a href="#">선수단 전체</a></li>
                                    <li className=""><a href="#">코칭스태프</a></li>
                                    <li className=""><a href="#">트레이너</a></li>
                                    <li className=""><a href="#">투수</a></li>
                                    <li className=""><a href="#">포수</a></li>
                                    <li className=""><a href="#">내야수</a></li>
                                    <li className=""><a href="#">외야수</a></li>
                                </ul>
                            </li>
                            <li className="">
                                <a href="#">팬</a>
                                <ul className="s-menu">
                                    <li className=""><a href="#">랠리 다이노스</a></li>
                                    <li className=""><a href="#">다이노스 뮤직</a></li>
                                    <li className=""><a href="#">월페이퍼</a></li>
                                    <li className=""><a href="#">의견보내기</a></li>
                                </ul>
                            </li>
                            <li className="">
                                <a href="#">주니어 다이노스</a>
                                <ul className="s-menu">
                                    <li className=""><a href="#">소개</a></li>
                                    <li className=""><a href="#">베이스볼 아카데미</a></li>
                                    <li className=""><a href="#">응원타임</a></li>
                                    <li className=""><a href="#">응원타임 클래스</a></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}