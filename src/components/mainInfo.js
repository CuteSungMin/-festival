import { Link } from 'react-router-dom';
import "../css/mainInfo.css";
import i18n from '../lang/i18n';
import { withTranslation,useTranslation } from 'react-i18next';

const MainInfo = () => {
    const { t } = useTranslation();

    return ( 
        <section className="mainInfo w1500">
            <article className="mainInfo_article">
                <div className="w50per">
                    <h1 className="title_h1"><a>{t('sec1.title')}</a></h1>
                    <p className="fontSize18_p marginTop150px">{t('sec1.cnt1')}.</p>
                    <p className="fontSize18_p">{t('sec1.cnt1')}.</p>
                    <p className="fontSize18_p">{t('sec1.cnt3')}.</p>
                    <Link to="/Guide"><a className="MoreBtn">{t('btn')}</a></Link>
                </div>
                <div className="w50per">
                    <table className="marginTop100px">
                        <tr>
                            <td className="mainInfo_titleBox">
                            {i18n.language === "ko" ? 
                            (<><span>행</span><span>사</span><span>명</span></>)
                            :(<><span>Festival name</span></>)}
                            </td>
                            <td className="fontSize18_p">{t('sec1.box1_1')}</td>
                        </tr>
                        <tr>
                        <td className="mainInfo_titleBox">
                            {i18n.language === "ko" ? 
                            (<><span>기</span><span>간</span></>)
                            :(<><span>Period</span></>)}
                            </td>
                            <td className="fontSize18_p">{t('sec1.box2_1')}</td>
                        </tr>
                        <tr>
                            <td className="mainInfo_titleBox">
                            {i18n.language === "ko" ? 
                            (<><span>장</span><span>소</span></>)
                            :(<><span>Venue</span></>)}
                            </td>
                            <td className="fontSize18_p">{t('sec1.box3_1')}</td>
                        </tr>
                        <tr>
                            <td className="mainInfo_titleBox">
                            {i18n.language === "ko" ? 
                            (<><span>행</span><span>사</span><span>문</span><span>의</span></>)
                            :(<><span>Contact</span></>)}
                            </td>
                            <td className="fontSize18_p">1522-2295</td>
                        </tr>
                        <tr>
                            <td className="mainInfo_titleBox">
                            {i18n.language === "ko" ? 
                            (<><span>프</span><span>로</span><span>그</span><span>램</span></>)
                            :(<><span>Programs</span></>)}
                            </td>
                            <td className="fontSize18_p">{t('sec1.box5_1')}</td>
                        </tr>
                    </table>
                </div>
            </article>
        </section>
     );
}
export default MainInfo;