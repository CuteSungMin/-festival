import '../pageCss/gallery_subPage.css'
import headerImg from '../img/headerImg.png'
import galleryImg1 from '../img/galleryImg1.png';
import galleryImg2 from '../img/galleryImg2.png';
import galleryImg3 from '../img/galleryImg3.png';
import galleryImg4 from '../img/galleryImg4.png';
const Gallery_subPage = () => {
  

    return (  
        <section className='gallery_subPage'>
               <div className='w1500'>
                    <div className='notiSubHeader'>
                        <div><img src={headerImg}></img></div>
                        <h2 className='title_h2'>갤러리</h2>
                    </div>
                    <div className='gallerySubMain'>
                        <article className='flex' >
                            <div className='galleryImg'><img src={galleryImg1}></img></div>
                            <div className='galleryImg'><img src={galleryImg2}></img></div>
                        </article>
                        <article className='flex' >
                            <div className='galleryImg'><img src={galleryImg3}></img></div>
                            <div className='galleryImg'><img src={galleryImg4}></img></div>
                        </article>
                    </div>
                </div>
        </section>
    );
}
 
export default Gallery_subPage;