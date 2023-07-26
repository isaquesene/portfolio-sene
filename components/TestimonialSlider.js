// testimonial data
const testimonialSlider = [
  {
    image: '/profile_sene.png',
    name: 'Isaque Sene',
/*     position: 'FullStack Developer', */
    message:
      'Hello, my name is Isaque Sene, I served the Brazilian Air Force for 8 years, I ve always had a great passion for technology, I m migrating from an area, I want to become a great Developer. Today I work as a PJ, freelance Fullstatrack Web Developer.',
  },
  /* {
    image: '/t-avt-2.png',
    name: 'Jane Doe',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
  {
    image: '/t-avt-3.png',
    name: 'Jhon Doe',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  }, */
];

//import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

//import required modules
import { Pagination } from 'swiper';

// icons
import { FaQuoteLeft } from 'react-icons/fa';

//image
import Image from 'next/image';
 
const TestimonialSlider = () => {
  return <Swiper 
  spaceBetween={10}
  pagination={{
    clickable: true
  }}
  modules={[Pagination]}
  className='h-[350px] sm:h-[480px]'
  >
    {testimonialSlider.map((person, index) => {
        return(
          <SwiperSlide key={index}>
            <div className='flex flex-col items-center md:flex-row gap-x-8 h-full px-5'>
              {/* avatar, nome, position */}
              <div className='w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0'>
                 <div className='flex flex-col justify-center text-center'>
                  {/* avatar  */}
                  <div className='mb-2 mx-auto'>
                    <Image src={person.image} width={100} height={100} alt=''/>
                  </div>
                  {/* nome */}
                  <div className='text-lg'>{person.name}</div>
                  {/* positon */}
                  {/* <div>position</div> */}
                 </div>
              </div>
              {/* messagem */}
              <div className='flex-1 flex flex-col justify-center
              before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0
              xl:before:h-[200px] relative xl:pl-20'>
                {/* quote icon */}
                <div className='mb-4'>
                  <FaQuoteLeft  className='text-2xl xl:text-5xl text-white/20 mx-auto md:mx-0'/>
                </div>
                {/* messagem */}
                <div className='xl:text-lg text-center md:text-left'>{person.message}</div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
  </Swiper>;
};

export default TestimonialSlider;

