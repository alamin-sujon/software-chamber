// TestimonialSection.jsx
export default function TestimonialSection() {
  const testimonials = [
    {
      quote:
        "Sed ut varius neque turpis enim ut mattis consectetur. Tortor urna risus pharetra nec.",
      name: "Alex Lentes",
      role: "Entrepreneur & Author",
      avatar: "/images/alex.jpg",
    },
    {
      quote:
        "Working with this team was an amazing experience. They delivered more than expected!",
      name: "Sofia Mendes",
      role: "Startup Founder",
      avatar: "/images/sofia.jpg",
    },
    {
      quote:
        "Their attention to detail and customer focus made all the difference for our project.",
      name: "Mark Johnson",
      role: "Product Manager",
      avatar: "/images/mark.jpg",
    },
  ];

  return (
    <section className="bg-black text-white py-16">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-12">
          Don’t just take our word for it. Hear what our clients say
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-gray-900 rounded-lg p-6 flex flex-col items-center text-center"
            >
              <p className="italic text-lg mb-4">"{t.quote}"</p>
              <div className="flex items-center space-x-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="text-left">
                  <p className="font-medium">{t.name}</p>
                  <p className="text-sm text-gray-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
