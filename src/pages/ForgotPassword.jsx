import React, { useState, useEffect } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";
import { useNavigate, useLocation } from "react-router-dom";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();


    useEffect(() => {
        if (location.state?.email) {
            setEmail(location.state.email);
        }
    }, [location.state]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const auth = getAuth();

        try {
            await sendPasswordResetEmail(auth, email);
            toast.success("Password reset email sent successfully!");
            setTimeout(() => window.location.href = `https://gmail.com`, 2000);
        } catch (error) {
            toast.error("Error sending reset email: " + error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-500 via-emerald-300 to-green-200 text-gray-800">
            <div className="bg-white/30 backdrop-blur-lg shadow-lg rounded-lg p-8 max-w-md w-full">
                <h1 className="text-3xl font-extrabold text-green-800 text-center mb-6">
                    Forgot Password
                </h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white/80 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent shadow-sm"
                        />
                    </div>
                    <button
                        type="submit"
                        className={`w-full py-3 rounded-lg font-bold text-white ${loading
                            ? "bg-green-400"
                            : "bg-emerald-600 hover:bg-emerald-700"
                            } shadow-md transition-all`}
                        disabled={loading}
                    >
                        {loading ? "Sending..." : "Send Reset Email"}
                    </button>
                </form>
                <p className="text-sm text-center mt-4">
                    Remembered your password?{" "}
                    <span
                        className="text-green-700 font-medium cursor-pointer hover:underline"
                        onClick={() => navigate("/login")}
                    >
                        Login here
                    </span>
                </p>
            </div>
        </div>
    );
};

export default ForgotPassword;
