import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import {
 
  sendEmailVerification,
  
} from "firebase/auth";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Register = () => {
  // const auth = getAuth();
  const {createUser, handleUpdateProfile} = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  
  

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    // console.log(e.currentTarget)
    // const form = new FormData(e.currentTarget)
    // console.log(form.get('email'))
    // const name = form.get('name')
    const name = form.name.value;
    const photoUrl = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const accepted = form.terms.checked;
    const user = { name,photoUrl, email, password, accepted };
    console.log(user);
    // Register with email and password
    setError("");
    setSuccess("");

    // Validation
    if (password.length < 6) {
      setError("password must be at least 6 character");
      return;
    } else if (password.length > 10) {
      setError("password must be less than 10 character");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setError("At least one Upper case");
      return;
    } else if (!/[a-z]/.test(password)) {
      setError("at least one small character");
      return;
    } else if (!/[#?!@$%^&*-]/.test(password)) {
      setError("At least one special character");
      return;
    } else if (!accepted) {
      setError("Please accept terms and conditions.");
      return;
    }
    // Create user

    createUser(email, password)
    .then((result) => {
      console.log(result.user);
      setSuccess("Registration Successfully done.");

      //Update profile
      handleUpdateProfile(name, photoUrl)
      .then(() => {
        // console.log("Profile updated");
      })
      .catch(error => {
        console.log(error.message);
      })

      // Email verification
      sendEmailVerification(result.user).then(() => {
        console.log("email verification link sent");
      });
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Registration successfull",
        showConfirmButton: false,
        timer: 1000,
      });
      navigate('/')
    })
    .catch((error) => {
      console.log(error.message);
      setError(error);
    }); 

   /*  createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess("Registration Successfully done.");

        //Update profile
        updateProfile(result.user, {
          displayName: name,photoURL:photoUrl
        })
        .then(() => {
          // console.log("Profile updated");
        })
        .catch(error => {
          console.log(error.message);
        })

        // Email verification
        sendEmailVerification(result.user).then(() => {
          console.log("email verification link sent");
        });
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Registration successfull",
          showConfirmButton: false,
          timer: 1000,
        });
        // navigate('/')
      })
      .catch((error) => {
        console.log(error.message);
        setError(error);
      }); */
  };

  return (
    <div className="hero  ">
      <Helmet>
        <title>Register | Welcome to my site</title>
      </Helmet>
      <div className="hero-content flex-col gap-4 lg:flex-row-reverse ">
        <div className="text-center  md:w-1/2">
          <h1 className="text-5xl font-bold">Register now!</h1>
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
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Enter Your Photo url"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter email"
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
                className="input input-bordered "
                required
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-[52px]"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>

              <label className="flex gap-2 items-center mt-2">
                <input type="checkbox" name="terms" id="terms" />
                <a href="#" className="label-text-alt hover:text-red-600">
                  Accept terms and Conditions.
                </a>
              </label>
            </div>
            <div className="form-control mt-2">
              <button className="btn text-white text-xl bg-[#4caf50] hover:bg-[#3e9143] duration-500">
                Register
              </button>
            </div>
          </form>

          {/* Social Login */}
          <SocialLogin></SocialLogin>
          <p className="text-xs text-center sm:px-6 dark:text-gray-400 mb-3">
            Already have an account?
            <Link
              rel="noopener noreferrer"
              to="/login"
              className=" text-red-600 ml-1"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
