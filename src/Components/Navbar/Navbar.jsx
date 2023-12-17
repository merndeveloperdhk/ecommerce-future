import { MdFavoriteBorder } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { BsFillCartDashFill } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div className=" bg-base-100 sticky top-8 z-50">
      <div className="flex flex-col md:flex-row md:justify-between items-center space-y-2 md:space-y-0 ">
        <Link to='/' className="btn btn-ghost text-xl">Dutyfreeshop</Link>

        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Search items "
            className="input input-bordered  border-[#149777] rounded-full h-9 w-80 md:w-96"
          />
          <button className="absolute right-3 text-2xl"><IoIosSearch /></button>
        </div>

       <div className="hidden md:block">
       <div className="flex gap-1 md:gap-2 ">
          <div className="flex flex-col items-center">
            <MdFavoriteBorder className="text-lg"></MdFavoriteBorder>
            <h1 className="text-xs font-semibold">Favourite</h1>
          </div>
          <div className="flex flex-col items-center">
            <FaRegUser className="text-lg"></FaRegUser>
            <h1 className="text-xs font-semibold">Users</h1>
          </div>
          <div >
            <Link to='/myCart' className="flex flex-col items-center">
            <BsFillCartDashFill className="text-lg"></BsFillCartDashFill>
            <h1 className="text-xs font-semibold">My Cart</h1></Link>
          </div>
         
          
        </div>
       </div>
      </div>
    </div>
  );
};

export default Navbar;
