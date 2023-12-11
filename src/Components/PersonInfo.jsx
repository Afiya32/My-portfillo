import Slider from "./Slider";


const PersonInfo = () => {
    return (
        <div className="hero min-h-screen  bg-base-200">
        <div className="hero-content  justify-between items-center flex-col w-1/2  lg:flex-row">
         <Slider/>
          <div>
            <h1 className="text-xl font-bold">Name : Biplob Hossain</h1>
            <h1 className="text-xl font-bold"> Father's Name : Robiul Howlader</h1>
            <h1 className="text-xl font-bold">Mother's Name : Moyna Khatun </h1>
            <h1 className="text-xl font-bold">Date of Birth : 26 th jume ,2000 </h1>
            <h1 className="text-xl font-bold">Address : Benapole .Jashore,Bangladesh</h1>
            <h1 className="text-xl font-bold">Mobile : +8801728924273</h1>
            <h1 className="text-xl font-bold">Email : biplobguru123@gmail.com</h1>

         
            <h1 className="text-xl font-bold">Nationality : Bangladeshi</h1>

         
          </div>
        </div>
      </div>
    );
};

export default PersonInfo;