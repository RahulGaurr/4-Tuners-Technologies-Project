import React from "react";
import Image from "next/image";
import { FaArrowDown } from "react-icons/fa";

const HeroSectionMntn = () => {
  return (
    <div className="">
      <nav className="flex items-center justify-between pt-6 px-12">
        <div className="flex items-center">
          <Image
            src="/Images/Logo.png"
            alt="MNT"
            width={100}
            height={100}
            className="mr-2"
          />
        </div>

        <div className="flex space-x-8">
          <a href="/" className="text-white hover:text-gray-400">
            Equipment
          </a>
          <a href="/" className="text-white hover:text-gray-400">
            About us
          </a>
          <a href="/" className="text-white hover:text-gray-400">
            Blog
          </a>
        </div>

        <div className="flex items-center">
          <a
            href="#account"
            className="flex items-center text-white hover:text-gray-400"
          >
            <Image
              src="/Images/cart.png"
              alt="Account Icon"
              width={30}
              height={30}
              className="mr-2"
            />
            Account
          </a>
        </div>
      </nav>

      <div className="flex mx-auto justify-between items-center px-8 pt-24">
        <div className="">
          <div className="rotate-90 text-white text-sm mt-8">follow us</div>

          <div className="mt-8 ml-5 ">
            <Image
              src="/Images/instagram.png"
              alt="MNT"
              width={15}
              height={15}
              className=""
            />
            <Image
              src="/Images/twitter.png"
              alt="MNT"
              width={15}
              height={15}
              className="pt-4"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center  p-4 ">
          <div className="flex items-center  mb-4">
            <span className="border w-24 border-[#FBD784]"></span>
            <h1 className="text-xl font-bold mx-4 text-[#FBD784]">
              A HIKING GUIDE
            </h1>
          </div>
          <p className="text-7xl text-white">Be prepared for the</p>
          <p className="text-7xl pt-4 text-white">Mountains and beyond!</p>
        </div>
        
          <div className="flex">
            <div className="flex flex-col space-y-4 pr-6 ">
              <div className="text-white ">Start</div>
              <div className="text-white pl-4">01</div>
              <div className="text-white pl-4">02</div>
              <div className="text-white pl-4">03</div>
            </div>
            <Image src="/Images/Slider.png" alt="MNT" width={4} height={5} className="h-36" />
          </div>
        </div>
        <div className="flex text-white pl-96 pt-4">
            <p>scroll down </p>
            <FaArrowDown  className="mt-1 ml-2" />
        </div>
      </div>
    
  );
};

export default HeroSectionMntn;

