
import {
  createBrowserRouter,
  
  Link,
} from "react-router-dom";
import UserTemplate from "../template/user-template/user.template";
import Login from "../pages/auth/Login/Login";
import Register from "../pages/auth/Register/Register";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
{
 path:'',
 element:<Home/>
},

  {
   path:'Login',
   element:<Login/>
  },
  {
   path:'Register',
   element:<Register/>
  },

]);