import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-primary">Us</span>
          </h2>
          <p className="text-lg text-zinc-300 mb-5 leading-relaxed">
            Welcome to{" "}
            <span className="font-semibold text-primary">GymName</span> — your
            destination for holistic fitness and well-being. We bring together
            modern equipment, science-backed programs, and a motivating
            community that inspires you to keep pushing forward.
          </p>
          <p className="text-lg text-zinc-300 leading-relaxed">
            Whether you’re just starting your fitness journey or aiming to break
            personal records, our expert trainers and diverse classes are here
            to guide and support you at every step.
          </p>
        </div>

        {/* Image Section */}
        <div className="relative h-72 md:h-96 rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/images/bg.webp" // ✅ Corrected path
            alt="People training at our gym"
            fill
            className="object-cover object-center transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
