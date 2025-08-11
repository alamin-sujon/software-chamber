export default function ContactFormSection() {
  return (
    <section className="py-16 max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h2 className="text-3xl font-bold mb-4">
          Let’s talk about your next project.{" "}
          <span className="text-green-500">We’re here to help.</span>
        </h2>
        <p className="mb-6 text-gray-600">
          Deliver personalized experiences to your customers with AI-powered
          recommendations...
        </p>
        <form className="space-y-4">
          <input className="w-full border p-3 rounded-lg" placeholder="First name" />
          <input className="w-full border p-3 rounded-lg" placeholder="Last name" />
          <input className="w-full border p-3 rounded-lg" placeholder="Email" />
          <input className="w-full border p-3 rounded-lg" placeholder="Phone" />
          <textarea
            className="w-full border p-3 rounded-lg"
            placeholder="Your message"
            rows={4}
          />
          <button className="bg-green-500 text-white py-3 px-6 rounded-lg">
            Submit
          </button>
        </form>
      </div>
      <div>
        <img
          src="/path/to/image.jpg"
          alt="Person working"
          className="rounded-lg w-full object-cover"
        />
      </div>
    </section>
  );
}
