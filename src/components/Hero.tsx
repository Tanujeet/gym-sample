import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center min-h-[70vh] md:min-h-[80vh] overflow-hidden"
    >
      {/* Background Image */}
      <Image
        src="/images/dumbell.webp"
        alt="People working out in a gym"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 text-center md:text-left container mx-auto px-6 py-24 md:py-32">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-md">
          Transform Your <span className="text-primary">Body</span>, <br />
          Elevate Your <span className="text-primary">Life</span>
        </h1>

        <p className="mt-6 text-base sm:text-lg md:text-xl text-zinc-200 max-w-2xl md:max-w-3xl leading-relaxed">
          Join our community of fitness enthusiasts with expert trainers,
          cutting-edge equipment, and motivational classes designed to help you
          achieve your peak potential.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6">
          <Link
            href="#timing-fees"
            className="rounded-full bg-primary text-white px-8 py-3 font-semibold text-base hover:bg-primary/90 transition-colors duration-300"
            aria-label="View our gym plans"
          >
            View Plans
          </Link>
          <Link
            href="#contact"
            className="rounded-full bg-white/10 px-8 py-3 text-white ring-1 ring-white/30 hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
            aria-label="Contact us for inquiries"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
