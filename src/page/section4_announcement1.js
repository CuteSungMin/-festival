import '../css/section4_announcement1.css'
import headerImg1 from '../img/headerImg1.png';
const Section4_announcement1 = () => {
  

    return (  
        <section className='Section4_announcement1'>
               <div className='w1500'>
                    <div className='section4SubHeader'>
                        <div><img src={headerImg1}></img></div>
                        <h2>공지사항</h2>
                    </div>
                    <div className='Section4_announcementBtns'>
                        <ul className='flex2'>
                            <li>공지사항</li>
                            <li>문의하기</li>
                            <li>FAQ</li>
                        </ul>
                    </div>
                </div>
        </section>
    );
}
 
export default Section4_announcement1;