/* eslint-disable react/prop-types */


const HeroCard = ({img1,img2,img3,img4}) => {
    return (
        <div>
         <div className="carousel w-full">
  <div id="item1" className="carousel-item w-full">
    <img src={img1} className="w-full" />
  </div> 
  <div id="item2" className="carousel-item w-full">
    <img src={img2} className="w-full" />
  </div> 
  <div id="item3" className="carousel-item w-full">
    <img src={img3} className="w-full" />
  </div> 
  <div id="item4" className="carousel-item w-full">
    <img src={img4} className="w-full" />
  </div>
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  <a href="#item4" className="btn btn-xs">4</a>
</div>
        </div>
    );
};

export default HeroCard;