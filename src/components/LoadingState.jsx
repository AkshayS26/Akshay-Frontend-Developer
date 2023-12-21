import React from "react";
import "../App.css";

const LoadingState = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen ">
      <span className="loader "></span>
      <span className="mt-10 font-medium text-xl">Loading...</span>
    </div>
  );
};

export default LoadingState;
