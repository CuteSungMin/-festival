import topImg from '../img/headerImg.png';
import '../css/section1_subPage.css';
import slogan from '../img/mainText2.png';
const Section1_supPage = () => {
    return ( 
        <section className="section1_subPage w1500">
            <div className="infoTit">
                <img src={topImg}></img>
                <h3>별빛야행 소개</h3>
            </div>
            <div className='slogan'>
                <img src={slogan}/>
                <h3>2023 경복궁 별빛야행</h3>
                <p>서울의 밤을 더 뜨겁게 달궈 시민과 함께 만드는 문화매력도시 서울을 보여줄 <span>2023 경복궁 별빛야행</span></p>
                <p>모두가 함께 즐기는 서울의 대표 문화예술축제로 한걸음 더 다가갈 한달간의 여정에 여러분을 초대합니다.</p>
            </div>
        </section>
     );
}
 
export default Section1_supPage;