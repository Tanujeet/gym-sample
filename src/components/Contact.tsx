import { FaLocationDot, FaPhone, FaEnvelope } from "react-icons/fa6";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Contact <span className="text-primary">Us</span>
        </h2>
        <p className="text-lg text-zinc-400 text-center max-w-2xl mx-auto mb-12">
          Have questions or want to book a gym tour? We're here to help — drop
          us a message or find us below.
        </p>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <form className="bg-neutral-900 rounded-xl p-8 shadow-lg border border-zinc-800">
            <div className="grid grid-cols-1 gap-5">
              <input
                type="text"
                placeholder="Your Name"
                className="bg-neutral-800 border border-zinc-700 rounded-lg p-3 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="bg-neutral-800 border border-zinc-700 rounded-lg p-3 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <textarea
                placeholder="Message"
                className="bg-neutral-800 border border-zinc-700 rounded-lg p-3 h-32 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="button"
                className="bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300"
              >
                Send Message
              </button>
            </div>
            <div className="mt-4 text-sm text-zinc-500">
              We typically reply within 24 hours.
            </div>
          </form>

          {/* Info & Map */}
          <div className="bg-neutral-900 rounded-xl shadow-lg overflow-hidden border border-zinc-800">
            <div className="p-8 border-b border-zinc-800 space-y-3">
              <div className="flex items-center gap-3 text-lg">
                <FaLocationDot className="text-sky-500 text-xl" />
                123 Fitness Ave, Wellness City
              </div>
              <div className="flex items-center gap-3 text-lg">
                <FaPhone className="text-emerald-500 text-xl" />
                +1 (555) 123-4567
              </div>
              <div className="flex items-center gap-3 text-lg">
                <FaEnvelope className="text-amber-500 text-xl" />
                hello@gymname.com
              </div>
            </div>
            <iframe
              title="Gym Location"
              className="w-full h-64 grayscale contrast-125 brightness-90"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.299333995244!2d-122.41941562426633!3d37.77492957975966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064c04b7b3f%3A0x6b9b1a5c9d7c8b3!2sFitness%20Center!5e0!3m2!1sen!2sus!4v1697050000000!5m2!1sen!2sus"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
