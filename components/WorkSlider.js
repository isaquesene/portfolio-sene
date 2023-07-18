// data
export const workSlider = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/landing_page_clicadoc.png',
        },
        {
          title: 'title',
          path: '/clicadoc_sistem.png',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
        },
        {
          title: 'title',
          path: '/thumb4.jpg',
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/thumb4.jpg',
        },
        {
          title: 'title',
          path: '/thumb1.jpg',
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
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
  return <Swiper 
  spaceBetween={10}
  pagination={{
    clickable: true
  }}
  modules={[Pagination]}
  className='h-[280px] sm:h-[480px]'
  >
    {
      workSlider.slides.map((slide, index) => {
        return(
          <SwiperSlide key={index}>
            <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
              {slide.images.map((image, index) => {
                return (
                  <div key={index} className='relative rounded-lg overflow-hidden flex items-center justify-center group'>
                    <div className='flex items-center justify-center relative overflow-hidden'>
                      {/* image */}
                      <Image src={image.path} width={500} height={300} alt=''/>
                      {/* overlay gradient */}
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })
    }
  </Swiper>;
};

export default WorkSlider;
