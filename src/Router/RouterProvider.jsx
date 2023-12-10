import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Home from "../Pages/Home";
import HomeComponent from "../Pages/HomeComponents/HomeComponent";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
      children:[
        {
            path:"/",
            element:<HomeComponent/>
        }
      ]
    },
  ]);