// link
import Link from "next/link";

// icons
import {
  RiInstagramLine,
  RiWhatsappLine,
} from 'react-icons/ri';

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link href={''} className="hover:to-accent transition-all duration-300">
        <RiInstagramLine/>
      </Link>
      <Link href={''} className="hover:to-accent transition-all duration-300">
        <RiWhatsappLine/>
      </Link>
    </div>
  );
};

export default Socials;
