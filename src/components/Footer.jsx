export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-xl font-bold text-white">CodingNizaa</h2>
          <p className="mt-3 text-sm">
            Learn coding with structured courses, expert mentors, and career
            guidance.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-white">Quick Links</h3>
          <ul className="mt-3 space-y-2">
            <li>
              <a href="/" className="hover:text-orange-400">
                Home
              </a>
            </li>
            <li>
              <a href="/courses" className="hover:text-orange-400">
                Courses
              </a>
            </li>
            <li>
              <a href="/mentors" className="hover:text-orange-400">
                Mentors
              </a>
            </li>
            <li>
              <a href="/pricing" className="hover:text-orange-400">
                Pricing
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-white">Contact</h3>
          <p className="mt-3 text-sm">Email: support@codingnizaa.com</p>
          <p className="text-sm">Phone: +91 98765 43210</p>
        </div>
      </div>
      <div className="mt-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} CodingNizaa. All rights reserved.
      </div>
    </footer>
  );
}
