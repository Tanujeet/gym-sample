import { FaHeart, FaWeightHanging, FaPeopleGroup } from "react-icons/fa6";
import Image from "next/image";

const Facilities = () => {
  return (
    <section id="facilities" className="py-20 bg-neutral-100">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
          Our <span className="text-primary">Facilities</span>
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Top-tier equipment, spacious studios, and modern environments designed
          to motivate and inspire your fitness journey.
        </p>

        {/* Facility Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden group">
            <div className="relative w-full h-56">
              <Image
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1080&auto=format&fit=crop"
                alt="Cardio Zone"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3 text-xl font-bold text-gray-900">
                <FaHeart className="text-red-500" /> Cardio Zone
              </div>
              <p className="text-gray-600 leading-relaxed">
                Treadmills, ellipticals, bikes, and rowers equipped with
                personal screens and real-time metrics for immersive training.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden group">
            <div className="relative w-full h-56">
              <Image
                src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=1080&auto=format&fit=crop"
                alt="Strength Training Area"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3 text-xl font-bold text-gray-900">
                <FaWeightHanging className="text-sky-600" /> Strength Training
              </div>
              <p className="text-gray-600 leading-relaxed">
                Fully equipped with barbells, dumbbells, machines, and
                functional rigs to challenge every muscle group safely.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden group">
            <div className="relative w-full h-56">
              <Image
                src="https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?q=80&w=1080&auto=format&fit=crop"
                alt="Group Classes"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3 text-xl font-bold text-gray-900">
                <FaPeopleGroup className="text-emerald-600" /> Group Classes
              </div>
              <p className="text-gray-600 leading-relaxed">
                Energizing yoga, Zumba, HIIT, and cycling sessions led by expert
                instructors in a fun, team-driven atmosphere.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
