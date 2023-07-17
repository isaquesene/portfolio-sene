// next image
import Image from "next/image";

const Bulb = () => {
  return (
    <div className="absolute -left-36 -bottom-10 rotate-12 mix-blend-color-dodge animate-pulse duartion-75 z-10 w-[200px] xl:w-[260px]">
      <Image src={'/bulb.png'} 
      height={200} 
      width={260} 
      alt=""
      className="h-full w-full"/>
    </div>
  );
};

export default Bulb;
