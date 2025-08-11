
import { ArrowRight } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      title: "Web & Mobile App Development",
      desc: "Software Chamber specializes in creating powerful, scalable, and secure...",
      color: "bg-white",
    },
    {
      title: "Application Software Services",
      desc: "Software Chamber specializes in creating powerful, scalable, and secure...",
      color: "bg-teal-500 text-white",
    },
    {
      title: "Software Coding & Optimization",
      desc: "Software Chamber specializes in creating powerful, scalable, and secure...",
      color: "bg-white",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold flex items-center gap-2">
          Services <span className="text-teal-500">✦</span>
        </h2>
        <button className="text-gray-600 hover:text-teal-500">All Services</button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className={`${service.color} p-6 rounded-lg shadow hover:shadow-lg transition`}
          >
            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
            <p className="text-sm mb-4">{service.desc}</p>
            <button className="inline-flex items-center gap-2">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
