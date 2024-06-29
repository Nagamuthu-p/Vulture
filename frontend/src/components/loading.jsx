import React from "react";
import "./loading.css";
import load from '../assets/vul/loader.jpg'

const Loading = () => {
  return (
    <div className="bg-white">
      <div className="flex items-center justify-center h-screen max-w-screen">
        <img
          className="object-cover object-center w-48 rounded sm:mb-30 mb-20"
          alt="logo"
          src={load}
        />
      </div>
      <div className="loader">
        <div className="loader--dot"></div>
        <div className="loader--dot"></div>
        <div className="loader--dot"></div>
        <div className="loader--dot"></div>
        <div className="loader--dot"></div>
        <div className="loader--dot"></div>
        <div className="loader--dot"></div>
        <div className="loader--dot"></div>
        {/*         <div className="loader--text"></div> */}
      </div>
    </div>
  );
};

export default Loading;
