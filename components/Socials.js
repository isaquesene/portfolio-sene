// link
import Link from "next/link";

// icons
import {
  RiInstagramLine,
  RiWhatsappLine,
  RiGithubLine,
} from 'react-icons/ri';

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link href={''} className="hover:text-cubes transition-all duration-300">
        <RiInstagramLine/>
      </Link>
      <Link href={''} className="hover:text-cubes transition-all duration-300">
        <RiWhatsappLine/>
      </Link>
      <Link href={''} className="hover:text-cubes transition-all duration-300">
        <RiGithubLine/>
      </Link>
    </div>
  );
};

export default Socials;
