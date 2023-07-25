// components
import TestimonialSlider from "../../components/TestimonialSlider";



const Testimonials = () => {
  return (
    <div className="h-full bg-primary/30 py-32 text-center">
      <div className="container mx-auto h-full flex flex-col justify-center">
        {/* title */}
        <h2 className="h2 mb-8 xl:mb-0">
          About my <span className="text-cubes">story.</span> 
        </h2>
        {/* slider */}
        <div>
          <TestimonialSlider/>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
