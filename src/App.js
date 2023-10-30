import "./App.css";
import "./css/reset.css";
import Sky from './component/sky';
import Palace from './component/palace';
import Footer from "./component/footer";
import Section1 from './component/section1';
import Section3 from './component/section3';
import Header from "./component/header";
import Top from "./component/top";
import {useState,useRef} from 'react';


function App() {
  
  return(
    <div>
        <section>
          <Sky />
          <Palace />
        </section>
        <Top/>
        <Header/>
        <Section1/>
        <section id="section2"></section>
        <Section3/>
        <section id="section4"></section>
        <section id="section5"></section>

        <Footer/>
    </div>
  );
}

export default App;