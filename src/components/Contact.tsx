import { FaLocationDot, FaPhone, FaEnvelope } from 'react-icons/fa6';

const Contact = () => {
  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Contact Us</h2>
        <p className="section-subtitle">Have questions or want to book a tour? Get in touch.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <form className="bg-white p-6 rounded-lg shadow-md">
            <div className="grid grid-cols-1 gap-4">
              <input type="text" placeholder="Your Name" className="border rounded-md p-3" />
              <input type="email" placeholder="Your Email" className="border rounded-md p-3" />
              <textarea placeholder="Message" className="border rounded-md p-3 h-32" />
              <button type="button" className="btn-primary">Send Message</button>
            </div>
            <div className="mt-4 text-sm text-zinc-600">We typically reply within 24 hours.</div>
          </form>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 border-b">
              <div className="flex items-center gap-2"><FaLocationDot className="text-sky-600" /> 123 Fitness Ave, Wellness City</div>
              <div className="flex items-center gap-2 mt-2"><FaPhone className="text-emerald-600" /> +1 (555) 123-4567</div>
              <div className="flex items-center gap-2 mt-2"><FaEnvelope className="text-amber-600" /> hello@gymname.com</div>
            </div>
            <iframe
              title="Gym Location"
              className="w-full h-64"
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