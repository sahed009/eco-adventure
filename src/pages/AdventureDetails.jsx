import React, { useState, useEffect } from "react";
import { useParams, Navigate, useNavigate, Link } from "react-router-dom";
import adventures from "../data/adventures.json";
import { useAuth } from "../context/AuthContext";
import { FaLeaf, FaMapMarkerAlt, FaClock, FaUsers, FaDollarSign } from "react-icons/fa";
import "aos/dist/aos.css";
import slugify from "slugify";

const AdventureDetails = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const { user } = useAuth();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [adventure, setAdventure] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const foundAdventure = adventures.find(
            (adventure) => slugify(adventure.title, { lower: true, strict: true }) === slug
        );
        setAdventure(foundAdventure);
    }, [slug]);

    useEffect(() => {
        if (adventure) {
            document.title = `${adventure.title} - EcoAdventure`;
        } else {
            document.title = "Adventure Not Found - EcoAdventure";
        }
    }, [adventure]);

    if (!user) {
        return <Navigate to="/login" />;
    }

    if (!adventure) {
        return (
            <div className="flex flex-col items-center justify-center p-10 bg-gradient-to-b from-green-100 via-emerald-50 to-green-200 text-center">
                <div className="max-w-xl mx-auto p-6 rounded-lg bg-white/80 shadow-md backdrop-blur-sm space-y-4">
                    <img
                        src="https://i.ibb.co/kG7NtNh/safari.jpg"
                        alt="Mountain Adventure"
                        className="w-full h-64 object-cover object-top rounded-md"
                    />
                    <h1 className="text-7xl font-extrabold text-emerald-500">404</h1>
                    <h2 className="text-3xl font-semibold text-gray-800">Page Not Found</h2>
                    <p className="text-gray-600">
                        Sorry, we couldn’t find the page you’re looking for. Let’s get back to nature!
                    </p>
                    <Link to="/">
                        <button className="mt-1 px-6 py-3 bg-emerald-500 text-white font-medium rounded-lg shadow-md hover:bg-emerald-600 transition-all">
                            Back to Home
                        </button>
                    </Link>
                </div>
            </div>
        );
    }

    const {
        title,
        shortDescription,
        image,
        location,
        duration,
        maxGroupSize,
        cost,
        ecoFriendlyFeatures = [],
        specialInstructions = [],
    } = adventure;

    const handleTalkWithExpert = () => {
        const currentDate = new Date();
        const currentHour = currentDate.getHours();
        const currentMinute = currentDate.getMinutes();

        if (currentHour >= 10 && (currentHour < 20 || (currentHour === 20 && currentMinute === 0))) {
            window.open("https://meet.google.com/", "_blank");
        } else {
            setIsModalOpen(true);
        }
    };


    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="py-12 bg-gradient-to-b from-green-100 to-white min-h-screen">
            <div className="container mx-auto p-6">
                <div className="text-center" data-aos="fade-down">
                    <h1 className="text-4xl font-extrabold text-teal-600">{title}</h1>
                    <p className="text-gray-600 text-lg mt-2">{shortDescription}</p>
                </div>

                <div className="mt-6" data-aos="zoom-in">
                    <img
                        src={image}
                        alt={title}
                        className="w-full md:w-2/3 mx-auto md:max-h-96 object-cover rounded-lg shadow-2xl"
                        loading="lazy"
                    />
                </div>

                <div className="mt-8 md:mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3" data-aos="fade-up">
                    <div className="flex items-center gap-4">
                        <FaMapMarkerAlt className="text-3xl text-teal-500" />
                        <div>
                            <h3 className="font-bold">Location</h3>
                            <p>{location}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <FaClock className="text-3xl text-teal-500" />
                        <div>
                            <h3 className="font-bold">Duration</h3>
                            <p>{duration}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <FaUsers className="text-3xl text-teal-500" />
                        <div>
                            <h3 className="font-bold">Max Group Size</h3>
                            <p>{maxGroupSize}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <FaDollarSign className="text-3xl text-teal-500" />
                        <div>
                            <h3 className="font-bold">Cost</h3>
                            <p>{cost}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <FaLeaf className="text-3xl text-teal-500" />
                        <div>
                            <h3 className="font-bold">Eco Features</h3>
                            <ul className="list-disc pl-6">
                                {ecoFriendlyFeatures.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-8" data-aos="fade-up">
                    <h3 className="text-2xl font-bold mb-4">Special Instructions</h3>
                    <ul className="list-disc pl-6 text-gray-700">
                        {specialInstructions.map((instruction, index) => (
                            <li key={index}>{instruction}</li>
                        ))}
                    </ul>
                </div>

                <div className="mt-10 text-center">
                    <button
                        onClick={handleTalkWithExpert}
                        className="px-6 py-3 bg-teal-500 text-white font-semibold rounded-lg shadow-md hover:bg-teal-600 transition"
                        data-aos="fade-up"
                    >
                        Talk with Expert
                    </button>
                </div>

                {isModalOpen && (
                    <div
                        className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50"
                        role="dialog"
                        aria-labelledby="modal-title"
                        aria-describedby="modal-description"
                    >
                        <div className="bg-gradient-to-b from-green-100 via-white to-emerald-50 p-6 rounded-lg shadow-lg">
                            <h3 id="modal-title" className="text-xl font-bold text-teal-600">Consultation Unavailable</h3>
                            <p id="modal-description" className="mt-4 text-gray-700">
                                Consultation is available only between <strong>10:00 AM</strong> to <strong>8:00 PM</strong>.
                            </p>
                            <div className="mt-6 text-center">
                                <button
                                    onClick={closeModal}
                                    className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600 transition"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdventureDetails;
