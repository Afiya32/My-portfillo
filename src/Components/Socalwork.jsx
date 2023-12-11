import img1 from '../images/social/socail-1.png'
import img2 from '../images/social/socail-2.png'
import img3 from '../images/social/socail-3.png'
import img4 from '../images/social/social-4.png'
import HeroCard from './Shared/HeroCard';


const Socalwork = () => {
    return (
        <div>
         <h1 className='p-5 text-2xl text-center'> This is a Socail events related E-Commarts website</h1>
            <div>
                <HeroCard img1={img1} img2={img2} img3={img3} img4={img4}/>
            </div>
            <div>
                <button className='btn btn-outline btn-info btn-block'> <a href="https://socai-events.web.app/">Go to this website </a></button>
            </div>
        </div>
    );
};

export default Socalwork;