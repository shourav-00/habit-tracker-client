import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import bgImg from "../assets/BGImg.jpg";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";

const Login = () => {
  const { signInGoogle, signInUser } = use(AuthContext);
  const [passEye, setPassEye] = useState(false);
  const handleEyeVisisbility = () => {
    setPassEye(!passEye);
  };
  const location = useLocation();
  //console.log(location)
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    signInGoogle()
      .then((res) => {
        navigate(location.state || "/");
        // console.log(res.user);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const handleAuth = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    //console.log(email, password);
    signInUser(email, password)
      .then((res) => {
        navigate(location.state || "/");
        toast.success("Logged In Successfully");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  return (
    <div
      className="bg-cover rounded-4xl py-10"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="flex flex-col justify-center items-center mt-2 sm:mt-4 mb-10">
        <div className="text-center">
          <h1 className="text-4xl my-2">Login</h1>
          <h1>Please enter your e-mail and password:</h1>
        </div>

        <div className="mt-5">
          <form onSubmit={handleAuth}>
            <fieldset className="fieldset">
              {/* Email Field */}

              <label className="label">Email:</label>
              <input
                type="email"
                name="email"
                required
                className="input sm:w-[400px] sm:h-[50px] border-2 border-gray-400 focus:outline-none"
                placeholder="Enter your email"
              />

              {/* Passwword Field */}
              <label className="label">Password:</label>
              <div className="relative">
                <input
                  type={passEye ? "text" : "password"}
                  name="password"
                  required
                  className="input sm:w-[400px] sm:h-[50px] border-2  border-gray-400 focus:outline-none"
                  placeholder="Enter your password"
                />
                <span
                  onClick={handleEyeVisisbility}
                  className="absolute top-3 right-3 sm:top-4 w-5 md:w-2"
                >
                  {passEye ? <FaEye /> : <FaRegEyeSlash />}
                </span>
              </div>

              <button className="btn btn-neutral mt-5 sm:w-[400px] border-none relative group ">
                <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                  Login
                </span>
                <span className="absolute bg-white w-0 h-full right-0 transition-all duration-300  group-hover:w-full group-hover:text-black "></span>
              </button>
              <p className="my-2 text-center">
                Don't have an account?
                <Link to="/register">
                  <span className="border-b border-b-black "> CREATE ONE</span>
                </Link>
              </p>

              <button
                onClick={handleGoogleSignIn}
                type="button"
                className="btn bg-white text-black border-[#e5e5e5]"
              >
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Login with Google
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
