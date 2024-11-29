import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const { login, googleLogin } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await login(email, password);
      toast.success("Logged in successfully!");
      navigate("/", { replace: true });
    } catch (error) {
      toast.error(error.message || "Invalid email or password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await googleLogin();
      toast.success("Logged in with Google!");
      navigate("/", { replace: true });
    } catch (error) {
      toast.error(error.message || "Failed to log in with Google. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-300 via-emerald-200 to-blue-200 p-6">
      <div className="bg-green-300/30 backdrop-blur-3xl shadow-xl rounded-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-teal-700 text-center mb-6">Welcome Back</h1>
        <p className="text-center text-sm text-gray-600 mb-6">Explore the world, naturally. Log in to start your adventure.</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />

          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-emerald-600 text-white py-3 rounded-lg font-medium hover:bg-emerald-700 transition-all shadow-lg ${loading && "opacity-50 cursor-not-allowed"}`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="text-right mt-3">
          <Link
            to="/forgot-password"
            state={{ email }} 
            className="text-sm text-emerald-700 hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

        <div className="text-center mt-6">
          <p className="text-gray-600">or</p>
          <button
            onClick={handleGoogleLogin}
            className="mt-4 w-full bg-blue-100 text-emerald-700 py-3 rounded-lg font-medium hover:bg-green-200 flex items-center justify-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 48 48" fill="none">
              <path d="M24 9.5c3.4 0 6.4 1.3 8.8 3.4l6.5-6.5C35.6 3.3 30.1.5 24 .5 14.6.5 6.7 6.3 3.5 14.3l7.7 6C12.8 13.4 17.9 9.5 24 9.5z" fill="#EA4335" />
              <path d="M46.3 24c0-1.4-.1-2.8-.3-4.2H24v8h12.7c-.7 3.6-2.8 6.5-5.7 8.5l7.7 6C42.6 38.1 46.3 31.6 46.3 24z" fill="#34A853" />
              <path d="M10.2 28.3c-1-3-1-6.4 0-9.3l-7.7-6c-3.1 6.1-3.1 13.3 0 19.4l7.7-6z" fill="#FBBC04" />
              <path d="M24 46.3c6.1 0 11.5-2.1 15.3-5.7l-7.7-6c-2.1 1.4-4.8 2.3-7.6 2.3-6.1 0-11.3-4-13.2-9.4l-7.7 6C6.7 41.7 14.6 46.3 24 46.3z" fill="#4285F4" />
            </svg>
            Login with Google
          </button>
        </div>
        <div className="text-center mt-6">
          <p className="text-gray-700">
            Don't have an account? <Link to="/register" className="text-emerald-700 hover:underline font-medium">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
