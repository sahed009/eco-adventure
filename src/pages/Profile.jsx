import React, { useEffect } from "react";
import { auth } from "../firebase/firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";

const Profile = () => {
    const [user, loading, error] = useAuthState(auth);

    useEffect(() => {
        if (error) {
            console.error("Error:", error);
        }
    }, [error]);

    return (
        <div className="relative min-h-svh bg-gradient-to-r from-blue-600/60 to-green-400/40 flex items-center justify-center py-10 px-4">
            <div className="absolute top-10 left-10 w-60 h-60 bg-gradient-to-r from-blue-300 to-blue-500 rounded-full blur-2xl opacity-70"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-teal-300 to-green-500 rounded-full blur-2xl opacity-70"></div>

            {loading ? (
                <div className="text-center">
                    <div className="loader border-t-4 border-blue-500 rounded-full w-12 h-12 mx-auto animate-spin"></div>
                    <p className="mt-4 text-lg font-medium text-gray-700">Loading your profile...</p>
                </div>
            ) : user ? (
                <div className="relative bg-white/50 backdrop-blur-xl rounded-lg shadow-2xl p-8 w-full max-w-xl py-10 md:py-32 text-center z-10">
                    <img
                        src={user.photoURL || "https://via.placeholder.com/100"}
                        alt="User Profile"
                        className="w-32 h-32 object-cover mx-auto rounded-full border-4 border-teal-500 shadow-md"
                    />
                    <h1 className="text-2xl font-bold text-teal-600 mt-4">
                        Welcome, {user.displayName || "Adventurer"}
                    </h1>
                    <p className="text-gray-700 mt-2">
                        <span className="text-emerald-600 font-bold text-xl">Email:</span> {user.email}
                    </p>
                    <div className="mt-6">
                        <Link
                            to="/update-profile"
                            className="inline-block bg-teal-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-teal-600 transition"
                        >
                            Update Profile
                        </Link>
                    </div>
                    <Link
                        to="/"
                        className="mt-6 inline-block bg-teal-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-teal-600 transition"
                    >
                        Back to Home
                    </Link>
                </div>
            ) : (
                <div className="text-center z-10">
                    <h1 className="text-2xl font-semibold text-gray-700">
                        You are not logged in.
                    </h1>
                    <Link
                        to="/login"
                        className="mt-4 inline-block bg-emerald-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-emerald-600 transition"
                    >
                        Login
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Profile;
