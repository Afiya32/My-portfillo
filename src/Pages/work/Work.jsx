import { Helmet } from "react-helmet";
import Socalwork from "../../Components/Socalwork";
import Business from "../../Components/Business";
import Health from "../../Components/Health";
import Travel from "../../Components/Travel";
import Pending from "../../Components/Pending";


const Work = () => {
    return (
        <div className="min-h-[70vh]">
            <Helmet>
                <title>BH || My-work</title>
            </Helmet>
         <div>
         <div className=" flex justify-center items-center mt-3">
           <div role="tablist" className="tabs tabs-lifted">
  <input type="radio" name="my_tabs_2" role="tab" className="tab " aria-label="Social Work"  />
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6"><Socalwork/></div>

  <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Business" />
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6"><Business/></div>

  <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Health and FitNess" checked />
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6"><Health/></div>
  <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Travel agnecy" />
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6"><Travel/></div>
  <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Pending" />
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6"><Pending/></div>
</div>
</div>  
            
            </div> 
        </div>
    );
};

export default Work;