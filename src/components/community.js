import '../css/community.css'
import {Link} from 'react-router-dom'
import { withTranslation,useTranslation } from 'react-i18next';
const Community = () => {
    const { t } = useTranslation();
    return (  
        <section className='community'>
            <div className="padding250px0px w1500 flex">
                <article className="communityAticle">
                    <h1 className='title_h1'>{t('sec4.title')}</h1>
                    <Link to ="/NoticeList"><button className="MoreBtn marginTop470px">{t('btn')}</button></Link>
                </article>
                <article className="communityAticle">
                    <Link to ="/NoticeList"><div className="notice flex">
                        <p className='fontSize18_p'>{t('sec4.not1')}</p>
                        <p className='fontSize18_p'>2023.09</p>
                    </div>
                    </Link>
                    <Link to ="/NoticeList"><div className="notice flex">
                        <p className='fontSize18_p'>{t('sec4.not2')}</p>
                        <p className='fontSize18_p'>2023.09</p>
                    </div>
                    </Link>
                    <Link to ="/NoticeList"><div className="notice flex">
                        <p className='fontSize18_p'>{t('sec4.not3')}</p>
                        <p className='fontSize18_p'>2023.09</p>
                    </div>
                    </Link>
                    <Link to ="/NoticeList"><div className="notice flex">
                        <p className='fontSize18_p'>{t('sec4.not4')}</p>
                        <p className='fontSize18_p'>2023.09</p>
                    </div>
                    </Link>
                    <Link to ="/NoticeList"><div className="notice flex">
                        <p className='fontSize18_p'>{t('sec4.not5')}</p>
                        <p className='fontSize18_p'>2023.09</p>
                    </div>
                    </Link>
                </article>
            </div>
        </section>
    );
}
 
export default withTranslation()(Community);