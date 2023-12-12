import { Helmet } from 'react-helmet';
import design from '../../images/withoutbg/Capture-removebg-preview.png'
import background from '../../images/Design/bg.jpg'
import Hero from '../../Components/Hero';

const HomeComponent = () => {
    return (
        <div className='w-full  min-h-[80vh] mt-3 mx-auto bg-cover' style={{ backgroundImage: `url(${background})` }}>
            <Helmet>
                <title>BH || Home</title>
            </Helmet>
            <div className="w-2/3 flex justify-center items-center mt-3 pt-3 mx-auto " >
        <img src={design} alt="" />
      </div>
          <div className='text-center mt-3'>
          <div className='text-center mt-3 relative'>
      <h1 className='text-4xl font-bold relative group'>
        <span className='text-red-500'>B</span>!plob{' '}
        <span className='text-green-500'>H</span>ossa<span className='text-red-500'>!</span>n
        <span className='absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity'>
          <span className='text-red-500'>B</span>iplob <span className='text-green-500'>H</span>ossain
        </span>
      </h1>
      <h1 className='text-4xl opacity-10 z-1 font-bold'>
        <span className='text-red-500'>B</span>!plob{' '}
        <span className='text-green-500'>H</span>ossa<span className='text-red-500'>!</span>n
      </h1>
    </div>
          
            <p className='text-xl font-semibold'>I am a Front-End-Web Developer</p>
          </div>
          <div>
            <Hero/>
          </div>
          
        </div>
    );
};

export default HomeComponent;