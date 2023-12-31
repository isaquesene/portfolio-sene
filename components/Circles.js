// Image
import Image from "next/image";

const Circles = () => {
  return (
  <div className="w-[200px] xl:w-[350px] lg:w-[350px] absolute -right-5 bottom-1 mix-blend-color-dodge animate-pulse duration-75 z-10">
    <Image src={'/bg-cube.png'} width={260} height={200} className="w-full h-full" alt=""/>
  </div>
  );
};

export default Circles;
