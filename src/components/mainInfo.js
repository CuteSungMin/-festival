import "../css/mainInfo.css";

const MainInfo = () => {

    return ( 
        <section className="mainInfo w1500">
            <article className="mainInfo_article">
                <div className="w50per">
                    <h1 className="title_h1"><a>경복궁 별빛야행</a></h1>
                    <p className="fontSize18_p marginTop150px">경복궁의 가장 깊은 곳 북측 권역의 문이 열립니다.</p>
                    <p className="fontSize18_p">외소주방에서 궁중음식체험과 전통 공연을 즐기고,</p>
                    <p className="fontSize18_p">전문 해설사와 함께 별빛 산책을 떠나보세요.</p>
                    <a className="MoreBtn">더보기</a>
                </div>
                <div className="w50per">
                    <table className="marginTop100px">
                        <tr>
                            <td className="mainInfo_titleBox"><sapn>행</sapn><span>사</span><span>명</span></td>
                            <td className="fontSize18_p">2023 경복궁 별빛야행</td>
                        </tr>
                        <tr>
                            <td className="mainInfo_titleBox"><span>기</span><span>간</span></td>
                            <td className="fontSize18_p">2023년 09월 08일 ~ 2023년 11월 13일</td>
                        </tr>
                        <tr>
                            <td className="mainInfo_titleBox"><span>장</span><span>소</span></td>
                            <td className="fontSize18_p">경복궁, 소주방, 북측전각 일대</td>
                        </tr>
                        <tr>
                            <td className="mainInfo_titleBox"><span>행</span><span>사</span><span>문</span><span>의</span></td>
                            <td className="fontSize18_p">1522-2295</td>
                        </tr>
                        <tr>
                            <td className="mainInfo_titleBox"><span>프</span><span>로</span><span>그</span><span>램</span></td>
                            <td className="fontSize18_p">별빛산책로, 도슭수라상, 음식구성</td>
                        </tr>
                    </table>
                </div>
            </article>
        </section>
     );
}
export default MainInfo;