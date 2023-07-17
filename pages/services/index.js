// icons
import { RxSlider } from 'react-icons/rx';

//service data
export const serviceData = [];

//components
import ServiceSlider from '../../components/ServiceSlider';

import Bulb from '../../components/Bulb';

import Circles from '../../components/Circles';

// framer motion
import { motion } from 'framer-motion';

import { fadeIn } from '../../variants';

const Services = () => {
  return (
    <div className='h-full bg-primary/30 py-36 flex items-center'>
      <Circles/>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-x-8'>
          {/* text */}
          <div>
            <h2 className='h2 xl:mt-8'>My services <span className='text-cubes'>.</span></h2>
          </div>
          {/* slider */}
          <ServiceSlider/>
        </div>
      </div>
      <Bulb/>
    </div>
  );
};

export default Services;
