import img1 from "../images/withoutbg/IMG-20230225-WA0000-removebg-preview.png"
import img2 from "../images/withoutbg/IMG20231209083650-removebg-preview.png"
import img3 from "../images/withoutbg/myimage-removebg-preview.png"

const Slider = () => {
    return (
        <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img3} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img1} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div> 
        
      </div>
    );
};

export default Slider;