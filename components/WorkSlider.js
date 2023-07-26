// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaBootstrap,
 /*  FaCodeigniter, */
  FaReact,
  FaWordpress,
  FaFigma,
  FaAngular,
} from 'react-icons/fa';

import { SiBootstrap, SiNextdotjs, SiPhp } from 'react-icons/si';

// data
export const workSlider = {
  slides: [
    {
      images: [
        {
          title: 'Clicadoc',
          path: '/clicadoc_landing.png',
          icons: [
            <FaHtml5 key="html5" />,
            <FaCss3 key="css3" />,
            <FaJs key="js" />,
            /* <FaReact key="react" />, */
            /*<SiNextdotjs key="next" />,*/
           /*  <SiPhp key="php" />, */
            /* <FaAngular key="angular" />, */
          ],
        },
        {
          title: 'Clicadoc',
          path: '/clicadoc_system.png',
          icons: [
            <FaHtml5 key="html5" />,
            <FaCss3 key="css3" />,
            <FaJs key="js" />,
            /* <FaReact key="react" />, */
            <SiBootstrap key="next" />,
            <SiPhp key="php" />,
            /* <FaAngular key="angular" />, */
          ],
        },
        {
          title: 'Condeclin',
          path: '/condeclin.png',
          icons: [
            <FaHtml5 key="html5" />,
            <FaCss3 key="css3" />,
            <FaJs key="js" />,
            /* <FaReact key="react" />, */
            <SiBootstrap key="next" />,
            <SiPhp key="php" />,
            /* <FaAngular key="angular" />, */
          ],
        },
        {
          title: 'Arena',
          path: '/arena.png',
          icons: [
            <FaHtml5 key="html5" />,
            <FaCss3 key="css3" />,
            <FaJs key="js" />,
            /* <FaReact key="react" />, */
            <SiBootstrap key="next" />,
            <SiPhp key="php" />,
            /* <FaAngular key="angular" />, */
          ],
        },
      ],
    },
    {
      images: [
        {
          title: 'Locus',
          path: '/locus.png',
          icons: [
            <FaHtml5 key="html5" />,
            <FaCss3 key="css3" />,
            <FaJs key="js" />,
            /* <FaReact key="react" />, */
            <SiBootstrap key="next" />,
            <SiPhp key="php" />,
            /* <FaCodeigniter key="angular" />, */
          ],
        },
        {
          title: 'TopService',
          path: '/topservice.png',
        },
        {
          title: 'ContFlux',
          path: '/contflux.png',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
        },
      ],
    },
  ],
};

//import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

//import required modules
import { Pagination } from 'swiper';

// icons
import { BsArrowRight } from 'react-icons/bs';

//image
import Image from 'next/image';
 
const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true
      }}
      modules={[Pagination]}
      className='h-[280px] sm:h-[480px]'
    >
      {workSlider.slides.map((slide, slideIndex) => (
        <SwiperSlide key={slideIndex}>
          <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
            {slide.images.map((image, imageIndex) => (
              <div key={imageIndex} className='relative rounded-lg overflow-hidden flex items-center justify-center group'>
                <a /* href={`/${image.title.toLowerCase()}`} */ className='flex flex-col items-center justify-center relative overflow-hidden group'>
                  {/* image */}
                  <Image src={image.path} width={500} height={300} alt='' />
                  {/* overlay gradient */}
                  <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#16152e] to-[#16152e] 
                      opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                  {/* title */}
                  <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20
                      transition-all duration-300'>
                    <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                      {/* title part 1 */}
                      <div className='delay-100'>LIVE</div>
                      {/* title part 2 */}
                      <div className='translate-y-[500%] group-hover:translate-y-0
                          transiiton-all duration-300 delay-150'>PROJECT</div>
                      {/* icon */}
                      <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'>
                        <BsArrowRight />
                      </div>
                    </div>
                    {/* icons */}
                    {image.icons && (
                      <div className='flex gap-2 mt-2'>
                        {image.icons.map((icon, iconIndex) => (
                          <div className='text-2xl text-white' key={iconIndex}>
                            {icon}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </a>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};




export default WorkSlider;
