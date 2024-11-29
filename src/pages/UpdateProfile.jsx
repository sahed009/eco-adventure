import { useState } from "react";
import { getAuth, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const UpdateProfile = () => {
    const auth = getAuth();
    const user = auth.currentUser;
    const navigate = useNavigate();

    const [name, setName] = useState(user?.displayName || "");
    const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name) {
            setError("Name is required.");
            return;
        }

        try {
            const updates = { displayName: name };

            if (photoURL) {
                updates.photoURL = photoURL;
            }

            await updateProfile(user, updates);

            toast.success("Profile updated successfully!");
            navigate("/profile");
        } catch (err) {
            setError(err.message || "Failed to update profile.");
            toast.error("Failed to update profile. Please try again.");
        }
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-green-200 to-green-100">
            <div className="absolute inset-0 opacity-10">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                    fill="none"
                    className="w-full h-full"
                    preserveAspectRatio="xMidYMid slice"
                >
                    <pattern
                        id="tree-pattern"
                        x="0"
                        y="0"
                        width="10"
                        height="10"
                        patternUnits="userSpaceOnUse"
                    >
                        <path
                            d="M50 5 L58 20 H42 Z"
                            fill="green"
                            opacity="0.5"
                        />
                    </pattern>
                    <rect width="100" height="100" fill="url(#tree-pattern)" />
                </svg>
            </div>

            <div className="relative w-[95%] sm:w-full max-w-md bg-white/30 backdrop-blur-md shadow-lg rounded-lg p-8 border border-white/20">
                <h2 className="text-2xl font-semibold text-center text-green-700 mb-4">Update Profile</h2>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-green-600 font-medium mb-2">Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Your name"
                            className="w-full p-3 border-none text-gray-700 rounded-lg bg-green-50 focus:ring focus:ring-green-200"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-green-600 font-medium mb-2">Photo URL (optional)</label>
                        <input
                            type="text"
                            value={photoURL}
                            onChange={(e) => setPhotoURL(e.target.value)}
                            placeholder="Profile photo URL (optional)"
                            className="w-full p-3 border-none text-gray-700 rounded-lg bg-green-50 focus:ring focus:ring-green-200"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full p-3 text-white bg-green-600 rounded-lg hover:bg-green-700 transition"
                    >
                        Update Profile
                    </button>
                </form>
            </div>

        </div>
    );
};

export default UpdateProfile;
