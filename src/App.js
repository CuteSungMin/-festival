import "./App.css";
import "./css/reset.css";
import { Routes, Route } from 'react-router-dom'
import { useState, useRef, useEffect} from "react";
import LoadingImg from './img/mainText2.png'
import Sky from './component/sky'
import Top from "./component/top"
import Header from "./component/header"
import Footer from "./component/footer";
import Main from "./component/main"
import { withTranslation } from "react-i18next";

//Pages
import Section1_subPage from "./page/section1_subPage";
import Section2_subPage from "./page/section2_subPage";
import Section3_subPage from "./page/section3_subPage";
import Section5_subPage from "./page/section5_subPage";
import NotFound from './page/notFound';

// community
import NotiDetail from './page/notiDetail';
import NotiList from './page/notiList';
import NotiWrite from './page/notiWrite';

// join
import Login from "./joinPage/login";


function App() {
  const [notiData, setNotiData] = useState([]);
  const dataId = useRef(0);
  const notiCreate= (title,userName,content) =>{
    const createDate= new Date().getTime();
    const NewItem = {
      title,
      userName,
      content,
      createDate,
      notiId : dataId.current
    }
    dataId.current +=1;
    setNotiData([...notiData, NewItem]);
  }
  const notiRemove = (id)=>{
    const newlist=notiData.filter((data)=>data.notiId !== id);
    setNotiData(newlist);
  }

  const notiSearch = (txt)=>{
    const searchlist=notiData.filter((data)=>{
      data.title.toLowerCase().includes(txt.toLowerCase()) ||
      data.content.toLowerCase().includes(txt.toLowerCase())
    })
    setNotiData(searchlist);
  }

  const [LodingPage, setLodingPage] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setLodingPage(false);
    },2500)
  })
  return(
    <div className="loadingWrap">
      {LodingPage ? (
      <div>
        <Sky>
        </Sky>
        <div className="loadingScreen">
          <div className="loadingImg">
            <img src={LoadingImg} className="loadingContent"></img>
            <p className="loadingText">Loading</p>
          </div>
        </div>
      </div>
      ) : (
        <div>
        <Sky />
        <Routes>
          <Route path="/" element={<><Top/><Header/><Main/></>}/>
          <Route path="/Guide" element={<><Header/><Section1_subPage/></>}/>
          <Route path="/Program" element={<><Header/><Section2_subPage/></>}/>
          <Route path="/Event" element={<><Header/><Section3_subPage/></>}/>
          <Route path="/NoticeList" element={<><Header/><NotiList notiData={notiData} notiSearch={notiSearch}/></>}/>
          <Route path="/NoticeList/:idx" element={<><Header/><NotiDetail notiData={notiData} notiRemove={notiRemove}/></>}/>
          <Route path="/NoticeWrite" element={<><Header/><NotiWrite notiCreate={notiCreate}/></>}/>
          <Route path="/FAQ" element={<><Header/></>}/>
          <Route path="/Gallery" element={<><Header/><Section5_subPage/></>}/>
          <Route path="/Login" element={<><Header/><Login/></>}/>
          <Route path="/Join" element={<><Header/></>}/>
          <Route path="*" element={<><Header/><NotFound/></>}/>
        </Routes>
        <Footer />
        </div>)}
    </div>
  );
} 
export default App;