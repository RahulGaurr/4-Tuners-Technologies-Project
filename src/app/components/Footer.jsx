import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-custom-gradient2 text-white pb-8">

      <div className="mx-auto flex flex-row justify-around  ">
        <div className="flex flex-col  pt-4 ">
          <Image
            src="/Images/Logo.png"
            alt="MNT"
            width={100}
            height={100}
            className="mr-2"
          />
          <p className="text-white pt-4 max-w-xs">
            Get out there & discover your next slope, mountain & destination!
          </p>
          <p className="text-gray-400 pt-20 max-w-xs text-xs">Copyright 2023 MNTN, Inc. Terms & Privacy</p>
        </div>

        <div className="flex flex-col">
          <h3 className="text-xl font-semibold mb-4 text-[#FBD784]">More on The Blog</h3>
          <ul className="space-y-2">
            <li><a href="/" className="text-white hover:text-gray-400">About MNTN</a></li>
            <li><a href="/" className="text-white hover:text-gray-400">Contributors & Writers</a></li>
            <li><a href="/" className="text-white hover:text-gray-400">Write For Us</a></li>
            <li><a href="/" className="text-white hover:text-gray-400">Contact Us</a></li>
            <li><a href="/" className="text-white hover:text-gray-400">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="flex flex-col">
          <h3 className="text-xl font-semibold mb-4 text-[#FBD784]">More on MNTN</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-white hover:text-gray-400">The Team</a></li>
            <li><a href="#" className="text-white hover:text-gray-400">Jobs</a></li>
            <li><a href="#" className="text-white hover:text-gray-400">Press</a></li>
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
