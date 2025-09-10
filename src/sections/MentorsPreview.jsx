export default function MentorsPreview() {
  const mentors = [
    { name: "Ravi Sharma", role: "Senior Engineer @Google", id: 1 },
    { name: "Anjali Verma", role: "Data Scientist @Amazon", id: 2 },
    { name: "Amit Singh", role: "Full-Stack Dev @Microsoft", id: 3 },
  ];

  return (
    <section className="py-16 bg-gray-50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center text-orange-600 mb-10">
        Meet Our Mentors
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {mentors.map((mentor) => (
          <div
            key={mentor.id}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition text-center"
          >
            <img
              src={`https://i.pravatar.cc/150?u=${mentor.id}`}
              alt={mentor.name}
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">{mentor.name}</h3>
            <p className="text-gray-600">{mentor.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
