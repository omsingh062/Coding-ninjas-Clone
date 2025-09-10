import { useState } from "react";
import { Link } from "react-router-dom";
import AuthModal from "./AuthModal";

export default function Navbar() {
  const [showAuth, setShowAuth] = useState(false);
  const [authType, setAuthType] = useState("login");

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
          <Link to="/" className="text-2xl font-bold text-orange-600">
            CodingNizaa
          </Link>
          <div className="hidden md:flex gap-6 text-gray-700 font-medium">
            <Link to="/">Home</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/mentors">Mentors</Link>
            <Link to="/pricing">Pricing</Link>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => {
                setAuthType("login");
                setShowAuth(true);
              }}
              className="btn-outline"
            >
              Login
            </button>
            <button
              onClick={() => {
                setAuthType("signup");
                setShowAuth(true);
              }}
              className="btn-primary"
            >
              Signup
            </button>
          </div>
        </nav>
      </header>

      {showAuth && (
        <AuthModal type={authType} onClose={() => setShowAuth(false)} />
      )}
    </>
  );
}
