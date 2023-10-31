import '../css/section2_subPage.css'
import headerImg1 from '../img/headerImg1.png';
import programImg1a from '../img/img1.jpg';
import programImg1b from '../img/img5.png';
import programImg2a from '../img/img6.png';
import programImg2b from '../img/img2.jpg';                                                                                                                                                                                                                 
import programImg2 from '../img/img2.jpg';
import programImg3 from '../img/img3.jpg';
import programImg4 from '../img/img4.jpg';

const Section2_subPage = () => {
  

    return (  
        <section className='section2_subPage'>
            <div className='w1500'>
                <div className='section2SubHeader'>
                    <div><img src={headerImg1}></img></div>
                    <h2>메인 프로그램</h2>
                </div>
                <div className='section2SubTop'>
                    <article className='section2SubTopLeft'>
                        <h1>경복궁 별빛야행</h1>
                        <p>프로그램</p>
                        <p>현장 상황에 따라 프로그램이 변경될 수 있습니다.</p>
                    </article>
                    <article className='section2SubTopRight'>
                        <h2>경복궁 별빛야행</h2>
                    </article>
                </div>
                <div className='section2SubMain'>
                    <h2>궁중음식 체험</h2>
                    <article className='flex2'>
                        <div className='section2SubMainImg'>
                            <img src={programImg1a}></img>
                        </div>
                        <div className='section2SubMainTxt'>
                            <h2>소주방</h2>
                            <p>궁궐의 부엌인 ‘소주방’에 들러 조선의 왕이 먹던 일상식인 12첩 반상을 맛보게 됩니다.</p>
                        </div>
                    </article>
                    <article className='flex2'>
                        <div className='section2SubMainImg'>
                            <img src={programImg1b}></img>
                        </div>
                        <div className='section2SubMainTxt'>
                            <h2>도슭수라상</h2>
                            <p>조선의 왕이 먹던 일상식인 12첩 반상을 현대적으로 재해석한 ‘도슭수라상’을 맛보게 됩니다.</p>
                            <p>왕과 왕비만 받을 수 있었던 최고의 일상식인 12첩 반상을 현대적으로 해석해 합에 조금씩 담아냈습니다.</p>
                            <p>도슭수라상을 구성하는 열두 가지 음식에는 선조들의 음식 철학인 </p>
                            <p>음양오행 陰陽五行과 약식동원 藥食同源의 의미가 담겨 있습니다.</p>
                        </div>
                    </article>
                </div>    

                <div className='section2SubMain'>
                    <h2>국악공연 관람</h2>
                    <article className='flex2'>
                        <div className='section2SubMainImg'>
                            <img src={programImg2a}></img>
                        </div>
                        <div className='section2SubMainTxt'>
                            <h2>국악공연 관람</h2>
                            <p>맛있는 수라상을 먹는 동안 국악공연이 함께 펼쳐져 맛과 멋의 풍류로 가득한 밤이 될 것입니다.</p>
                        </div>
                    </article>
                    <article className='flex2'>
                        <div className='section2SubMainImg'>
                            <img src={programImg2b}></img>
                        </div>
                        <div className='section2SubMainTxt'>
                            <h2>국악공연 관람</h2>
                            <p>맛있는 수라상을 먹는 동안 국악공연이 함께 펼쳐져 맛과 멋의 풍류로 가득한 밤이 될 것입니다.</p>
                        </div>
                    </article>
                </div>    
            </div>
        </section>
    );
}
 
export default Section2_subPage;