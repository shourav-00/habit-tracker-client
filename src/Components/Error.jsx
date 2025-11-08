import React from "react";
import img from "../assets/Error.png";

const Error = () => {
  return (
    <div className="flex justify-center items-center">
      <img
        className="w-full h-full "
        src={img}
        alt="Error,404"
      />
    </div>
  );
};

export default Error;
