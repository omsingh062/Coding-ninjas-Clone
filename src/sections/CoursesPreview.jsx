import CourseCard from "../components/CourseCard";

export default function CoursesPreview() {
  const courses = [
    {
      title: "Full-Stack Development",
      desc: "Learn MERN stack from scratch.",
      level: "Beginner",
    },
    {
      title: "Data Structures & Algorithms",
      desc: "Master DSA for interviews.",
      level: "Intermediate",
    },
    {
      title: "Machine Learning",
      desc: "Hands-on ML projects.",
      level: "Advanced",
    },
  ];

  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center text-orange-600 mb-10">
        Our Courses
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {courses.map((course, i) => (
          <CourseCard key={i} {...course} />
        ))}
      </div>
    </section>
  );
}
