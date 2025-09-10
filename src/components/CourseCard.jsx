export default function CourseCard({ title, desc, level }) {
  return (
    <div className="glass p-6 flex flex-col gap-3 shadow hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-orange-600">{title}</h3>
      <p className="text-gray-700 flex-1">{desc}</p>
      <span className="badge badge-info self-start">{level}</span>
      <button className="btn-primary w-full mt-3">Enroll Now</button>
    </div>
  );
}
