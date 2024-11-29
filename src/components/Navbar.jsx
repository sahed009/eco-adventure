import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase.init";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { FaUserCircle, FaHome, FaSignOutAlt } from "react-icons/fa";
import { GiCampfire } from "react-icons/gi";

const Navbar = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                navigate("/login");
            })
            .catch((error) => {
                console.error("Error logging out:", error);
            });
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <nav
            ref={menuRef}
            className="relative z-50 bg-gradient-to-r from-green-400/20 to-blue-500/20 backdrop-blur-md shadow-lg px-6 py-4 flex justify-between items-center"
        >
            <div className="flex items-center gap-2 text-2xl font-bold text-teal-600 tracking-wide">
                <GiCampfire className="text-emerald-500 animate-pulse" />
                <Link to="/" className="hover:text-emerald-500" onClick={closeMenu}>
                    Eco Adventures
                </Link>
            </div>

            <button
                className="md:hidden text-3xl text-teal-600"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                {isMenuOpen ? "✖" : "☰"}
            </button>

            <div
                className={`absolute md:relative top-20 md:top-auto left-0 md:left-auto bg-white/80 md:bg-transparent w-full md:w-auto flex-col md:flex-row items-center gap-6 md:gap-8 px-4 py-4 md:py-0 rounded-xl shadow-lg md:shadow-none md:flex transition-transform duration-300 ease-in-out ${isMenuOpen ? "flex" : "hidden"
                    }`}
            >
                <Link
                    to="/"
                    className="flex items-center gap-2 text-lg font-medium text-emerald-600 hover:text-teal-600 transition-all hover:scale-110 duration-300 ease-in-out"
                    onClick={closeMenu}
                >
                    <FaHome /> Home
                </Link>
                {user && (
                    <Link
                        to="/update-profile"
                        className="flex items-center gap-2 text-lg font-medium text-emerald-600 hover:text-teal-600 transition-all hover:scale-110 duration-300 ease-in-out"
                        onClick={closeMenu}
                    >
                        <FaUserCircle /> Update Profile
                    </Link>
                )}

                <div className="flex items-center gap-4">
                    {user ? (
                        <>
                            <div
                                className="relative group cursor-pointer"
                                onClick={() => {
                                    closeMenu();
                                    navigate("/profile");
                                }}
                            >
                                <img
                                    src={user.photoURL || "https://placehold.co/600x400"}
                                    alt="User"
                                    className="w-14 h-14 rounded-full border-2 border-teal-500 shadow-md object-cover object-top transition-all hover:scale-110 duration-300 ease-in-out"
                                />
                                <div className="absolute top-16 left-0 bg-white/90 text-gray-800 text-sm px-3 py-1 rounded shadow-md hidden group-hover:block">
                                    {user.displayName || "Anonymous"}
                                </div>
                            </div>

                            <button
                                onClick={() => {
                                    closeMenu();
                                    handleLogout();
                                }}
                                className="flex items-center gap-2 bg-red-500 text-white font-semibold px-4 py-2 rounded-lg text-sm hover:bg-red-600 shadow-md transition-all hover:scale-110 duration-500 ease-in-out"
                            >
                                <FaSignOutAlt /> Logout
                            </button>
                        </>
                    ) : (
                        <Link
                            to="/login"
                            className="flex items-center gap-2 bg-emerald-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-emerald-600 shadow-md transition-all"
                            onClick={closeMenu}
                        >
                            <FaUserCircle /> Login
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
