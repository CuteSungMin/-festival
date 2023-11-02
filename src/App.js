import "./App.css";
import "./css/reset.css";
import {Routes, Route} from 'react-router-dom'
import Sky from './component/sky'
import Top from "./component/top"
import Header from "./component/header"
import Footer from "./component/footer";
import Main from "./component/main"

//Pages
import Section1_subPage from "./page/section1_subPage";
import Section2_subPage from "./page/section2_subPage";
import Section3_subPage from "./page/section3_subPage";
import Section4_announcement1 from "./page/section4_announcement1";
import Section4_announcement2 from "./page/section4_announcement2";
import Section5_subPage from "./page/section5_subPage";

function App() {
  return(
    <div>
          <Sky />
        <Routes>
          <Route path="/" element={<><Top/><Header/><Main/></>}/>
          <Route path="/Guide" element={<><Header/><Section1_subPage/></>}/>
          <Route path="/Program" element={<><Header/><Section2_subPage/></>}/>
          <Route path="/Event" element={<><Header/><Section3_subPage/></>}/>
          <Route path="/NoticeList" element={<><Header/><Section4_announcement1 /></>}/>
          <Route path="/NoticeWrite" element={<><Header/><Section4_announcement2 /></>}/>
          <Route path="/FAQ" element={<></>}/>
          <Route path="/Gallery" element={<><Header/><Section5_subPage/></>}/>
          <Route path="/Login" element={<></>}/>
          <Route path="/Join" element={<></>}/>
        </Routes>
        <Footer />
    </div>
  );
} 
export default App;