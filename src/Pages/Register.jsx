import { Link, NavLink, useNavigate } from "react-router";
import bgImg from "../assets/BGImg.jpg";
import { use, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";

const Register = () => {
  const { createUser, signInGoogle, loading, user, upProfile } =
    use(AuthContext);
    const navigate=useNavigate()
  const [passValidity, setPassValidity] = useState("");
  const [passEye, setPassEye] = useState(false);
  const handleEyeVisisbility = () => {
    setPassEye(!passEye);
  };

  const handleGoogleLogIn = () => {
    signInGoogle()
      .then((res) => {
        toast.success("Logged in successfully");
        navigate('/')
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
  const handleAuth = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const userName = e.target.userName.value;
    const photoUrl = e.target.PhotoURL.value;
    console.log(userName, photoUrl);
    if (!passwordRegex.test(password)) {
      setPassValidity(
        "Password must have at least one uppercase letter, one lowercase letter, and minimum 6 characters."
      );
      return;
    }
    //console.log(email,password);
    createUser(email, password)
      .then((res) => {
        const currentUser = res.user;
       upProfile(currentUser, {
          displayName: userName,
          photoURL: photoUrl,
        })
          .then(async () => {
            await currentUser.reload();
          })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
        toast.success("Created Accout successfully");
        console.log(res.user);
        navigate('/')
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div
      className="bg-cover  mt-0 pb-15 md:pb-15"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="flex flex-col justify-center items-center ">
        <div className="text-center">
          <h1 className="text-4xl mt-10 mb-2">register</h1>
          <h1>Please enter your Details:</h1>
        </div>

        <div className="mt-5">
          <form onSubmit={handleAuth}>
            {/* <fieldset className="fieldset">
              <label className="label ">First Name:</label>
              <input
                type="text"
                name="firstName"
                className="input sm:w-[400px] sm:h-[50px] border-2  border-gray-400 focus:outline-none"
                placeholder="Enter first name"
              />
              <label className="label ">Last Name:</label>
              <input
                type="text"
                name="text"
                className="input sm:w-[400px] sm:h-[50px] border-2  border-gray-400 focus:outline-none"
                placeholder="Enter last name"
              />
              <label className="label ">Photo-URL:</label>
              <input
                type="text"
                name="photo"
                className="input sm:w-[400px] sm:h-[50px] border-2  border-gray-400 focus:outline-none"
                placeholder="Enter URL"
              />

             

              <label className="label">Email:</label>
              <input
                type="email"
                name="email"
                required
                className="input sm:w-[400px] sm:h-[50px] border-2  border-gray-400 focus:outline-none"
                placeholder="Enter email"
              />

    
              <label className="label">Password:</label>
              <div className="relative">
                <input
                  type="password"
                  name="password"
                  required
                  className="input sm:w-[400px] sm:h-[50px] border-2  border-gray-400 focus:outline-none"
                  placeholder="Enter password"
                />
                <span className="absolute top-3 right-3 sm:top-4">
                  <i class="fa-solid fa-eye"></i>
                </span>
              </div>

              <div className="flex items-center justify-between mb-2 mt-4">
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="checkbox" />
                  <p>I'm not a robot</p>
                </div>
                <span></span>
              </div>

              <div className="my-2">
                <input type="checkbox" className="checkbox " required />
                <span className="m-2">
                  I have read and agree to the Terms and Conditions
                </span>
              </div>

              <button className=" btn btn-neutral mt-3 sm:w-[400px] border-none relative group">
                <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                  Register
                </span>
                <span className="absolute bg-white w-0 h-full right-0 transition-all duration-300 group-hover:w-full "></span>
              </button>
              <p className="my-2 text-center">
                Have an account?
                <Link to="/login">
                  <span className="border-b border-b-black ">Sign in</span>
                </Link>
              </p>

              <button
                type="button"
                className="btn mb-10 bg-white text-black border-[#e5e5e5]"
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
            </fieldset> */}
            <div className="">
              <div class="relative py-3 sm:max-w-xl sm:mx-auto">
                <div class="relative px-4 py-10 bg-black mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
                  <div class="max-w-md mx-auto text-white">
                    <div class="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          class="font-semibold text-sm text-gray-400 pb-1 block"
                          for="fullname"
                        >
                          Full Name
                        </label>
                        <input
                          class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-gray-800 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                          type="text"
                          id="fullname"
                          name="userName"
                          required
                        />
                      </div>
                      <div>
                        <label
                          className="font-semibold text-sm text-gray-400 pb-1 block"
                          for="email"
                        >
                          Email
                        </label>
                        <input
                          className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-gray-800 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                          type="email"
                          id="email"
                          name="email"
                          required
                        />
                      </div>
                      <div>
                        <label
                          class="font-semibold text-sm text-gray-400 pb-1 block"
                          for="username"
                        >
                          PhotoURL
                        </label>
                        <input
                          class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-gray-800 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                          type="text"
                          name="PhotoURL"
                          required
                        />
                      </div>
                      <div>
                        <label
                          className="font-semibold text-sm text-gray-400 pb-1 block"
                          for="password"
                        >
                          Password
                        </label>
                        <div className="relative">
                          <input
                            className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-gray-800 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                            type={passEye ? "text" : "password"}
                            name="password"
                            required
                          />
                          <span
                            onClick={handleEyeVisisbility}
                            className="absolute top-3 right-3 sm:top-4 w-5 md:w-2"
                          >
                            {passEye ? <FaEye /> : <FaRegEyeSlash />}
                          </span>
                          {passValidity && (
                            <p className="text-red-500 text-sm">
                              {passValidity}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                   
                    <div class="mt-5">
                      <button
                        className="py-2  px-4 bg-[#00b5d9] hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                        type="submit"
                      >
                        Sign up
                      </button>
                    </div>

                    <button  type="button" 
                      onClick={handleGoogleLogIn}
                      className="btn bg-white text-black border-[#e5e5e5] my-5 w-full"
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

                    <div class="flex items-center justify-between mt-4">
                      <span class="w-1/5 border-b dark:border-gray-600 md:w-1/4 text-gray-500"></span>
                      <span>have an account?</span>
                      <NavLink
                        to="/login"
                        className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
                        href="#"
                      >
                        Log in
                      </NavLink>
                      <span class="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
