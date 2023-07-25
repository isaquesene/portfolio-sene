// testimonial data
const testimonialSlider = [
  {
    image: '/t-avt-1.png',
    name: 'Anne Smith',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
  {
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
  },
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
import { BsArrowRight } from 'react-icons/bs';

//image
import Image from 'next/image';
 
const TestimonialSlider = () => {
  return <Swiper 
  spaceBetween={10}
  pagination={{
    clickable: true
  }}
  modules={[Pagination]}
  className='h-[280px] sm:h-[480px]'
  >
    {testimonialSlider.map((person, index) => {
        return(
          <SwiperSlide key={index}>
            <div>
              {/* avatar, nome, position */}
              <div>
                 <div>
                  {/* avatar  */}
                  <div> avatar image</div>
                  {/* nome */}
                  <div>nome</div>
                  {/* positon */}
                  <div>position</div>
                 </div>
              </div>
              {/* menssagem */}
              <div>menssagem</div>
            </div>
          </SwiperSlide>
        );
      })}
  </Swiper>;
};

export default TestimonialSlider;

