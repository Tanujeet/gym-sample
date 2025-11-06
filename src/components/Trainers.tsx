import Image from 'next/image';
import { FaUserTie } from 'react-icons/fa6';

const Trainers = () => {
  const trainers = [
    { name: 'John Doe', role: 'Certified Personal Trainer', img: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&w=640&auto=format&fit=crop' },
    { name: 'Jane Smith', role: 'Yoga Instructor', img: 'https://images.unsplash.com/photo-1517341720797-949b5fbc3bd4?q=80&w=640&auto=format&fit=crop' },
    { name: 'Mike Johnson', role: 'Strength Coach', img: 'https://images.unsplash.com/photo-1517960413843-0aee8e2b3d36?q=80&w=640&auto=format&fit=crop' },
  ];
  return (
    <section id="trainers" className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Our Trainers</h2>
        <p className="section-subtitle">Experienced, certified, and passionate about helping you succeed.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trainers.map((t) => (
            <div key={t.name} className="bg-white p-6 rounded-lg shadow-md text-center">
              <Image src={t.img} alt={t.name} width={320} height={320} className="rounded-full mx-auto mb-4 object-cover h-40 w-40" />
              <div className="flex items-center justify-center gap-2 text-xl font-bold mb-1"><FaUserTie className="text-sky-600" /> {t.name}</div>
              <p className="text-gray-600">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;