import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { GiCampfire } from "react-icons/gi";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-br from-green-100 via-blue-100 to-emerald-100 p-6 text-gray-800 py-10  border-t border-gray-200 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid gap-8 md:grid-cols-3">
                    
                    <div className="text-center md:text-left">
                        <div className="flex items-center gap-2 text-3xl font-bold text-teal-600 tracking-wide">
                            <GiCampfire className="text-emerald-500 animate-pulse text-5xl" />
                            <Link to="/" className="hover:text-emerald-500 transition-colors ease-in-out duration-300">
                                Eco Adventures
                            </Link>
                        </div>
                        <p className="text-md text-teal-900 mt-4 tracking-wide">
                            Embark on unforgettable journeys with our curated eco-friendly adventures. Explore responsibly and create memories that last a lifetime.
                        </p>
                    </div>

                    
                    <div className="text-center">
                        <h3 className="text-xl font-bold mb-4 text-teal-600">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <button type="button" className="hover:underline hover:text-teal-500 transition">
                                    Home
                                </button>
                            </li>
                            <li>
                                <button type="button"  className="hover:underline hover:text-teal-500 transition">
                                    About Us
                                </button>
                            </li>
                            <li>
                                <button type="button"  className="hover:underline hover:text-teal-500 transition">
                                    Adventures
                                </button>
                            </li>
                            <li>
                                <button type="button"  className="hover:underline hover:text-teal-500 transition">
                                    Contact
                                </button>
                            </li>
                        </ul>
                    </div>

                    
                    <div className="text-center md:text-right">
                        <h3 className="text-xl font-bold mb-4 text-teal-600">Stay Connected</h3>
                        <div className="flex justify-center md:justify-end gap-4 mb-6">
                            <a href="https://www.facebook.com/sahed.009/" className="hover:scale-110 transition">
                                <FaFacebookF className="text-xl text-teal-500" />
                            </a>
                            <a href="https://x.com/sahed_009" className="hover:scale-110 transition">
                                <FaTwitter className="text-xl text-teal-500" />
                            </a>
                            <a href="https://www.instagram.com/sahed.009/" className="hover:scale-110 transition">
                                <FaInstagram className="text-xl text-teal-500" />
                            </a>
                            <a href="https://www.linkedin.com/in/sahed009/" className="hover:scale-110 transition">
                                <FaLinkedinIn className="text-xl text-teal-500" />
                            </a>
                        </div>

                        <form className="flex flex-col gap-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="px-4 py-2 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-teal-500"
                            />
                            <button
                            type="button"
                                className="px-4 py-2 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 transition"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                
                <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-200 pt-6">
                    © {new Date().getFullYear()} Eco Adventures. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
