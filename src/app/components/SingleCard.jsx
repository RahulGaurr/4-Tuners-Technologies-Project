import React from 'react';
import { FaArrowRight } from "react-icons/fa";


const SingleCard = ({ numLogo, picture, smallHeading, title, para, readMore, reverse }) => (
    <div className={`flex w-4/5 mx-auto gap-20 ${reverse ? 'flex-row-reverse' : ''} py-12`}>
      <div className="w-1/2">
        
        <div className="flex relative">
          <img src={numLogo} className="w-32" alt="logo" />
          <div className="flex pt-10 items-center space-x-4 absolute left-20">
            <div className="border w-12 border-[#FBD784]"></div>
            <p className="text-[#FBD784] text-xs font-semibold">{smallHeading}</p>
          </div>
        </div>
  
        <div className="pl-16 relative bottom-6">
          <h1 className="text-white text-4xl w-[60%] pb-6">{title}</h1>
          <p className="text-white">{para}</p>
          <p className="text-[#FBD784] pt-4 flex items-center gap-2">
            {readMore} <FaArrowRight />
          </p>
        </div>
      </div>
  
      <div className="w-2/6 relative bottom-10">
        <img src={picture} alt="cardimg" />
      </div>
    </div>
  );

  export default SingleCard