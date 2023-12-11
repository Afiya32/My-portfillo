import { NavLink, Outlet } from "react-router-dom";
import logo from '../images/logo/logo-profile-4-removebg-preview.png'
import Footer from "../Components/Footer";



const Home = () => {
  const handleDownLoad=()=>{
  
  

  }
    return (
       <div>
         <div className="drawer">
          
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
          <div className="drawer-content flex flex-col">
            {/* Navbar */}
            <div className="w-full navbar bg-gray-500 text-white">
              <div className="flex-none lg:hidden">
                <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                  <img src={logo} alt="" />
                </label>
              </div> 
              <div className="flex-1 px-2 mx-2"><button className="btn btn-outline uppercase  btn-info">Biplob Hossain</button></div>
              <div className="flex-none  hidden lg:block">
                <ul className="menu menu-horizontal flex justify-center items-center">
                  {/* Navbar menu content here */}
                  <li>  <NavLink to='/'     className={({ isActive, isPending }) =>
                        isActive
                          ? "btn btn-outline  uppercase text-red-800 rounded btn-info p-2"
                          : isPending
                          ? "text-white p-2"
                          : ""
                      }>Home</NavLink>  </li>
                  <li>  <NavLink to='/about' className={({ isActive, isPending }) =>
                        isActive
                          ? "btn btn-outline uppercase btn-info p-2"
                          : isPending
                          ? "text-white p-2"
                          : ""
                      }>About me</NavLink>  </li>
                  <li >  <NavLink to='/work' className={({ isActive, isPending }) =>
                        isActive
                          ? "btn btn-outline uppercase btn-info p-2"
                          : isPending
                          ? "text-white p-2"
                          : ""
                      }> my work</NavLink> </li>
                  <li>  <NavLink to='/contact' className={({ isActive, isPending }) =>
                        isActive
                          ? "btn btn-outline uppercase btn-info p-2"
                          : isPending
                          ? "text-white p-2"
                          : ""
                      }>contact me</NavLink> </li>
                      <li><button onClick={handleDownLoad} className="btn btn-outline btn-accent">MY-resume</button></li>
                  
                </ul>
              </div>
            </div>
            {/* Page content here */}
           <Outlet/>
          </div> 
          <div className="drawer-side">
            <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
            <ul className="menu p-4 w-80 min-h-full bg-gray-500 text-white">
              {/* Sidebar content here */}
                <li>  <NavLink to='/'  className={({ isActive, isPending }) =>
                        isActive
                          ? "btn btn-outline uppercase btn-info p-2"
                          : isPending
                          ? "text-white p-2"
                          : ""
                      }>Home</NavLink> </li>
                <li> <NavLink to='/about' className={({ isActive, isPending }) =>
                        isActive
                          ? "btn btn-outline uppercase text-red-400 btn-info p-2"
                          : isPending
                          ? "text-white p-2"
                          : ""
                      }>About me</NavLink> </li>
                <li>  <NavLink to='/work' className={({ isActive, isPending }) =>
                        isActive
                          ? "btn btn-outline uppercase btn-info p-2"
                          : isPending
                          ? "text-white p-2"
                          : ""
                      }> my work</NavLink> </li>
                <li>  <NavLink to='/contact' className={({ isActive, isPending }) =>
                        isActive
                          ? "btn btn-outline uppercase btn-info p-2"
                          : isPending
                          ? "text-white p-2"
                          : ""
                      }>contact me</NavLink> </li>
                       <li><button onClick={handleDownLoad} className="btn btn-outline btn-accent text-center">MY-resume</button></li>
                  
            </ul>
          </div>
        </div>
        <div className="mt-2">
        <Footer/>
        </div>
       </div>
    );
};

export default Home;