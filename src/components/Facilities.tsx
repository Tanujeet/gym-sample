import { FaHeart, FaWeightHanging, FaPeopleGroup } from 'react-icons/fa6';
import Image from 'next/image';

const Facilities = () => {
  return (
    <section id="facilities" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Our Facilities</h2>
        <p className="section-subtitle">Top-tier equipment, spacious studios, and clean, modern spaces designed to motivate.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Image src="https://images.unsplash.com/photo-1598970434795-0c54fe7c0640?q=80&w=800&auto=format&fit=crop" alt="Cardio" width={800} height={500} className="rounded-md mb-4" />
            <div className="flex items-center gap-2 mb-2 text-xl font-bold"><FaHeart className="text-red-500" /> Cardio Zone</div>
            <p>Treadmills, ellipticals, bikes, rowers with personal screens and metrics.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Image src="https://images.unsplash.com/photo-1517821362853-2c4d94bb5f55?q=80&w=800&auto=format&fit=crop" alt="Strength" width={800} height={500} className="rounded-md mb-4" />
            <div className="flex items-center gap-2 mb-2 text-xl font-bold"><FaWeightHanging className="text-sky-600" /> Strength Training</div>
            <p>Free weights, barbells, machines, and functional training rigs.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Image src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop" alt="Classes" width={800} height={500} className="rounded-md mb-4" />
            <div className="flex items-center gap-2 mb-2 text-xl font-bold"><FaPeopleGroup className="text-emerald-600" /> Group Classes</div>
            <p>Yoga, Zumba, HIIT, cycling, and mobility sessions led by pros.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;