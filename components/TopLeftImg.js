//next image
import Image from "next/image";



const TopLeftImg = () => {
  return (
    <div className="absolute left-0 top-0 mix-blend-color-dodge z-1 w-[200px] xl:w-[400px] opacity-50">
      <Image src='/_LOGO_2.png' width={400} height={400} alt=""/>
    </div>
  ); 
};

export default TopLeftImg;
