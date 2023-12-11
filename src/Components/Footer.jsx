import logo from '../images/logo/logo-profile-2-removebg-preview.png'

const Footer = () => {
    return (
        <footer className="footer items-center p-4 bg-neutral text-neutral-content">
        <aside className="items-center grid-flow-col">
         <img src={logo} className='w-16 h-16 ' alt="" /> 
          <p>Copyright © 2023 - All right reserved</p>
        </aside> 
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
         <a href="https://web.facebook.com/hunter.biplob.3">facebook</a>
         <a href="">facebook</a>
         <a href="">facebook</a>
        </nav>
      </footer>
    );
};

export default Footer;