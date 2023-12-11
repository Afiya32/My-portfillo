import { Helmet } from "react-helmet";
import PersonInfo from "../../Components/PersonInfo";
import Education from "../../Components/Education";
import Skills from "../../Components/Skills";


const About = () => {
    return (
        <div>
            <Helmet>
                <title>BH || About</title>
            </Helmet>
           <div className=" flex justify-center items-center mt-3">
           <div role="tablist" className="tabs tabs-lifted">
  <input type="radio" name="my_tabs_2" role="tab" className="tab " aria-label="Personal info" checked />
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6"><PersonInfo/></div>

  <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Educational info" />
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6"><Education/></div>

  <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Skills" />
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6"><Skills/></div>
</div></div>  
        </div>
    );
};

export default About;