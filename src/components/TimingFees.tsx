import { FaClock, FaCrown, FaMedal } from 'react-icons/fa6';

const TimingFees = () => {
  return (
    <section id="timing-fees" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Timings & Membership Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center gap-2 mb-2 text-xl font-bold"><FaClock className="text-amber-500" /> Timings</div>
            <p>Monday - Friday: 6 AM - 10 PM</p>
            <p>Saturday - Sunday: 8 AM - 8 PM</p>
            <p className="text-zinc-500 mt-2">Public holidays: 9 AM - 5 PM</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Plans</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border rounded-lg p-4 text-center">
                <div className="flex items-center justify-center gap-2 font-bold"><FaMedal className="text-sky-600" /> Monthly</div>
                <p className="text-2xl font-extrabold mt-2">$50</p>
                <p className="text-sm text-zinc-600">Gym floor + 2 classes</p>
              </div>
              <div className="border rounded-lg p-4 text-center">
                <div className="flex items-center justify-center gap-2 font-bold"><FaMedal className="text-emerald-600" /> Quarterly</div>
                <p className="text-2xl font-extrabold mt-2">$135</p>
                <p className="text-sm text-zinc-600">Gym floor + 8 classes</p>
              </div>
              <div className="border rounded-lg p-4 text-center">
                <div className="flex items-center justify-center gap-2 font-bold"><FaCrown className="text-amber-600" /> Annual</div>
                <p className="text-2xl font-extrabold mt-2">$500</p>
                <p className="text-sm text-zinc-600">All-access + PT discounts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimingFees;