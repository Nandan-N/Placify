import React from "react";
import Typed from "react-typed";
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const navigateToJobs = () => {
    navigate('/jobs'); // Navigate to the "/jobs" route
  };

  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-92px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <div className="flex justify-center items-center">
          <h2 className="md:text-3xl sm:text-2xl font-bold py-4"> Tired of </h2>
          <Typed
            className="md:text-3xl sm:text-2xl font-bold md:pl-4 pl-2"
            strings={[
              "missing out on placement mails ?",
              "keeping track of companies ?"
            ]}
            typeSpeed={70}
            backSpeed={80}
            loop
          />
        </div>
        <h2 className="md:text-5xl sm:text-6xl text-4xl font-bold md:py-4">Name </h2>
        <p className="md:text-3xl text-[#00df9a] font-bold p-2">One stop solution</p>
        <p className="md:text-2xl font-bold text-gray-500">
          Monitor your progress in placement tests
        </p>
        <button
          className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black"
          onClick={navigateToJobs} // Call the function to navigate
        >
          Get started
        </button>
      </div>
    </div>
  );
};

export default Hero;
