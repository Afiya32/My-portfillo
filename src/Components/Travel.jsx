import img1 from '../images/Tour/tour-1.png'
import img2 from '../images/Tour/tour-2.png'
import img3 from '../images/Tour/tour-3.png'
import img4 from '../images/Tour/tour-4.png'
import HeroCard from './Shared/HeroCard';

const Travel = () => {
    return (
        <div>
        <h1 className='p-5 text-2xl text-center'> This is a Health and Fitsness related E-Commarts website</h1>
           <div>
               <HeroCard img1={img1} img2={img2} img3={img3} img4={img4}/>
           </div>
           <div>
               <button className='btn btn-outline btn-info btn-block'> <a href="https://tour-heart-dadd6.web.app/">Go to this website </a></button>
           </div>
       </div>
    );
};

export default Travel;