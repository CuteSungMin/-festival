import '../css/section3.css'
import event1 from '../img/event1.jpg';
import {useRef,useState} from 'react';

const Section3 = () => {


    // class CardFlipOnScroll {
    // constructor(wrapper, sticky) {
    //     this.wrapper = wrapper
    //     this.sticky = sticky
    //     this.cards = sticky.querySelectorAll('.card')
    //     this.length = this.cards.length
    
    //     this.start = 0
    //     this.end = 0
    //     this.step = 0
    // }
    
    // init() {
    //     this.start = this.wrapper.offsetTop - 100
    //     this.end = this.wrapper.offsetTop + this.wrapper.offsetHeight - window.innerHeight * 1.2
    //     this.step = (this.end - this.start) / (this.length * 2)
    // }
    
    // animate() {
    //     this.cards.forEach((card, i) => {
    //     const s = this.start + this.step * i
    //     const e = s + this.step * (this.length + 1)
    
    //     if (window.scrollY <= s) {
    //         card.style.transform = `
    //             perspective(100vw)
    //             translateX(100vw) 
    //             rotateY(180deg)
    //             `
    //     } else if (window.scrollY > s && window.scrollY <= e - this.step) {
    //         card.style.transform = `
    //             perspective(100vw)
    //             translateX(${100 + (window.scrollY - s) / (e - s) * -100}vw)
    //             rotateY(180deg)
    //             `
    //     } else if (window.scrollY > e - this.step && window.scrollY <= e) {
    //         card.style.transform = `
    //             perspective(100vw)
    //             translateX(${100 + (window.scrollY - s) / (e - s) * -100}vw)
    //             rotateY(${180 + -(window.scrollY - (e - this.step)) / this.step * 180}deg)
    //             `
    //     } else if (window.scrollY > e) {
    //         card.style.transform = `
    //             perspective(100vw)
    //             translateX(0vw) 
    //             rotateY(0deg)
    //             `
    //     }
    //     })
    // }
    // }
    // const section3 = document.querySelector('.section3');
    // const sticky = document.querySelector('.sticky');
    // const cardFlipOnScroll = new CardFlipOnScroll(section3, sticky)
    // cardFlipOnScroll.init()
    
    // window.addEventListener('scroll', () => {
    // cardFlipOnScroll.animate()
    // })
    
    // window.addEventListener('resize', () => {
    // cardFlipOnScroll.init()
    // })
    

    return (  
        <section className="section3 w1500" >
            {/* <h1>경복궁 행사</h1> */}
            <article className="sticky">
                <h1>경복궁 행사</h1>
                <div className="eventWrap">
                    <div className="event">
                        <div className="front front1"></div>
                        <div className="back">
                        '아티스트가 사랑한 궁'은 아티스트와 함께 궁궐의 아름다움을 
                        전하는 초청공연입니다.
                        가을밤, 특별한 선율이 흐르는 경복궁 집옥재로 여러분을 초대합니다.
                        </div>
                    </div>
                    <div className="event">
                        <div className="front front2"></div>
                        <div className="back">
                        '판소리로 듣는 궁 이야기'는 세워지고 무너지고, 세워지고 무너지기를 반복하는 
                        궁의 끈질긴 생명력과 그것을 기억하는 이들에 대한 이야기를 
                        담은 창작 판소리 공연입니다.
                        </div>
                    </div>
                    <div className="event">
                        <div className="front front3"></div>
                        <div className="back">
                        하루 2번 경복궁에서 왕가와 함께하는 특별한 산책이 펼쳐집니다.
                        왕과 왕비, 왕세자와 세자빈과 함께 걸으며 조선시대 궁궐의 일상을 즐겨보세요.
                        </div>
                    </div>
                    <div className="event">
                        <div className="front front4"></div>
                        <div className="back">
                        조선왕조실록의 내용을 토대로 실제 임금이 드셨던
                        궁중병과와 궁중약차를 오늘날에도 즐길 수 있도록 구성된 체험 프로그램입니다.
                        </div>
                    </div>
                </div>
            </article>
        </section>
    );
}
 
export default Section3;