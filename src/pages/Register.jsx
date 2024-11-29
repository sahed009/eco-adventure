import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase/firebase.init";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [photoURL, setPhotoURL] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const validatePassword = (password) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        return regex.test(password);
    };

    const handleRegister = async (e) => {
        e.preventDefault();

        if (!name || !email || !password) {
            toast.warning("Name, Email, and Password are required", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return;
        }

        if (!validatePassword(password)) {
            setError("Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long.");
            return;
        }

        const auth = getAuth();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(userCredential.user, { displayName: name, photoURL });
            navigate("/");
        } catch (error) {
            setError(error.message);
            toast.error("Registration Failed: " + error.message);
        }
    };

    const handleGoogleLogin = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            navigate("/");
        } catch (error) {
            toast.error("Google login failed: " + error.message);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-200 via-blue-200 to-emerald-300 p-6 py-10 px-4">
            <div className="bg-white/20 backdrop-blur-md shadow-lg rounded-lg p-8 max-w-md w-full">
                <h1 className="text-2xl font-bold text-teal-600 text-center mb-6">Register Your Account</h1>

                <form onSubmit={handleRegister} className="space-y-6">
                    <div className="relative">
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Name"
                            className="w-full px-4 py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        />
                    </div>

                    <div className="relative">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            className="w-full px-4 py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        />
                    </div>

                    <div className="relative">
                        <input
                            type="url"
                            value={photoURL}
                            onChange={(e) => setPhotoURL(e.target.value)}
                            placeholder="Photo URL (Optional)"
                            className="w-full px-4 py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        />
                    </div>

                    <div className="relative">
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            className="w-full px-4 py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        />
                    </div>

                    {error && <p className="text-red-500 text-sm">{error}</p>}

                    <button
                        type="submit"
                        className="w-full bg-emerald-500 text-white py-2 rounded-lg font-medium hover:bg-emerald-600 shadow-md transition-all"
                    >
                        Register
                    </button>
                </form>

                <div className="text-center mt-6">
                    <p className="text-gray-600">or</p>
                    <button
                        onClick={handleGoogleLogin}
                        className="mt-4 w-full flex items-center justify-center gap-2 bg-blue-500 text-white py-2 rounded-lg font-medium hover:bg-blue-600 shadow-md transition-all"
                    >
                        <FaGoogle className="text-lg" />
                        Sign Up with Google
                    </button>
                </div>

                <div className="mt-4 text-center">
                    <p className="text-gray-600">
                        Already have an account? <a href="/login" className="text-blue-500 hover:underline">Login here</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
