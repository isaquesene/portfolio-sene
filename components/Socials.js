// link
import Link from "next/link";

// icons
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookBoxLine,
  RiDribbbleLine,
  RiBehanceLine,
  RiPinterestLine,
} from 'react-icons/ri';

const Socials = () => {
  return (
    <div>
      <Link href={''} className="hover:to-accent transition-all duration-300">
        <RiYoutubeLine/>
      </Link>
    </div>
  );
};

export default Socials;
