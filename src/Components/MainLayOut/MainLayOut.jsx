import { Helmet } from "react-helmet-async";
import Navbar from "../Navbar/Navbar";
import Header from "../Navbar/Header";
import NavBottom from "../Navbar/NavBottom";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const MainLayOut = () => {
  return (
    <div className="space-y-3 ">
      <Helmet>
        <title>Home | Welcome to my site</title>
      </Helmet>
      <Header></Header>
      <Navbar></Navbar>
      <NavBottom></NavBottom>
      <div className="min-h-screen">
      <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayOut;
