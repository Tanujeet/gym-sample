import Image from "next/image";
import { FaUserTie } from "react-icons/fa6";

const Trainers = () => {
const trainers = [
  {
    name: "John Carter",
    role: "Certified Personal Trainer",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Ava Patel",
    role: "Yoga & Mobility Instructor",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Michael Lee",
    role: "Strength & Conditioning Coach",
    img: "https://randomuser.me/api/portraits/men/28.jpg",
  },
];


  return (
    <section id="trainers" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Our <span className="text-primary">Trainers</span>
        </h2>
        <p className="text-lg text-zinc-400 text-center max-w-2xl mx-auto mb-12">
          Experienced, certified, and passionate — our trainers are dedicated to
          helping you crush your fitness goals with the right guidance and
          motivation.
        </p>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {trainers.map((t) => (
            <div
              key={t.name}
              className="bg-neutral-900 rounded-xl shadow-lg overflow-hidden text-center p-6 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative w-40 h-40 mx-auto mb-5">
                <Image
                  src={t.img}
                  alt={t.name}
                  fill
                  className="object-cover rounded-full border-4 border-primary shadow-md"
                />
              </div>
              <div className="flex items-center justify-center gap-2 text-xl font-bold text-white mb-1">
                <FaUserTie className="text-primary" /> {t.name}
              </div>
              <p className="text-zinc-400">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;
