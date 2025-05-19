import { useEffect } from 'react';

// .js 오류방지
import $ from 'jquery';

// 필요한 모듈 불러오기
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';


function App() {
  useEffect(() => {
    // 상단 로고옆 메뉴에 마우스 커서를 올리면 하위메뉴가 펼쳐짐
    function header() {
      $('.menu-wrap').hover(function () {
        $('.header-wrap').addClass('hover');
      }, function () {
        $('.header-wrap').removeClass('hover');
      });
    }

  }, []);
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
