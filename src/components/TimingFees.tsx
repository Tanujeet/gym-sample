import { FaClock, FaCrown, FaMedal } from "react-icons/fa6";

const TimingFees = () => {
  return (
    <section id="timing-fees" className="py-20 bg-[#faf6f0]">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
          Timings & <span className="text-primary">Membership Plans</span>
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Flexible hours and transparent pricing designed to fit your lifestyle.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Timings Box */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-zinc-200">
            <div className="flex items-center gap-2 mb-4 text-2xl font-bold text-gray-900">
              <FaClock className="text-primary" /> Timings
            </div>
            <div className="text-gray-700 space-y-2 text-lg">
              <p>
                Monday - Friday:{" "}
                <span className="font-semibold">6 AM - 10 PM</span>
              </p>
              <p>
                Saturday - Sunday:{" "}
                <span className="font-semibold">8 AM - 8 PM</span>
              </p>
              <p className="text-zinc-500 mt-3 text-base">
                Public Holidays: 9 AM - 5 PM
              </p>
            </div>
          </div>

          {/* Membership Plans */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-zinc-200">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Plans</h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Monthly Plan */}
              <div className="rounded-lg p-6 border border-zinc-300 text-center hover:border-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="flex items-center justify-center gap-2 font-bold text-gray-900 mb-2">
                  <FaMedal className="text-sky-600" /> Monthly
                </div>
                <p className="text-3xl font-extrabold text-gray-900">$50</p>
                <p className="text-sm text-gray-600 mt-2">
                  Gym floor + 2 classes
                </p>
              </div>

              {/* Quarterly Plan */}
              <div className="rounded-lg p-6 border border-zinc-300 text-center hover:border-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="flex items-center justify-center gap-2 font-bold text-gray-900 mb-2">
                  <FaMedal className="text-emerald-600" /> Quarterly
                </div>
                <p className="text-3xl font-extrabold text-gray-900">$135</p>
                <p className="text-sm text-gray-600 mt-2">
                  Gym floor + 8 classes
                </p>
              </div>

              {/* Annual Plan */}
              <div className="rounded-lg p-6 border border-zinc-300 text-center hover:border-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-md bg-gradient-to-b from-white to-amber-50">
                <div className="flex items-center justify-center gap-2 font-bold text-gray-900 mb-2">
                  <FaCrown className="text-amber-600" /> Annual
                </div>
                <p className="text-3xl font-extrabold text-gray-900">$500</p>
                <p className="text-sm text-gray-600 mt-2">
                  All-access + PT discounts
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimingFees;
