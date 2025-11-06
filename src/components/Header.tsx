import Link from 'next/link';
import { FaDumbbell } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md text-white">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold">
          <FaDumbbell className="text-sky-400" />
          <span>GymName</span>
        </Link>
        <nav>
          <ul className="hidden md:flex items-center gap-6">
            <li><Link href="#about" className="hover:text-sky-300">About</Link></li>
            <li><Link href="#facilities" className="hover:text-sky-300">Facilities</Link></li>
            <li><Link href="#trainers" className="hover:text-sky-300">Trainers</Link></li>
            <li><Link href="#timing-fees" className="hover:text-sky-300">Plans</Link></li>
            <li><Link href="#benefits" className="hover:text-sky-300">Benefits</Link></li>
            <li><Link href="#gallery" className="hover:text-sky-300">Gallery</Link></li>
            <li><Link href="#contact" className="btn-primary">Join Now</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;