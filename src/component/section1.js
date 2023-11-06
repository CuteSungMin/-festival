import { Link } from 'react-router-dom';
import "../css/section1.css";
import i18n from '../lang/i18n';
import { withTranslation,useTranslation } from 'react-i18next';
const Section1 = () => {
    const { t } = useTranslation();

    return ( 
        <section className="section1 w1500">
            <article className="section1Article">
                <div>
                    <h1 className="section1Title"><a>{t('sec1.title')}</a></h1>
                    <p className="section1Content">{t('sec1.cnt1')}.</p>
                    <p className="section1Content">{t('sec1.cnt2')},</p>
                    <p className="section1Content">{t('sec1.cnt3')}.</p>
                    <Link to="/Guide"><a className="section1MoreBtn">{t('btn')}</a></Link>
                </div>
                <div>
                    <table className="tableWrap">
                        <tr>
                            <td className="titleBox"><sapn>행</sapn><span>사</span><span>명</span></td>
                            <td className="titleBoxContent">{t('sec1.box1_1')}</td>
                        </tr>
                        <tr>
                            <td className="titleBox"><span>기</span><span>간</span></td>
                            <td className="titleBoxContent">{t('sec1.box2_1')}</td>
                        </tr>
                        <tr>
                            <td className="titleBox"><span>장</span><span>소</span></td>
                            <td className="titleBoxContent">{t('sec1.box3_1')}</td>
                        </tr>
                        <tr>
                            <td className="titleBox"><span>행</span><span>사</span><span>문</span><span>의</span></td>
                            <td className="titleBoxContent">1522-2295</td>
                        </tr>
                        <tr>
                            <td className="titleBox"><span>프</span><span>로</span><span>그</span><span>램</span></td>
                            <td className="titleBoxContent">{t('sec1.box5_1')}</td>
                        </tr>
                    </table>
                </div>
            </article>
        </section>
     );
}
export default withTranslation()(Section1);