import '../pageCss/event_subPage.css'
import headerImg from '../img/headerImg.png'
import EventImg1 from '../img/event1.jpg'
import EventImg2 from '../img/event2.jpg'
import EventImg3 from '../img/event3.png'
import EventImg4 from '../img/event4.jpg'

const Event_subPage = () => {

    return ( 
        <section>
            <article className='subHeadImgArticle'>
                <div className='notiSubHeader'>
                    <div><img src={headerImg}></img></div>
                    <h2>관련 행사 소개</h2>
                </div>  
            </article>
            <article className='eventTitleArticle'>
                <h1 className='title_h1 marginBottom50px'>궁궐 체험 행사</h1>
                <p className='title_h2'>특별한 시간이 되기를 기대하며,</p>
                <p className='title_h2'>야간에도 고궁의 아름다움을 누릴 수 있는 다양한 궁궐 체험 행사</p>
            </article>
            {/* 행사 정보 4개 */}
            <article className='eventContent w1500'>
                <img className='eventImg' src={EventImg1}></img>
                <div>
                    <h1 className='title_h1 marginBottom50px'>[2023 가을 궁중 문화 축전] 아티스트가 사랑한 궁</h1>
                    <table className='eventTable'>
                        <tr>
                            <td className='eventContentLeft'>기간</td>
                            <td className='fontSize18_p'>2023-10-17~2023-10-18</td>
                        </tr>
                        <tr>
                            <td className='eventContentLeft'>시간</td>
                            <td className='fontSize18_p'>19:00~20:10</td>
                        </tr>
                        <tr>
                            <td className='eventContentLeft'>장소</td>
                            <td className='fontSize18_p'>경복궁 집옥재</td>
                        </tr>
                        <tr>
                            <td className='eventContentLeft'>예매기간</td>
                            <td className='fontSize18_p'>2023-10-06~2023-10-18</td>
                        </tr>
                        <tr>
                            <td className='eventContentLeft'>예매시간</td>
                            <td className='fontSize18_p'>14:00 ~ (선착순 마감)</td>
                        </tr>
                        <tr>
                            <td className='eventContentLeft'>가격</td>
                            <td className='fontSize18_p'>무료(경복궁 입장료 별도 | ID당 5매 가능)</td>
                        </tr>
                        <tr>
                            <td className='eventContentLeft'>신청</td>
                            <td className='fontSize18_p'>네이버 예약</td>
                        </tr>
                        <tr>
                            <td className='eventContentLeft'>문의</td>
                            <td className='fontSize18_p'>행사문의 : 궁능활용프로그램 콜센터 1522-2295</td>
                        </tr>
                    </table>
                    <a className="MoreBtn">더보기</a>
                </div>
            </article>
            <article className='eventContent w1500'>
                <img className='eventImg' src={EventImg2}></img>
                <div>
                    <h1 className='title_h1 marginBottom50px'>[2023 가을 궁중문화축전] 판소리로 듣는 궁 이야기</h1>
                    <table className='eventTable'>
                        <tr>
                            <td className='eventContentLeft'>기간</td>
                            <td className='fontSize18_p'>2023-10-13~2023-10-14</td>
                        </tr>
                        <tr>
                            <td className='eventContentLeft'>시간</td>
                            <td className='fontSize18_p'>(1회차)11:00~12:00 | (2회차)14:00~15:00</td>
                        </tr>
                        <tr>
                            <td className='eventContentLeft'>장소</td>
                            <td className='fontSize18_p'>경복궁 흥복전</td>
                        </tr>
                        <tr>
                            <td className='eventContentLeft'>예매기간</td>
                            <td className='fontSize18_p'>2023-10-06~2023-10-14</td>
                        </tr>
                        <tr>
                            <td className='eventContentLeft'>예매시간</td>
                            <td className='fontSize18_p'>14:00 ~ (선착순 마감)</td>
                        </tr>
                        <tr>
                            <td className='eventContentLeft'>가격</td>
                            <td className='fontSize18_p'>무료(경복궁 입장료 별도 | ID당 4매 가능)</td>
                        </tr>
                        <tr>
                            <td className='eventContentLeft'>신청</td>
                            <td className='fontSize18_p'>네이버 예약</td>
                        </tr>
                        <tr>
                            <td className='eventContentLeft'>문의</td>
                            <td className='fontSize18_p'>행사문의 : 궁능활용프로그램 콜센터 1522-2295</td>
                        </tr>
                    </table>
                    <a className="MoreBtn">더보기</a>
                </div>
            </article>
            <article className='eventContent w1500'>
                <img className='eventImg' src={EventImg3}></img>
                <div>
                    <h1 className='title_h1 marginBottom50px'>궁궐일상모습 재현 및 체험 - 왕가의 산책</h1>
                    <table className='eventTable'>
                        <tr>
                            <td className='eventContentLeft'>기간</td>
                            <td className='fontSize18_p'>2023-10-08~2023-10-13</td>
                        </tr>
                        <tr>
                            <td className='eventContentLeft'>시간</td>
                            <td className='fontSize18_p'>(1부)10:30 | (2부)14:30</td>
                        </tr>
                        <tr>
                            <td className='eventContentLeft'>장소</td>
                            <td className='fontSize18_p'>경복궁 일원</td>
                        </tr>
                        <tr>
                            <td className='eventContentLeft'>예매기간</td>
                            <td className='fontSize18_p'>-</td>
                        </tr>
                        <tr>
                            <td className='eventContentLeft'>예매시간</td>
                            <td className='fontSize18_p'>14:00 ~ (선착순 마감)</td>
                        </tr>
                        <tr>
                            <td className='eventContentLeft'>가격</td>
                            <td className='fontSize18_p'>-</td>
                        </tr>
                        <tr>
                            <td className='eventContentLeft'>신청</td>
                            <td className='fontSize18_p'>-</td>
                        </tr>
                        <tr>
                            <td className='eventContentLeft'>문의</td>
                            <td className='fontSize18_p'>행사문의 : 궁능활용프로그램 콜센터 1522-2295</td>
                        </tr>
                    </table>
                    <a className="MoreBtn">더보기</a>
                </div>
            </article>
            <article className='eventContent w1500'>
                <img className='eventImg' src={EventImg4}></img>
                <div>
                    <h1 className='title_h1 marginBottom50px'>2023년 경복궁 생과방(하반기)</h1>
                    <table className='eventTable'>
                        <tr>
                            <td className='eventContentLeft'>기간</td>
                            <td className='fontSize18_p'>2023-09-07~2023-10-21</td>
                        </tr>
                        <tr>
                            <td className='eventContentLeft'>시간</td>
                            <td className='fontSize18_p'>10:00~11:10(1회) | 11:40~12:50(2회) | 13:50~15:00(3회) | 15:30~16:40(4회)</td>
                        </tr>
                        <tr>
                            <td className='eventContentLeft'>장소</td>
                            <td className='fontSize18_p'>경복궁 생과방</td>
                        </tr>
                        <tr>
                            <td className='eventContentLeft'>예매기간</td>
                            <td className='fontSize18_p'>2023-09-01 ~ 2023-10-21</td>
                        </tr>
                        <tr>
                            <td className='eventContentLeft'>예매시간</td>
                            <td className='fontSize18_p'>9.1.(1차) | 9.15.(2차) | 10.12.(3차) | 13:00 ~ (선착순 마감)</td>
                        </tr>
                        <tr>
                            <td className='eventContentLeft'>가격</td>
                            <td className='fontSize18_p'>초두점증병 세트 15,000원 | 주악 세트 12,000원</td>
                        </tr>
                        <tr>
                            <td className='eventContentLeft'>신청</td>
                            <td className='fontSize18_p'>티켓링크 예약</td>
                        </tr>
                        <tr>
                            <td className='eventContentLeft'>문의</td>
                            <td className='fontSize18_p'>행사문의 콜센터 : 1522-2295 | 티켓문의 : 티켓링크 고객센터 1588-7890</td>
                        </tr>
                    </table>
                    <a className="MoreBtn">더보기</a>
                </div>
            </article>
        </section>
     );
}
 
export default Event_subPage;