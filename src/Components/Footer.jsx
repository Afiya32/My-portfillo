import logo from '../images/logo/logo-profile-2-removebg-preview.png'
import { FaFacebook } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
    return (
        <footer className="footer items-center my-2 p-4 bg-neutral text-neutral-content">
        <aside className="items-center mx-auto grid-flow-col">
         <img src={logo} className='w-16 h-16 ' alt="" /> 
          <p>Copyright © 2023 - All right reserved</p>
        </aside> 
        <nav className="grid-flow-col mx-auto justify-center items-center gap-4 md:place-self-center md:justify-self-end">
        <button className='btn btn-outline btn-info w-10 h-10'> <a href="https://web.facebook.com/hunter.biplob.3"><FaFacebook className='text-2xl'/></a> </button>
         <button className='btn btn-outline btn-info w-10 h-10'><a href="https://www.linkedin.com/in/biplob-hossain-a09a9a269/"><CiLinkedin className='text-2xl'/></a></button>
       
        </nav>
      </footer>
    );
};

export default Footer;