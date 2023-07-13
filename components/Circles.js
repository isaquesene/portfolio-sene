// Image
import Image from "next/image";

const Circles = () => {
  return (
  <div className="w-[200px] xl:w-[300px] absolute -right-10 -bottom-1 mix-blend-color-dodge animate-pulse duration-75 z-10">
    <Image src={'/cubese.png'} width={260} height={200} className="w-full h-full" alt=""/>
  </div>
  );
};

export default Circles;
