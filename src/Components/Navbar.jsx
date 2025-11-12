import { use, useState } from "react";
import logoImg from "../assets/handwritten-d-logo-elegant-script-vector-22854819.avif";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import userLogo from "../assets/userLogowebp.webp";
import signOutImg from "../assets/Sign-Out.svg";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const [open, setOpen] = useState(false);
  const navigate=useNavigate();
  console.log(user)
  //console.log(user.photoURL);

  
  

  const handleDropDown = () => {
    setOpen(!open);
  };
  const handleSignOut=()=>{
    toast.success('Log out successfully');
    logOut();
    navigate('/')
  }

  return (
    <nav className="shadow-md bg-[#00b5d9] ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 ">
        <div className="flex justify-between items-center h-20 w-full">
          <div className="flex items-center gap-2 sm:mr-6">
            <img className="w-12 rounded-full" src={logoImg} alt="Logo" />
            <h2 className="font-bold text-xl">DailyPulse</h2>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive
                  ? "font-semibold transition duration-300 ease-in-out bg-white p-2 rounded-2xl hover:text-[#00b5d9] hover:border-[#00b5d9]"
                  : "text-white font-semibold hover:text-black"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/addHabits"
              className={({ isActive }) =>
                isActive
                  ? "font-semibold transition duration-300 ease-in-out bg-white p-2 rounded-2xl hover:text-[#00b5d9] hover:border-[#00b5d9]"
                  : "text-white font-semibold hover:text-black"
              }
            >
              Add Habit
            </NavLink>
            <NavLink
              to="/myHabits"
              className={({ isActive }) =>
                isActive
                  ? "font-semibold transition duration-300 ease-in-out bg-white p-2 rounded-2xl hover:text-[#00b5d9] hover:border-[#00b5d9]"
                  : "text-white font-semibold hover:text-black"
              }
            >
              My Habits
            </NavLink>
            <NavLink
              to="/publicHabits"
              className={({ isActive }) =>
                isActive
                  ? "font-semibold transition duration-300 ease-in-out bg-white p-2 rounded-2xl hover:text-[#00b5d9] hover:border-[#00b5d9]"
                  : "text-white font-semibold hover:text-black"
              }
            >
              Public Habits
            </NavLink>

            <div className="relative">
              {user ? (
                <>
         
                  <button
                    onClick={handleDropDown}
                    className="flex items-center gap-2 bg-black px-5 py-2 text-white rounded-lg hover:rounded-2xl hover:scale-105 transition-all duration-300"
                  >
                    <img
                      className="w-8 h-8 rounded-full"
                      src={user.photoURL}
                      alt="User"
                    />
                    Log out
                    {/* <span>{user.displayName || "User"}</span> */}
                  </button>

                  {open && (
                    <div className="mt-4 absolute right-0 w-64 bg-[#00b5d9] text-white border rounded-lg shadow-lg z-50">
                 
                      <div className="absolute right-4 -top-4 w-4 h-4 py-2 bg-white transform rotate-45 border-l border-t border-gray-200"></div>

          
                      <div className="p-4 border-b ">
                        <p className="font-medium">
                          {user.displayName || "User"}
                        </p>
                        <p className="text-sm text-white truncate ">
                          {user.email}
                        </p>
                      </div>

                      <div className="flex items-center bg-black">
                        <img className="w-5 invert ml-3" src={signOutImg} alt="" />
                        <button onClick={ handleSignOut} className="w-full text-left px-4 py-2  rounded-sm hover:text-red-500 hover:scale-105 duration-300 transition-all hover:font-bold"> 
                          Log Out
                        </button>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                // Simple sign-in button if no user
                <div className="flex items-center gap-2 bg-black px-5 py-2 text-white rounded-lg hover:rounded-2xl hover:scale-105 transition-all duration-300">
                  <img
                    className="w-8 h-8 rounded-full"
                    src={userLogo}
                    alt="User"
                  />
                  <NavLink to='/login'>Sign in</NavLink>
               
                </div>
              )}
            </div>
          </div>

          
          <div className="md:hidden flex items-center z-50">
            <label
              htmlFor="mobile-drawer"
              className="cursor-pointer flex flex-col gap-1 p-2"
            >
              <span className="block w-6 h-0.5 bg-black"></span>
              <span className="block w-6 h-0.5 bg-black"></span>
              <span className="block w-6 h-0.5 bg-black"></span>
            </label>
          </div>
        </div>
      </div>

   
      <input id="mobile-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side md:hidden z-40">
        <label htmlFor="mobile-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-64 bg-base-200 flex flex-col gap-3 ml-auto">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive
                  ? "text-[#2EA0B6] font-semibold"
                  : "text-black font-semibold"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/addHabits"
              className={({ isActive }) =>
                isActive
                  ? "text-[#2EA0B6] font-semibold"
                  : "text-black font-semibold"
              }
            >
              Add Habit
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/myHabits"
              className={({ isActive }) =>
                isActive
                  ? "text-[#2EA0B6] font-semibold"
                  : "text-black font-semibold"
              }
            >
              My Habits
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/publicHabits"
              className={({ isActive }) =>
                isActive
                  ? "text-[#2EA0B6] font-semibold"
                  : "text-black font-semibold"
              }
            >
              Public Habits
            </NavLink>
          </li>
   
            <li className="mt-4 relative" tabIndex={0} onBlur={() => setOpen(false)}>
              {user ? (
                <>
                  <button
                    onClick={handleDropDown}
                    className="flex items-center gap-2 bg-black px-5 py-2 text-white rounded-lg hover:rounded-2xl hover:scale-105 transition-all duration-300 w-full justify-between"
                  >
                    <img
                      className="w-8 h-8 rounded-full"
                      src={user.photoURL}
                      alt="User"
                    />
                    {/* <span>{user.displayName || "User"}</span> */}
                    <span>Log out</span>

                    <svg
                      className={`w-4 h-4 ml-2 transition-transform duration-200 ${
                        open ? "rotate-180" : "rotate-0"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {open && (
                    <div className="absolute top-15 right-0 mt-2 w-64 bg-[#00b5d9] text-white border rounded-lg shadow-lg z-50 flex flex-col">
                  
                      <div className="absolute right-4 -top-2 w-4 h-4 bg-[#00b5d9] transform rotate-45 border-l border-t border-gray-200"></div>

                 
                      <div className="p-4 border">
                        <p className="font-medium">
                          {user.displayName || "User"}
                        </p>
                        <p className="text-sm truncate">{user.email}</p>
                      </div>

                    
                      <NavLink to="/" className="">
                        <button className="flex items-center w-full px-4 py-2 bg-black hover:bg-gray-800 rounded-b-lg transition-all duration-300 ">
                          <img
                            className="w-5 invert mr-3"
                            src={signOutImg}
                            alt="Sign Out"
                          />
                          <button onClick={handleSignOut} className="text-white">Log out</button>
                        </button>
                      </NavLink>
                    </div>
                  )}
                </>
              ) : (
                <button className="flex items-center gap-2 bg-black px-5 py-2 text-white rounded-lg hover:rounded-2xl hover:scale-105 transition-all duration-300 w-full justify-center">
                  <img
                    className="w-8 h-8 rounded-full"
                    src={userLogo}
                    alt="User"
                  />
                  <span onClick={handleSignOut}>Sign Out</span>
                </button>
              )}
            </li>
         
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
