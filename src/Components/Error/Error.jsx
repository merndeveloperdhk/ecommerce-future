import { Helmet } from "react-helmet-async";
import Footer from "../Footer/Footer";
import Header from "../Navbar/Header";
import Navbar from "../Navbar/Navbar";
import NavBottom from "../Navbar/NavBottom";
import RightProduct from "../ProductCategory/RightProduct";


const Error = () => {
    return (
        <div className="space-y-3">
            <Helmet>
        <title>Error | Welcome to my site</title>
      </Helmet>
            <Header></Header>
            <Navbar></Navbar>
            <NavBottom></NavBottom>
            
            <div className="flex items-center gap-2 ">
                <RightProduct></RightProduct>
                <img className="mx-auto py-0 my-0" src="https://i.ibb.co/TRRST31/404-error.jpg" alt="" />
                <RightProduct></RightProduct>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Error;