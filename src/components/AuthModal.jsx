import { motion } from "framer-motion";

export default function AuthModal({ type, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md relative"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold text-center text-orange-600">
          {type === "login" ? "Login" : "Sign Up"}
        </h2>
        <form className="mt-6 space-y-4">
          {type === "signup" && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border rounded-lg p-3"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="w-full border rounded-lg p-3"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-lg p-3"
          />
          <button type="submit" className="btn-primary w-full">
            {type === "login" ? "Login" : "Sign Up"}
          </button>
        </form>
      </motion.div>
    </div>
  );
}
