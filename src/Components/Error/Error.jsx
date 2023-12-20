import { Helmet } from "react-helmet-async";
import Footer from "../Footer/Footer";
import Header from "../Navbar/Header";
import Navbar from "../Navbar/Navbar";
import NavBottom from "../Navbar/NavBottom";
import RightProduct from "../ProductCategory/RightProduct";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const { error, status } = useRouteError();
  return (
    <div className="space-y-3">
      <Helmet>
        <title>Error | Welcome to my site</title>
      </Helmet>
      <Header></Header>
      <Navbar></Navbar>
      <NavBottom></NavBottom>

      <div className="flex items-center justify-center gap-2 ">
        {/* <RightProduct></RightProduct> */}
        {/* <img className="mx-auto py-0 my-0" src="https://i.ibb.co/TRRST31/404-error.jpg" alt="" /> */}
        <section className="flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100">
          <div className="container flex flex-col items-center justify-center px-5 mx-auto my-4">
            <div className="max-w-md text-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className=" mx-auto text-red-400 w-40 h-40 dark:text-gray-600"
              >
                <path
                  fill="currentColor"
                  d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"
                ></path>
                <rect
                  width="176"
                  height="32"
                  x="168"
                  y="320"
                  fill="currentColor"
                ></rect>
                <polygon
                  fill="currentColor"
                  points="210.63 228.042 186.588 206.671 207.958 182.63 184.042 161.37 162.671 185.412 138.63 164.042 117.37 187.958 141.412 209.329 120.042 233.37 143.958 254.63 165.329 230.588 189.37 251.958 210.63 228.042"
                ></polygon>
                <polygon
                  fill="currentColor"
                  points="383.958 182.63 360.042 161.37 338.671 185.412 314.63 164.042 293.37 187.958 317.412 209.329 296.042 233.37 319.958 254.63 341.329 230.588 365.37 251.958 386.63 228.042 362.588 206.671 383.958 182.63"
                ></polygon>
              </svg>
              <h2 className="mb-8 font-extrabold text-9xl text-yellow-600">
                <span className="sr-only ">Error</span> {status}
              </h2>
              <p className="text-2xl font-semibold md:text-3xl text-red-500">
                {error.message}
              </p>
              <p className="mt-4 mb-8 dark:text-gray-400">
                But dont worry, you can find plenty of other things on our
                homepage.
                
              </p>
              <Link
                rel="noopener noreferrer"
                to="/"
                className="px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900 bg-green-600"
              >
                Back to homepage
              </Link>
            </div>
          </div>
        </section>
        {/* <RightProduct></RightProduct> */}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Error;
