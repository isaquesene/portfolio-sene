// link
import Link from "next/link";

// icons
import {
  RiInstagramLine,
  RiWhatsappLine,
  RiGithubLine,
  RiLinkedinLine,
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
      <Link href={'https://github.com/isaquesene'} className="hover:text-cubes transition-all duration-300">
        <RiGithubLine/>
      </Link>
      <Link href={'https://www.linkedin.com/in/isaque-luis-sene-1532a3194/'} className="hover:text-cubes transition-all duration-300">
        <RiLinkedinLine/>
      </Link>
    </div>
  );
};

export default Socials;
