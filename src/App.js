import "./App.css";
import "./css/reset.css";
import {Routes, Route, Link} from 'react-router-dom';
import {useState, useRef, useEffect} from 'react';
import Sky from './component/sky'
import Top from "./component/top"
import Header from "./component/header"
import Footer from "./component/footer";
import Main from "./component/main"
import Login from './joinPage/login';

//Pages
import Section1_subPage from "./page/section1_subPage";
import Section2_subPage from "./page/section2_subPage";
import Section3_subPage from "./page/section3_subPage";
import NotiList from "./page/notiList";
import NotiDetail from "./page/notiDetail";
import NotiWrite from "./page/notiWrite";

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

  return(
    <div>
        <Sky />
        <Routes>
          <Route path="/" element={<><Top/><Header/><Main/></>}/>
          <Route path="/Guide" element={<><Header/><Section1_subPage/></>}/>
          <Route path="/Program" element={<><Header/><Section2_subPage/></>}/>
          <Route path="/Event" element={<><Header/><Section3_subPage/></>}/>
          <Route path="/NoticeList" element={<><Header/><NotiList notiData={notiData}/></>}/>
          <Route path="/NoticeList/:idx" element={<><Header/><NotiDetail notiData={notiData} notiRemove={notiRemove}/></>}/>
          <Route path="/NoticeWrite" element={<><Header/><NotiWrite notiCreate={notiCreate}/></>}/>
          <Route path="/FAQ" element={<></>}/>
          <Route path="/Gallery" element={<></>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Join" element={<></>}/>
        </Routes>
        <Footer />
    </div>
  );
} 
export default App;