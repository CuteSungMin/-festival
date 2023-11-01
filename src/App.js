import "./App.css";
import "./css/reset.css";
import Sky from './component/sky'
import Palace from './component/palace'
import Footer from "./component/footer";
import Section1 from './component/section1'
import Section2 from './component/section2'
import Section3 from './component/section3'
import Section4 from './component/section4'
import Section2_subPage from "./page/section2_subPage";
import Section4_announcement1 from "./page/section4_announcement1";
import Section4_announcement2 from "./page/section4_announcement2";
import Section5_subPage from "./page/section5_subPage";
import Header from "./component/header"
import Top from "./component/top"


function App() {

  return(
    <div>
        <section>
          <Sky />
          <Palace />
        </section>
        <Top/>
        <Header/>
        {/* <Section1/>
        <Section2/>
        <Section3/>
        <Section4/> */}
        {/* <Section2_subPage /> */}
        {/* <Section4_announcement1 /> */}
        <Section4_announcement2 />
        {/* <Section5_subPage /> */}
        <Footer />
    </div>
  );

} 

export default App;