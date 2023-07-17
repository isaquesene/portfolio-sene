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
          <FaHtml5 key="html5" />,
          <FaCss3 key="css3" />,
          <FaJs key="js" />,
          <FaReact key="react" />,
          <SiNextdotjs key="next" />,
          <SiPhp key="php" />,
          <FaAngular key="angular" />, 
        ],
        
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma key="figma" />],
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

// counter
import CountUp from "react-countup";


const About = () => {
  const [index, setIndex] = useState(0);
  //console.log(index);
  return (
  <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
    <Circles/>
    {/* avatar */}
    {/* <motion.div variants={fadeIn('right', 0.2)} initial="hidden" animate="show" exit="hidden" className="hidden xl:flex absolute bottom-0 -left-[370px]">
      <Avatar/>
    </motion.div> */}
    <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
      {/* title */}
      <div className="flex-1 flex flex-col justify-center">
        <motion.h2
          variants={fadeIn('right', 0.2)} 
          initial="hidden" 
          animate="show" 
          exit="hidden"
          className="h2"
        >A little <span className="text-cubes">more</span> about my work.</motion.h2>
        <motion.p 
        variants={fadeIn('right', 0.4)} 
        initial="hidden" 
        animate="show" 
        exit="hidden"
        className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">
          I started as a freelance developer. Since then,
          done remote work consulted for startups,
          collaborated on digital products for business.
        </motion.p>
        {/* counters */}
        <motion.div 
        variants={fadeIn('right', 0.6)} 
        initial="hidden" 
        animate="show" 
        exit="hidden"
        className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8">
          <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 
              after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-cubes mb-2">
                  <CountUp start={0} end={5} duration={5}/> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience
                </div>
              </div>
              {/* projects  */}
              <div className="relative flex-1 after:w-[1px]  
              after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-cubes mb-2">
                  <CountUp start={0} end={37} duration={5}/> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished ProjectsBtn
                </div>
              </div>
          </div>
        </motion.div>
      </div>
      {/* Info */}
      <motion.div 
      variants={fadeIn('left', 0.4)} 
      initial="hidden" 
      animate="show" 
      exit="hidden"
      className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
        <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
          {
            aboutData.map((item, itemIndex) => {
               return(
               <div key={itemIndex} 
               className={`${index === itemIndex && 
                'text-cubes after:w-[100%] after:bg-cubes after:transition-all after:duration-300'} 
                cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-cubes
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
              <div key={itemIndex} className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2">
                {/* title */}
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                <div className="hidden md:flex">-</div>
                <div>{item.stage}</div>
                <div className="flex gap-x-4">
                {/* icons */}
                {item.icons?.map((icon, itemIndex) => {
                  return <div className="text-2xl text-white" key={itemIndex}> {icon} </div>;
                })}
                </div>
              </div>
            );  
          })}
        </div>
      </motion.div>
    </div>
  </div>
  );
};

export default About;
