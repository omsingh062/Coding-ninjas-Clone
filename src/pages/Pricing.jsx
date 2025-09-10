export default function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "₹4999",
      features: ["1 Course", "Basic Support", "Community Access"],
    },
    {
      name: "Pro",
      price: "₹9999",
      features: ["All Courses", "Priority Support", "Career Guidance"],
    },
    {
      name: "Premium",
      price: "₹14999",
      features: ["1-on-1 Mentorship", "Resume Reviews", "Mock Interviews"],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-3xl font-bold text-center text-orange-600">
        Choose Your Plan
      </h1>
      <div className="grid md:grid-cols-3 gap-8 mt-10">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="border rounded-xl p-6 shadow hover:shadow-lg transition text-center"
          >
            <h2 className="text-2xl font-semibold">{plan.name}</h2>
            <p className="mt-3 text-3xl font-bold text-orange-600">
              {plan.price}
            </p>
            <ul className="mt-4 space-y-2 text-gray-600">
              {plan.features.map((feature, i) => (
                <li key={i}>✔ {feature}</li>
              ))}
            </ul>
            <button className="btn-primary mt-6 w-full">Get Started</button>
          </div>
        ))}
      </div>
    </div>
  );
}
