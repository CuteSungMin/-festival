import {Link } from 'react-router-dom';
import {useState, useRef ,useEffect} from 'react';
import headerImg from '../img/headerImg.png';
import '../pageCss/notiList.css';

const NotiList = ({notiData}) => {
    const [count,setCount] = useState(10);
    const btn = useRef();
    const [isLiOn, setLiOn] = useState(0); // 초기 메뉴 항목을 0으로 설정
    const lis = useRef([]); 
    // const moreBtn = ()=>{
    //     if(count < notiData.length){
    //         setCount(count + 10)
    //     }else{
    //         // console.log(btn.current)
    //         // btn.current.style.display='none';
    //         btn.current.style.setProperty('display','none');
    //         btn.current.style.backgroundColor='red';
    //         // btn.current.style.color='white';
    //     }
    // }
    const handleMouseOver = (index) => {
        setLiOn(index);
    };

    useEffect(() => { 
    
        // 컴포넌트가 마운트될 때, 마우스 이벤트 리스너를 추가합니다.


            lis.current.forEach((li, index) => {
                li.addEventListener('mouseover', () => handleMouseOver(index));
                li.addEventListener('mouseleave', () => handleMouseOver(null)); // 마우스를 떠날 때 null로 설정
            });
    
            return () => {

                window.onload = function(){
                // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거합니다.
                lis.current.forEach((li, index) => {
                    li.removeEventListener('mouseover', () => handleMouseOver(index));
                    li.removeEventListener('mouseleave', () => handleMouseOver(null));
                });
            }
            };

    }, []);
    
   
    return ( 
        <section className="notiList">
            <article className='w1500'>
            <div className='notiSubHeader'>
                    <div><img src={headerImg}></img></div>  {/* Header 이미지를 표시 */}
                    <h2>공지사항</h2>
                </div>
                <div className='notiSubHeaderBtns'>
                    <ul className='flex2'>
                        {/* 메뉴 항목을 클릭할 때 클래스를 조건부로 설정하여 활성/비활성 스타일을 적용합니다. */}
                        <Link to='/NoticeList'><li className={isLiOn === 0 ? 'on' : 'off'} ref={(li) => (lis.current[0] = li)}>공지사항</li></Link>
                        <Link to='/NoticeWrite'><li className={isLiOn === 1 ? 'on' : 'off'} ref={(li) => (lis.current[1] = li)}>문의하기</li></Link>
                        <Link to='/FAQ'><li className={isLiOn === 2 ? 'on' : 'off'} ref={(li) => (lis.current[2] = li)}>FAQ</li></Link>
                    </ul>
                </div>    
                <table className='listTit'>
                    <colgroup>
                        <col className='notNum'/>
                        <col className='notTit'/>
                        <col className='notName'/>
                        <col className='notDate'/>
                    </colgroup>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>등록일</th>
                    </tr>
                    <tr>
                        <td>공지</td>
                        <td>2023 경복궁 별빛야행 입장 및 관람안내</td>
                        <td>민규리</td>
                        <td>2023-10-18</td>
                    </tr>
                    <tr>
                        <td>공지</td>
                        <td>2023 경복궁 별빛야행 입장 및 관람안내</td>
                        <td>민규리</td>
                        <td>2023-10-18</td>
                    </tr>
                    <tr>
                        <td>공지</td>
                        <td>2023 경복궁 별빛야행 입장 및 관람안내</td>
                        <td>민규리</td>
                        <td>2023-10-18</td>
                    </tr>
                    {notiData.map((notiD)=>
                        <tr key={notiD.notiId} className='ddd'>
                                <td><Link to={`/NoticeList/${notiD.notiId}`}>{notiD.notiId}</Link></td>
                                <td><Link to={`/NoticeList/${notiD.notiId}`}>{notiD.title}</Link></td>
                                <td><Link to={`/NoticeList/${notiD.notiId}`}>{notiD.userName}</Link></td>
                            <td>{new Date(notiD.createDate).toLocaleDateString().replace(/\./g, '').replace(/\s/g, '-')}</td>
                        </tr>
                    )}
                </table>
                <div className='searchBox'>
                    <input type='text' placeholder='내용 + 제목'></input>
                    <button className='searchBtn' >검색</button>
                </div>
            </article>
        </section>
     );
}
NotiList.defaultProps = {
    notiData:[]
}
 
export default NotiList;