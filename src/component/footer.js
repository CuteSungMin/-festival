import "../css/footer.css";
import logo from '../img/Logo_white.png';
import youtube from '../img/youtube.png';
import insta from '../img/instagram.png';

const Footer = () => {

    return ( 
        <footer className='w1500'>
            <div className='footerLeft'>
                <div className='logo'><img src={logo}/></div>
                <div className="tel">
                    <p><span>주소</span>(06153) 서울특별시 강남구 봉은사로 406 (삼성동 112-2)</p>
                    <p><span>전화번호</span>(02) 566-6300 </p>
                </div>
                <div className="sns">
                    <span className="youtube"><a href="https://www.youtube.com/watch?v=jyJZ211wQuM"><img src={youtube}/></a></span>
                    <span className="instagram"><a href="https://www.instagram.com/gyeongbokgung_palace_official/"><img src={insta}/></a></span>
                </div>
                <p className="copy">Copyright(c) 2023 Gyeongbokgung Night Trip. All right reserved</p>
            </div>
            <ul className='fnb'>
                <li className="menu">별빛야행 소개</li>
                <li>메인 프로그램</li>
                <li>경복궁 행사</li>
                <li>커뮤니티</li>
                <li>갤러리</li>
            </ul>
        </footer>
     );
}
 
export default Footer;