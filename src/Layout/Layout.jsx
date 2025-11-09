import React from "react";
import { Outlet } from "react-router";
//import Navbar from '../Components/Navbar'
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="">
        <Navbar></Navbar>
      </div>
      <div className="flex-1 py-5">
        <div className="max-w-7xl mx-auto">
          <Outlet></Outlet>
        </div>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Layout;
