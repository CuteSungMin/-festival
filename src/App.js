import "./App.css";
import "./css/reset.css";
import Sky from './component/sky';
import Palace from './component/palace';
import Footer from "./component/footer";
import Section1 from './component/section1';
import Section3 from './component/section3';
import Header from "./component/header";
import Top from "./component/top";
import {useState,useRef,useEffect} from 'react';
import {Link, Route,Routes} from 'react-router-dom';
import Section1_supPage from './component/section1_subPage';


function App() {
  
  
  return(
    <div>
        <section>
          <Sky />
          {/* <Palace /> */}
        </section>
        {/* <Top/> */}
        <Header/>
        <Section1 id="section1" />
        <Section1 id="section2"/>
        <Section3 id="section3"/>
        <Section1 id="section4" />
        <Section1 id="section5" />

        {/* <Section1_supPage/> */}
        <Footer />
    </div>
  );
}

export default App;