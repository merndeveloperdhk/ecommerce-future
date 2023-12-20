import { IoMenu } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

const NavBottom = () => {
  return (
    <div className="navbar bg-base-100 font-semibold sticky top-[75px] z-50 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>Products</Link>
              <ul className="p-2">
                <li>
                  <Link>Mobile</Link>
                </li>
                <li>
                  <Link>Laptop</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link>Products</Link>
              <ul className="p-2">
                <li>
                  <Link>Mobile</Link>
                </li>
                <li>
                  <Link>Laptop</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link>Products</Link>
              <ul className="p-2">
                <li>
                  <Link>Mobile</Link>
                </li>
                <li>
                  <Link>Laptop</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to='/shop'>Shop</Link>
            </li>
            <li>
             <NavLink to='/blog' className={({isActive}) => isActive ? "text-red-500" : " text-black" } >Maps</NavLink>
            </li>
          </ul>
        </div>
        <div className="hidden md:block">
          <div className="flex items-center   gap-1">
            <IoMenu></IoMenu>
            <h1> All Categories</h1>
          </div>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="hover:bg-[#149777] hover:text-white duration-500 hover:rounded">
            <Link>Home</Link>
          </li>
          <li tabIndex={0}>
            <details>
              <summary className="hover:bg-[#149777] hover:text-white duration-500 hover:rounded">Products</summary>
              <ul className="p-2">
                <li className="hover:bg-[#149777] hover:text-white duration-500 hover:rounded">
                  <Link>Mobile</Link>
                </li>
                <li className="hover:bg-[#149777] hover:text-white duration-500 hover:rounded">
                  <Link>Laptop</Link>
                </li>
              </ul>
            </details>
          </li>
          <li tabIndex={0}>
            <details>
              <summary className="hover:bg-[#149777] hover:text-white duration-500 hover:rounded">accessories</summary>
              <ul className="p-2">
                <li className="hover:bg-[#149777] hover:text-white duration-500 hover:rounded">
                  <Link>Mobile</Link>
                </li>
                <li className="hover:bg-[#149777] hover:text-white duration-500 hover:rounded">
                  <Link>Laptop</Link>
                </li>
              </ul>
            </details>
          </li>
          <li tabIndex={0}>
            <details>
              <summary className="hover:bg-[#149777] hover:text-white duration-500 hover:rounded">Services</summary>
              <ul className="p-2">
                <li>
                  <Link>Mobile</Link>
                </li>
                <li>
                  <Link>Laptop</Link>
                </li>
              </ul>
            </details>
          </li>
          <li className="hover:bg-[#149777] hover:text-white duration-500 hover:rounded">
            <Link to='/shop'>Shop</Link>
          </li>
          <li className="hover:bg-[#149777] hover:text-white duration-500 hover:rounded">
           <NavLink to='/blog' className={({isActive}) => isActive ? "text-red-500" : " text-black" }>Maps</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBottom;
