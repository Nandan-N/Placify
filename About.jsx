import React from "react";
import cat from '../assets/cat.png';

const About = () => {
  return (
    <div id="aboutSection" className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row items-center">
        <img className="w-[350px] mx-auto md:ml-0 md:mr-4 my-4" src={cat} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">ABOUT US</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold md:py-4"> blah </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            nihil perferendis dignissimos veniam rerum mollitia temporibus et
            dolorum, pariatur, impedit soluta ut iure, accusantium sed itaque
            ducimus amet dolores obcaecati.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
