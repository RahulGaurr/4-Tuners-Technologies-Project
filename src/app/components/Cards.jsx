import React from 'react';
import Image from 'next/image';
import SingleCard from './SingleCard';


const Cards = () => {
    
  const cardsArray = [
    {
      numLogo: "/Images/Equipment.png",
      picture: "/Images/cardImg1.png",
      smallHeading: "GET STARTED",
      title: "What level of hiker are you?",
      para: "Determining what level of hiker you are can be an important tool when planning future hikes...Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker? ",
      readMore: "read more",
    },
    {
      numLogo: "/Images/Equipment 2.png",
      picture: "/Images/cardImg2.png",
      smallHeading: "HIKING ESSENTIALS",
      title: "Picking the right Hiking Gear!",
      para: "The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have. Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet.",
      readMore: "read more",
    },
    {
      numLogo: "/Images/Equipment 3.png",
      picture: "/Images/cardImg3.png",
      smallHeading: "WHERE YOU GO IS THE KEY",
      title: "Understand Your Map & Timing",
      para: "To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction..",
      readMore: "read more",
    },
  ];

  return (
    <div className="relative">
      <div>
        <Image
          src="/Images/MG_mountains.png"
          alt="Mountains"
          width={5000}
          height={5000}
          className="h-[45rem]"
        />
      </div>

      <div className="absolute top-[12rem] ">
        <Image
          src="/Images/greenery.png"
          alt="Greenery"
          width={5000}
          height={5000}
          className="h-[40rem]"
        />
      </div>

      <div className="mt-8 bg-custom-gradient w-full pb-20">
        {cardsArray.map((card, index) => (
          <SingleCard 
            key={index}
            numLogo={card.numLogo}
            picture={card.picture}
            smallHeading={card.smallHeading}
            title={card.title}
            para={card.para}
            readMore={card.readMore}
            reverse={index % 2 === 1}  
          />
        ))}
      </div>
    </div>
  );
};

export default Cards;
