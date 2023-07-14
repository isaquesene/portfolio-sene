import React, {useState} from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaAngular,
} from 'react-icons/fa';

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiPhp,
} from 'react-icons/si';

//  data
export const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web & software Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiPhp />,
          <FaAngular />, 
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma />],
      },
    ],
  },
  {
    title: 'licenses',
    info: [
      {
        title: 'PHP: Arrays, Strings, Function and Web - Alura',
        stage: '2023',
      },
      {
        title: 'React.JS FullStack - Alura',
        stage: '2023',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'FullStack, Php Web Developer - ITA Ventures',
        stage: '01/2023 - 07/2023',
      },
      {
        title: 'Web Developer Php Pleno - AI-SSIE DCTA',
        stage: '2016 - 2023',
      },
      {
        title: 'web Developer Php - Hex Software',
        stage: '01/2023 - 07/2023',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Tecnico, Desenvolvimento de Sistemas - ETEC',
        stage: '2014 - 2016',
      },
    ],
  },
];

import Avatar from "../../components/Avatar";

import Circles from "../../components/Circles";

//framer motion
import { motion } from 'framer-motion';

import { fadeIn } from '../../variants';



const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
  <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
    <Circles/>
    {/* avatar */}
    {/* <motion.div variants={fadeIn('right', 0.2)} initial="hidden" animate="show" exit="hidden" className="hidden xl:flex absolute bottom-0 -left-[370px]">
      <Avatar/>
    </motion.div> */}
    <div className="container mx-auto h-full flex flex-col items-center xl:flex-row">
      <div className="flex-1 flex flex-col justify-center">text</div>
      <div className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
        <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
          {
            aboutData.map((item, itemIndex) => {
               return(
               <div key={itemIndex} 
               className={`${index === itemIndex && 
                'text-cubes after:w-[100%] after:bg-cubes after:transition-all after:duration-300'} 
                cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white
               after:absolute after:bottom-1 after:left-0`}
               onClick={() => setIndex(itemIndex)}
               >
                {item.title}
                </div>
              );
            })
          }
        </div>
        <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
          {aboutData[index].info.map((item, itemIndex)=>{
            return(
              <div key={itemIndex}>
                {/* title */}
                <div>{item.title}</div>
                <div className="hidden md:flex">-</div>
                <div>{item.stage}</div>
                <div className="flex gap-x-4">
                {/* icons */}
                {item.icons?.map((icon, itemIndex) => {
                  return <div>{icon}</div>;
                })}
                </div>
              </div>
            );  
          })}
        </div>
      </div>
    </div>
  </div>
  );
};

export default About;
