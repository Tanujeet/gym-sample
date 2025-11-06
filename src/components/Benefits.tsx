import {
  FaClipboardList,
  FaPersonRunning,
  FaAppleWhole,
  FaUsers,
} from "react-icons/fa6";

const Benefits = () => {
  const items = [
    {
      icon: <FaClipboardList className="text-sky-600 text-3xl" />,
      text: "Personalized workout plans",
    },
    {
      icon: <FaPersonRunning className="text-emerald-600 text-3xl" />,
      text: "Access to all group classes",
    },
    {
      icon: <FaAppleWhole className="text-amber-600 text-3xl" />,
      text: "Nutritional guidance and diet tracking",
    },
    {
      icon: <FaUsers className="text-purple-600 text-3xl" />,
      text: "Supportive and motivating community",
    },
  ];

  return (
    <section id="benefits" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold  mb-4">
          Benefits of <span className="text-primary">Joining Us</span>
        </h2>
        <p className="text-lg  max-w-2xl mx-auto mb-12">
          Enjoy a full fitness experience designed for results — from expert
          guidance to community support and nutrition tracking.
        </p>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {items.map((i, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 bg-white rounded-xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-zinc-200"
            >
              <div className="flex-shrink-0">{i.icon}</div>
              <span className="text-lg font-medium text-gray-800 text-left">
                {i.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
