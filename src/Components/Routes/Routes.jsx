import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import Home from "../Home/Home";
import Login from "../User/Login";
import Register from "../User/Register";
import Contact from "../Contact/Contact";
import Error from "../Error/Error";
import PostAdd from "../PostAdd/PostAdd";
import Terms from "../Terms/Terms";
import ProductDetails from "../ProductDetails/ProductDetails";
import Cart from "../Cart/Cart";
import Shop from "../Shop/Shop";
import ForgotPassword from "../User/ForgotPassword";
import MyAccount from "../PrivateRoute/MyAccount";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import MyProfile from "../PrivateRoute/MyProfile";
import Blog from "../Blog/Blog";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut></MainLayOut>,
      errorElement:<Error></Error>,
      children:[
        {
          path:'/',
          element:<Home></Home>
          
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/contact',
          element:<Contact></Contact>
        },
        {
          path:'/postAdd',
          element:<PostAdd></PostAdd>
        },
        {
          path:'/terms',
          element:<Terms></Terms>
        },
        {
          path:'/productDetails/:id',
          element:<ProductDetails></ProductDetails>,
          loader: () => fetch("/public/car.json")
        },
        {
          path:'/myCart',
          element:<Cart></Cart>
        },
        {
          path:'/shop',
          element:<Shop></Shop>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        },
        {
          path:'/forgotPassword',
          element:<ForgotPassword></ForgotPassword>
        },
        {
          path:'/myAccount',
          element:<PrivateRoute><MyAccount></MyAccount></PrivateRoute>
        },
        {
          path:'/myProfile',
          element:<PrivateRoute><MyProfile></MyProfile></PrivateRoute>
        }
        
      ]
    }
    
  ]);
  export default router;