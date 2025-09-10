export default function Mentors() {
  const mentors = [
    { id: 1, name: "Ravi Sharma", role: "Senior Software Engineer @Google" },
    { id: 2, name: "Anjali Verma", role: "Data Scientist @Amazon" },
    { id: 3, name: "Amit Singh", role: "Full-Stack Developer @Microsoft" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-3xl font-bold text-center text-orange-600">
        Meet Our Mentors
      </h1>
      <div className="grid md:grid-cols-3 gap-8 mt-10">
        {mentors.map((mentor) => (
          <div
            key={mentor.id}
            className="bg-white border rounded-xl p-6 shadow hover:shadow-lg transition text-center"
          >
            <img
              src={`https://i.pravatar.cc/150?u=${mentor.id}`}
              alt={mentor.name}
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold">{mentor.name}</h2>
            <p className="text-gray-600">{mentor.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
