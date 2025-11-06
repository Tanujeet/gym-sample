import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-10 pb-6 mt-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold">GymName</h3>
            <p className="text-zinc-400 mt-2">Stronger every day. Join the community.</p>
          </div>
          <div className="flex items-center gap-4 text-white">
            <a href="#" aria-label="Instagram" className="p-2 rounded-full bg-white/10 hover:bg-white/20"><FaInstagram /></a>
            <a href="#" aria-label="Facebook" className="p-2 rounded-full bg-white/10 hover:bg-white/20"><FaFacebookF /></a>
            <a href="#" aria-label="Twitter" className="p-2 rounded-full bg-white/10 hover:bg-white/20"><FaTwitter /></a>
          </div>
        </div>
        <p className="text-center text-zinc-500 mt-6">&copy; 2024 GymName. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;