import bg from "../assets/about.png";
import { CheckCircle } from "lucide-react";

export default function About() {
  const aboutData = [
    { name: "Tech Partners", value: "20+" },
    { name: "Project Completed", value: "150+" },
    { name: "Satisfied Customers", value: "1k+" },
  ];
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold leading-snug text-center">
        <span className="text-teal-500">✦</span> At Software Chamber,{" "}
        <span className="text-gray-500">we specialize</span> in turning complex
        challenges into elegant <br />
        <span className="text-gray-400">digital solutions</span>{" "}
        <span className="inline-block transform rotate-90">⤴</span>
      </h1>

      {/* Stats + Image + Features */}
      <div className="grid md:grid-cols-3 gap-8 mt-10 items-center">
        {/* Stats */}
        <div className="space-y-6 text-center md:text-left">
          {aboutData.map((el) => (
            <div key={el.name}>
              <p className="text-2xl font-bold">{el.value}</p>
              <p className="text-gray-600">{el.name}</p>
            </div>
          ))}

        
        </div>

        {/* Image */}
        <div className="rounded-lg overflow-hidden">
          <img
            src={bg}
            alt="Team working"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Features */}
        <div className="space-y-6">
          {[
            {
              title: "Your Team in the cloud",
              desc: "Work like a local. Get your dedicated engineers and remote team.",
            },
            {
              title: "Grow more with less",
              desc: "Achieve better results with fewer resources using optimized processes.",
            },
            {
              title: "Weekly sprint and reviews",
              desc: "Track progress and stay aligned with regular check-ins.",
            },
            {
              title: "Communication First",
              desc: "We focus on smooth communication to enhance collaboration.",
            },
          ].map((item, index) => (
            <div key={index} className="flex gap-3">
              <CheckCircle className="text-teal-500 w-6 h-6 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
