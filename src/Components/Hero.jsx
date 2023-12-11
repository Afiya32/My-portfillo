import Slider from "./Slider";


const Hero = () => {
    return (
        <div className="hero min-h-screen grid justify-between item-center mx-auto">
        <div className="hero-content flex-col lg:flex-row">
          <Slider/>
          <div>
            <h1 className="text-xl font-bold">My name is Biplob Hossain. I am a web developer.</h1>
           <p className="pt-2">
            And I am Very passionate and dedicated to my work. 
With 6 months learning experience as a professional MERN stock web development. I have acquired the skills and knowledge to make your project a success. I enjoy every step of the design process from discussion and collaboration. 
           </p>
           <div className="flex justify-center items-center mt-3">
           <button className="btn btn-info btn-outline btn-block px-3">Hire Me</button>
           </div>
          </div>
        </div>
      </div>
    );
};

export default Hero;