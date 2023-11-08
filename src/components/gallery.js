import { useState} from 'react';
import '../css/gallery.css'

const Gallery = () => {
    //위에 슬라이드
    const [topMove, setTopMove] = useState(true);
    const topOnStop = () => setTopMove(false);
    const topOnRun = () => setTopMove(true);
    
    // 아래 슬라이드
    const [botMove, setBotMove] = useState(true);
    const botOnStop = () => setBotMove(false);
    const botOnRun = () => setBotMove(true);

    const slides = [
        { background: 'img/gallery_img1.jpg', target: "#" },
        { background: 'img/gallery_img2.jpg', target: "#" },
        { background: 'img/gallery_img3.jpg', target: "#" },
        { background: 'img/gallery_img4.jpg', target: "#" },
        { background: 'img/gallery_img5.jpg', target: "#" },
        { background: 'img/gallery_img6.jpg', target: "#" },
        { background: 'img/gallery_img7.jpg', target: "#" },
    ];

    return (  
        <section className='gallery'>
            <article className='w1500'>
                <h1 className='title_h1'>경복궁 갤러리</h1>
            </article>
            <article className="slideWrapper marginTop150px">
                    <div className="moveWrapper">
                         {/*State False면 Class가 Stop 으로 바뀌면서 멈춤 */}
                        <ul className={"slide5 topOriginal" + (topMove ? "" : " stop")}>
                            {slides.map((s, i) => (
                                <li className="moveBox" style={{background: `url(${s.background})`,
                                    backgroundRepeat : 'no-repeat',
                                    backgroundSize:`cover`,
                                    backgroundPosition : `center`}} onMouseEnter={topOnStop} onMouseLeave={topOnRun} key={i}>
                                </li>
                            ))}
                        </ul>
                        <ul className={"slide5 topCloneBox" + (topMove ? "" : " stop")} >
                            {slides.map((s, i) => (
                                <li className="moveBox" style={{background: `url(${s.background})`,
                                    backgroundRepeat : 'no-repeat',
                                    backgroundSize:`cover`,
                                    backgroundPosition : `center`}} onMouseEnter={topOnStop} onMouseLeave={topOnRun} key={i}>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="moveWrapper">
                        <ul className={"slide5 botOriginal" + (botMove ? "" : " stop")}>
                            {slides.map((s, i) => (
                                <li className="moveBox" 
                                    style={{background: `url(${s.background})`,
                                    backgroundRepeat : 'no-repeat',
                                    backgroundSize:`cover`,
                                    backgroundPosition : `center`}} onMouseEnter={botOnStop} onMouseLeave={botOnRun} key={i}>
                                </li>
                            ))}
                        </ul>
                        <ul className={"slide5 botCloneBox" + (botMove ? "" : " stop")} >
                            {slides.map((s, i) => (
                                <li className="moveBox" style={{background: `url(${s.background})`,
                                    backgroundRepeat : 'no-repeat',
                                    backgroundSize:`cover`,
                                    backgroundPosition : `center`}} onMouseEnter={botOnStop} onMouseLeave={botOnRun} key={i}>
                                </li>
                            ))}
                        </ul>
                    </div>
            </article>

        </section>
    );
}
 
export default Gallery;