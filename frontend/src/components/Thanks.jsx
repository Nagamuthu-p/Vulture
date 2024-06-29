import React from "react";

import { Link } from "react-router-dom";

const ThankYou = () => {

    return (
      <div className="items-center justify-center container mx-auto mt-40 p-5">
        <h1 className="text-3xl md:text-xl text-center font-bold">
          Thank you for registering!{" "}
        </h1>
        <h1 className="text-xl font-bold text-center">
          Verification Link send to Your Email and Login
        </h1>
        <button className="btnprimary items-center mt-5 ml-[45%]">
          <Link to="/login">Login</Link>
        </button>
      </div>
    );
};

export default ThankYou;
