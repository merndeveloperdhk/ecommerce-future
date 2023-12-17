import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Login = () => {
  const {logIn} = useContext(AuthContext)
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  console.log(location);
  

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const user = { email, password };
    console.log(user);

    setError("");
    setSuccess("");

    // email and password login
    logIn(email, password)
    .then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      e.target.reset();
      
      if(result.user.emailVerified === false){
        Swal.fire({
          position: "top-end",
          icon: "danger",
          title: "Please verify your email",
          showConfirmButton: false,
          timer: 1000,
        });
        
        return;
        
      }else{
        setSuccess("Login Successfully done.", loggedUser);
      }
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Log in is successfull",
        showConfirmButton: false,
        timer: 1000,
      });
      navigate(location?.state ?location.state : "/");
    })
    .catch((error) => {
      console.log(error.message);
      setError("password or email not matched", error.message);
    });

   /*  signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        
        if(result.user.emailVerified === false){
          Swal.fire({
            position: "top-end",
            icon: "danger",
            title: "Please verify your email",
            showConfirmButton: false,
            timer: 1000,
          });
          
          return;
          
        }else{
          setSuccess("Login Successfully done.", loggedUser);
        }
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Log in is successfull",
          showConfirmButton: false,
          timer: 1000,
        });
        // navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
        setError("password or email not matched", error.message);
      }); */
  };

  return (
    <div className="hero  ">
      <Helmet>
        <title>Log in | Welcome to my site</title>
      </Helmet>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center md:w-1/2">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 md:w-1/2">
          <div className="text-center text-red-600">
            {error && <p>{error}</p>}
          </div>
          <div className="text-center text-green-600">
            {success && <p>{success}</p>}
          </div>

          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-[52px]"
              >
                {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
              </span>
              <label className="label">
                <Link to='/forgotPassword' className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn text-white text-xl bg-sky-500 hover:bg-sky-600 duration-500">
                Login
              </button>
            </div>
          </form>
          {/* Social Login */}
          <SocialLogin></SocialLogin>
          <p className="text-xs text-center sm:px-6 dark:text-gray-400 mb-3">
            Do not have an account?
            <Link
              rel="noopener noreferrer"
              to="/register"
              className=" text-red-600 ml-1"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
