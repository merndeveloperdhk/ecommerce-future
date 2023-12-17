import { useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const SocialLogin = () => {
 const{signInWithGoogle, signInWithGithub, signInWithFacebook} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  
  

  //Social signIn
  const handleSocialLogin = (media) => {
    media()
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state :"/");
      
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
/*   const handleGithub = () =>{
    signInWithGithub()
    .then(result => {
      console.log(result.user);
      navigate(location?.state ? location.state :"/");
    })
    .catch(error => {
      console.log(error.message);
    })
  } */
  // Facebook login
  const handleFacebook = () => {
    signInWithFacebook()
    .then(result => {
      console.log(result.user);
    })
    .catch(error => {
      console.log(error.message);
    })
  }

  return (
    <div>
    
      <div className="flex items-center  space-x-1">
        <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        <p className="px-3 text-sm dark:text-gray-400">
          Login with social accounts
        </p>
        <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
      </div>
      <div className="flex justify-center space-x-4">
        <button
          onClick={()=>handleSocialLogin(signInWithGoogle)}
          aria-label="Log in with Google"
          className="p-3 rounded-sm text-xl"
        >
          <FcGoogle />
        </button>

        {/* Twitter login */}
        <button aria-label="Log in with Twitter" className="p-3 rounded-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-5 h-5 fill-current"
          >
            <path d="M31.937 6.093c-1.177 0.516-2.437 0.871-3.765 1.032 1.355-0.813 2.391-2.099 2.885-3.631-1.271 0.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 0.521 0.063 1.021 0.172 1.495-5.453-0.255-10.287-2.875-13.52-6.833-0.568 0.964-0.891 2.084-0.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-0.031-2.083-0.328-2.968-0.817v0.079c0 3.181 2.26 5.833 5.26 6.437-0.547 0.145-1.131 0.229-1.724 0.229-0.421 0-0.823-0.041-1.224-0.115 0.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-0.521 0-1.041-0.025-1.563-0.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-0.276 0-0.557-0.021-0.839 1.287-0.917 2.401-2.079 3.281-3.396z"></path>
          </svg>
        </button>

        {/* Facebook login */}
        <button onClick={handleFacebook} aria-label="Log in with Facebook" id="facebook_login" className="p-3 rounded-sm text-xl text-sky-600">
        <FaFacebook />
        </button>
        
        {/* Github login */}
        <button onClick={()=>handleSocialLogin(signInWithGithub)} aria-label="Log in with Github" className="p-3 rounded-sm text-xl text-gray-600">
        <FaGithub />
        </button>
        
      </div>
    </div>
  );
};

export default SocialLogin;
