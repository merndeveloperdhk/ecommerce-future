import { Link, NavLink } from "react-router-dom";
import { FaRegUser, FaUser } from "react-icons/fa";
import { PiSignOutBold } from "react-icons/pi";
import { FaLock } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { BsFillCartDashFill } from "react-icons/bs";
import moment from "moment";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  

  //logout
  const handleSignOut = () => {
    logOut()
      .then(() => {
        console.log("SignOut successfull");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <header className="p-2 bg-base-100 text-xs sticky top-0 z-50">
      <div className=" flex justify-between mx-auto">
        <div className="flex flex-row justify-between md:flex-none gap-6 md:gap-0">
          <div className="md:block hidden">
            <h1>
              
              {user ? <>
                Welcome <span className="text-green-600"> {user.displayName} </span>
                
              </>
                
               : (
                <>
                <span>welcome Default message</span>
                  {" "}
                  <Link to="/register" className="text-green-600">
                    Join free
                  </Link>{" "}
                  OR{" "}
                  <Link to="/login" className="text-green-600">
                    Log in
                  </Link>
                </>
              )}
            </h1>
          </div>
          <div>
            <div className="md:hidden block">
              <li className="flex">
                <NavLink
                  rel="noopener noreferrer"
                  to="/postAdd"
                  className="flex items-center px-1 -mb-1 border-r-2 dark:border-transparent hover:text-green-600 font-semibold"
                >
                  Post Add
                </NavLink>
              </li>
            </div>
          </div>

          <div className="flex gap-2 md:justify-end md:hidden">
            <div className="flex flex-col items-center">
              <MdFavoriteBorder className="text-lg"></MdFavoriteBorder>
              <h1 className="text-xs">Favourite</h1>
            </div>
            <div className="flex flex-col items-center">
              <FaRegUser className="text-lg"></FaRegUser>
              <h1 className="text-xs">Users</h1>
            </div>
            <div className="flex flex-col items-center">
              <BsFillCartDashFill className="text-lg"></BsFillCartDashFill>
              <Link to='/myCart'><h1 className="text-xs">My Cart</h1></Link>
            </div>
          </div>
        </div>
        {/* middle */}
        <h1 className="hidden md:block">
          {moment().format("dddd, MMMM Do YYYY")}
        </h1>
        {/* Right side */}
        <ul className=" hidden space-x-1 md:flex items-center">
          <li className="flex ">
            {user ? (
              <div className="flex gap-1 items-center">
                {" "}
                <span>{user.email}</span>
                <span ><img className="w-4 rounded-full inline-block" src={user.photoURL} alt="" /></span>
                <Link
                  onClick={handleSignOut}
                  rel="noopener noreferrer"
                  to="/login"
                  className="flex items-center px-1 gap-[2px] -mb-1 border-r-2 dark:border-transparent"
                >
                  <PiSignOutBold ></PiSignOutBold > Sign Out
                </Link>
              </div>
            ) : (
              <>
                <Link
                  rel="noopener noreferrer"
                  to="/register"
                  className="flex items-center px-1 gap-1 -mb-1 border-r-2 dark:border-transparent"
                >
                  <FaLock></FaLock> Register
                </Link>
                <Link
                  rel="noopener noreferrer"
                  to="/login"
                  className="flex items-center px-1 gap-1 -mb-1 border-r-2 dark:border-transparent"
                >
                  <FaLock></FaLock> Login
                </Link>
              </>
            )}
          </li>
          <li className="flex">
            <Link
              rel="noopener noreferrer"
              to="/myAccount"
              className="flex items-center px-1 gap-1 -mb-1 border-r-2 dark:border-transparent"
            >
              <FaUser></FaUser> MyAccount
            </Link>
          </li>

          <li className="flex">
            <NavLink
              rel="noopener noreferrer"
              to="/about"
              className="flex items-center px-1 -mb-1 border-r-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400"
            >
              About Us
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              rel="noopener noreferrer"
              to="/contact"
              className="flex items-center px-1 -mb-1 border-r-2 dark:border-transparent"
            >
              Contact Us
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              rel="noopener noreferrer"
              to="/postAdd"
              className="flex items-center px-1 -mb-1 border-r-2 dark:border-transparent bg-[#3f93a8] rounded duration-500 text-white font-semibold"
            >
              Post Add
            </NavLink>
          </li>
        </ul>
        {/* <button className="flex justify-end p-4 md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
                
            </button> */}
      </div>
    </header>
  );
};

export default Header;
