import { NavLink } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../services/firebase";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user } = useAuth();

  const navClass = ({ isActive }) =>
    isActive
      ? "font-medium text-component border-b-2 border-component pb-1"
      : "text-gray-600 hover:text-text";

  const handleLogout = async () => {
    await signOut(auth);
    window.location.href = "/";
  };

  return (
    <nav className="w-full bg-white border-b border-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* nav kiri */}
        <div className="flex items-center gap-6 text-sm">
          {user && (
            <>
              <NavLink to="/home" className={navClass}>
                Home
              </NavLink>
              <NavLink to="/courses" className={navClass}>
                Courses
              </NavLink>
            </>
          )}
        </div>

        {/* nav kanan */}
        <div className="flex items-center gap-4 text-sm">
          {user ? (
            <button
              onClick={handleLogout}
              className="px-4 py-1.5 rounded-md border border-red-500
                         text-red-600 font-medium
                         hover:bg-red-50 transition"
            >
              Logout
            </button>
          ) : (
            <>
              <NavLink to="/" className="text-gray-600 hover:text-text">
                Login
              </NavLink>

              <NavLink
                to="/register"
                className="bg-component text-white px-4 py-1.5 rounded-md font-medium"
              >
                Register
              </NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
