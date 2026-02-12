import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { auth } from "../services/firebase";

export default function Register() {
  const navigate = useNavigate();

  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Create user
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Set display name (optional but NICE)
      if (nama) {
        await updateProfile(userCredential.user, {
          displayName: nama,
        });
      }

      navigate("/home");
    } catch (err) {
      setError(err.message || "Register failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-bg flex items-center justify-center px-4">
      <div className="w-full max-w-sm bg-white rounded-xl border-2 border-gray-300 p-6 flex flex-col gap-4">
        
        <h1 className="text-xl font-semibold text-text text-center">
          Register
        </h1>

        {error && (
          <div className="text-sm text-red-500 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          {/* Name */}
          <input
            type="text"
            placeholder="Full Name"
            className="border-2 border-gray-300 rounded-md px-3 py-2 text-sm
                       focus:outline-none focus:border-component"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            required
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            className="border-2 border-gray-300 rounded-md px-3 py-2 text-sm
                       focus:outline-none focus:border-component"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="border-2 border-gray-300 rounded-md px-3 py-2 text-sm w-full pr-10
                         focus:outline-none focus:border-component"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {showPassword ? (
                <EyeSlashIcon className="w-5 h-5" />
              ) : (
                <EyeIcon className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="bg-component text-white py-2 rounded-md font-medium
                       disabled:opacity-70"
          >
            {loading ? "Creating account..." : "Register"}
          </button>
        </form>

        <p className="text-xs text-center text-gray-600">
          Already have an account?{" "}
          <Link to="/" className="text-component font-medium">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
