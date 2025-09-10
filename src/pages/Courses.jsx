export default function Courses() {
  const courses = [
    {
      id: 1,
      title: "Full-Stack Development",
      desc: "Master MERN stack with real projects.",
      price: "₹8,999",
    },
    {
      id: 2,
      title: "Data Structures & Algorithms",
      desc: "Ace coding interviews with DSA.",
      price: "₹6,499",
    },
    {
      id: 3,
      title: "Machine Learning",
      desc: "Hands-on ML with Python.",
      price: "₹9,499",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-3xl font-bold text-center text-orange-600">
        Our Courses
      </h1>
      <div className="grid md:grid-cols-3 gap-8 mt-10">
        {courses.map((course) => (
          <div
            key={course.id}
            className="border rounded-xl p-6 shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">{course.title}</h2>
            <p className="mt-2 text-gray-600">{course.desc}</p>
            <p className="mt-3 font-bold text-orange-600">{course.price}</p>
            <button className="btn-primary mt-4 w-full">Enroll Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}
