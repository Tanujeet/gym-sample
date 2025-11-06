import { FaClipboardList, FaPersonRunning, FaAppleWhole, FaUsers } from 'react-icons/fa6';

const Benefits = () => {
  const items = [
    { icon: <FaClipboardList className="text-sky-600" />, text: 'Personalized workout plans' },
    { icon: <FaPersonRunning className="text-emerald-600" />, text: 'Access to all group classes' },
    { icon: <FaAppleWhole className="text-amber-600" />, text: 'Nutritional guidance' },
    { icon: <FaUsers className="text-purple-600" />, text: 'Supportive and motivating community' },
  ];

  return (
    <section id="benefits" className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Benefits of Joining</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {items.map((i, idx) => (
            <div key={idx} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow">
              {i.icon}
              <span className="text-lg text-gray-700">{i.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;