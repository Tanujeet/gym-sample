import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8 mt-20 border-t border-zinc-800">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 items-center md:items-start justify-between">
          {/* Brand Info */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white tracking-wide">
              Gym<span className="text-primary">Name</span>
            </h3>
            <p className="text-zinc-400 mt-3 max-w-xs mx-auto md:mx-0 leading-relaxed">
              Stronger every day. Join our community and elevate your lifestyle.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-3 text-zinc-300">
              Quick Links
            </h4>
            <ul className="space-y-2 text-zinc-400">
              <li>
                <a
                  href="#about"
                  className="hover:text-primary transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#facilities"
                  className="hover:text-primary transition-colors"
                >
                  Facilities
                </a>
              </li>
              <li>
                <a
                  href="#trainers"
                  className="hover:text-primary transition-colors"
                >
                  Trainers
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-3 text-zinc-300">
              Follow Us
            </h4>
            <div className="flex justify-center md:justify-end gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="p-3 rounded-full bg-white/10 hover:bg-primary transition-all duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="p-3 rounded-full bg-white/10 hover:bg-primary transition-all duration-300"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="p-3 rounded-full bg-white/10 hover:bg-primary transition-all duration-300"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-zinc-800 mt-10 pt-6">
          <p className="text-center text-zinc-500 text-sm">
            &copy; {new Date().getFullYear()}{" "}
            <span className="font-semibold text-white">GymName</span>. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
