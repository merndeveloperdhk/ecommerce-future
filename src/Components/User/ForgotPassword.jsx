import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const auth = getAuth();
  const [mailSent, setMailSent] = useState("");

  const handleForgot = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    console.log(email);
    setMailSent("");

    // password reset email
    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log("password reset email sent");
        setMailSent("password reset email sent");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <Helmet>
        <title>Forgot password | Welcome to my site</title>
      </Helmet>
      <h1 className="text-2xl font-bold md:mb-4">Forgot your password?</h1>
      <h1 className="text-center my-2">{mailSent ? mailSent : " "}</h1>
      <div className="mb-4 text-center w-full border border-1 rounded-sm py-12 bg-[#49a6bda9]">
        <h1>
          Enter your email address below and we will send you a link to reset
          your password
        </h1>
        <label htmlFor="">email address</label> <br /> <br />
        <form onSubmit={handleForgot}>
          <input
            type="email"
            name="email"
            className="border border-1 md:w-1/3 md:mr-3 p-1"
          />
          <input
            type="submit"
            value="Send"
            className="bg-green-600 px-3 py-1 rounded text-white"
          />
        </form>
        <Link
          to="/login"
          className="bg-green-600 px-3 py-1 rounded  inline-block  mx-auto mt-4 text-white "
        >
          {" "}
          Go to login
        </Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
