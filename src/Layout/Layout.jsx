import React, { use } from "react";
import { Outlet } from "react-router";
//import Navbar from '../Components/Navbar'
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { AuthContext } from "../Context/AuthContext";

const Layout = () => {
  const {loading}=use(AuthContext)
  return (
    <div className="flex flex-col min-h-screen">
      <div className="">
        <Navbar></Navbar>
      </div>
      <div className="flex-1">
        <div className="max-w-7xl mx-auto">
          {
            loading ? <div className="flex items-center justify-center min-h-screen">
                 <span className="loading loading-dots loading-xl"></span>
            </div>
            
            :
            <Outlet></Outlet>
          }
          
        </div>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Layout;
