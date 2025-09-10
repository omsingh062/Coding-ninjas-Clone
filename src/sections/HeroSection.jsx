import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-orange-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-10">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="flex-1"
        >
          <h1 className="text-4xl font-bold text-orange-600 mb-4">
            Learn Coding with Experts
          </h1>
          <p className="text-gray-700 mb-6">
            Join structured courses, expert mentors, and build your dream career
            in tech.
          </p>
          <button className="btn-primary">Get Started</button>
        </motion.div>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="flex-1"
        >
          <img
            src="https://via.placeholder.com/500x350"
            alt="Coding Illustration"
            className="rounded-xl shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
