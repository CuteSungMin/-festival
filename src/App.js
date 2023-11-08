import "./App.css";
import "./css/reset.css";
import { Routes, Route } from 'react-router-dom'
import { useState, useRef, useEffect} from "react";
import LoadingImg from './img/mainText2.png'

//components
import Sky from './components/sky'
import Top from "./components/top"
import Header from "./components/header"
import Footer from "./components/footer";
import Main from "./components/main"

//Pages
import MainInfo_subPage from "./page/mainInfo_subPage";
import Program_subPage from "./page/program_subPage";
import Event_subPage from "./page/event_subPage";
import Gallery_subPage from "./page/gallery_subPage";
import NotFound from './page/notFound';

// community
import NotiDetail from './page/notiDetail';
import NotiList from './page/notiList';
import NotiWrite from './page/notiWrite';
import FAQ from './page/FAQ';

// join
import Login from "./joinPage/login";
import SignUp from "./page/SignUp";

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
        <Sky/>

        <Routes>
          <Route path="/" element={<><Top/><Header/><Main/></>}/>
          <Route path="/Guide" element={<><Header/><MainInfo_subPage/></>}/>
          <Route path="/Program" element={<><Header/><Program_subPage/></>}/>
          <Route path="/Event" element={<><Header/><Event_subPage/></>}/>
          <Route path="/NoticeList" element={<><Header/><NotiList notiData={notiData}/></>}/>
          <Route path="/NoticeList/:idx" element={<><Header/><NotiDetail notiData={notiData} notiRemove={notiRemove}/></>}/>
          <Route path="/NoticeWrite" element={<><Header/><NotiWrite notiCreate={notiCreate}/></>}/>
          <Route path="/FAQ" element={<><Header/><FAQ /></>}/>
          <Route path="/Gallery" element={<><Header/><Gallery_subPage/></>}/>
          <Route path="/Login" element={<><Header/><Login/></>}/>
          <Route path="/Join" element={<><Header/><SignUp/></>}/>
          <Route path="*" element={<><Header/><NotFound/></>}/>
        </Routes>

        <Footer />
        
        </div>)}
    </div>
  );
} 
export default App;