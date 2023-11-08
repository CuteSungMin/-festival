import MainInfo from './mainInfo'
import Program from './program';
import Event from "./event";
import Community from './community';
import Gallery from './gallery'
import Palace from './palace';



const Main = () => {
    return ( 
        <div>
            <section>
                <Palace />
            </section>
                <MainInfo/>
                <Program/>
                <Event/>
                <Community/>
                <Gallery/>
        </div>
     );
}
 
export default Main;