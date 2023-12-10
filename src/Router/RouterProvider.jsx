import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Home from "../Pages/Home";
import HomeComponent from "../Pages/HomeComponents/HomeComponent";
import About from "../Pages/about/About";
import Work from "../Pages/work/Work";
import Contact from "../Pages/contact/Contact";
import Error from "../Pages/Error/Error";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
      errorElement:<Error/>,
      children:[
        {
            path:"/",
            element:<HomeComponent/>
        },{
            path:"/about",
            element:<About/>
        },{
            path:"/work",
            element:<Work/>
        },{
            path:"/contact",
            element:<Contact/>
        }
      ]
    },
  ]);