import Section1 from './section1'
import Section2 from './section2';
import Section3 from "./section3";
import Section4 from './section4';
import Section5 from './section5'
import Palace from './palace';
import i18n from '../lang/i18n';
import { withTranslation,useTranslation } from 'react-i18next';

const Main = () => {

    return ( 
        <div>
            <Palace />
            <Section1/>
            <Section2/>
            <Section3/>
            <Section4/>
            <Section5/>
        </div>
     );
}
 
export default Main;