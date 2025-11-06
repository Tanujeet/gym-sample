import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="section-title text-left">About Us</h2>
          <p className="text-lg text-white-700 mb-4">
            Welcome to GymName — your destination for holistic fitness and
            well-being. We combine modern equipment, science-backed programming,
            and an uplifting community.
          </p>
          <p className="text-lg text-white-700">
            Whether you’re starting out or pushing new limits, our trainers and
            classes are here to guide you every step of the way.
          </p>
        </div>
        <div className="relative h-64 md:h-80">
          <Image
            src="https://images.unsplash.com/photo-1518665759042-5b0141b36e5d?q=80&w=1080&auto=format&fit=crop"
            alt="About Gym"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default About;