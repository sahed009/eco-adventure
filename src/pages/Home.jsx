import React from "react";
import { FaMountain, FaCompass, FaStar, FaHandsHelping, FaMapMarkerAlt, FaHeart, FaLeaf } from "react-icons/fa";
import adventureData from "../data/adventures.json";
import AdventureCard from "../components/AdventureCard";
import Banner from "../components/Banner";
import "aos/dist/aos.css";
import Marquee from "react-fast-marquee";
import FAQSection from "../components/FAQSection";

const featuredDestinations = [
    {
        icon: <FaMountain className="text-5xl text-teal-600 mb-6 animate-bounce" />,
        title: "Majestic Mountains",
        description:
            "Embark on a thrilling journey through towering peaks and serene valleys. Perfect for hikers and nature enthusiasts.",
        animationDelay: 0,
    },
    {
        icon: <FaCompass className="text-5xl text-teal-600 mb-6 animate-spin" />,
        title: "Exotic Trails",
        description:
            "Discover secluded paths, enchanting landscapes, and vibrant wildlife, off the beaten track.",
        animationDelay: 100,
    },
    {
        icon: <FaStar className="text-5xl text-teal-600 mb-6 animate-pulse" />,
        title: "Starry Nights",
        description:
            "Camp under a blanket of stars in some of the most remote and pristine locations on Earth.",
        animationDelay: 200,
    },
    {
        icon: <FaHandsHelping className="text-5xl text-teal-600 mb-6 animate-wiggle" />,
        title: "Local Guides",
        description:
            "Get personalized experiences with the help of local experts who bring destinations to life.",
        animationDelay: 300,
    },
];

const whyChooseUs = [
    {
        icon: <FaStar className="text-5xl text-emerald-500" />,
        title: "Premium Service",
        description:
            "We provide top-notch services tailored to meet your specific needs, ensuring an unforgettable experience.",
        animationType: "fade-right",
        animationDelay: 0,
    },
    {
        icon: <FaCompass className="text-5xl text-emerald-500" />,
        title: "Exclusive Trails",
        description:
            "Explore hidden paths and secluded destinations that only we can take you to, away from the crowd.",
        animationType: "fade-up",
        animationDelay: 100,
    },
    {
        icon: <FaHandsHelping className="text-5xl text-emerald-500" />,
        title: "Expert Guides",
        description:
            "Our knowledgeable and friendly guides ensure you have an enriching and safe journey.",
        animationType: "fade-left",
        animationDelay: 200,
    },
    {
        icon: <FaMapMarkerAlt className="text-5xl text-emerald-500" />,
        title: "Global Reach",
        description:
            "With a network spanning multiple continents, we bring the world to your doorstep.",
        animationType: "fade-right",
        animationDelay: 300,
    },
    {
        icon: <FaHeart className="text-5xl text-emerald-500" />,
        title: "Customer Focused",
        description:
            "Your satisfaction is our priority, with every service designed to exceed expectations.",
        animationType: "fade-up",
        animationDelay: 400,
    },
    {
        icon: <FaLeaf className="text-5xl text-emerald-500" />,
        title: "Eco-Friendly",
        description:
            "We are committed to sustainable tourism, leaving nature as pristine as we found it.",
        animationType: "fade-left",
        animationDelay: 500,
    },
];

const aosAnimations = [
    "fade-up",
    "fade-down",
    "zoom-in",
    "flip-left",
    "flip-right",
    "slide-up",
    "fade-left",
    "zoom-out",
    "flip-down",
    "fade-right",
];

const getRandomAnimation = () => {
    return aosAnimations[Math.floor(Math.random() * aosAnimations.length)];
};

const Home = () => {
    return (
        <div className="min-h-screen pb-12 bg-gradient-to-br from-blue-100 via-teal-100 to-green-100 relative overflow-hidden">

            <Banner />

            <section className="bg-teal-500 text-white py-2 overflow-hidden">
                <Marquee>
                    <div className="mr-12 whitespace-nowrap">
                        🌍 Eco-Friendly Tip: Travel sustainably with minimal environmental impact. 🚶‍♂️
                    </div>
                    <div className="mr-12 whitespace-nowrap">
                        ♻️ Featured Partner: Green Adventures 🌱 - Promoting eco-conscious travel options.
                    </div>
                    <div className="mr-12 whitespace-nowrap">
                        🌿 Eco-Friendly Tip: Pack light and reduce your carbon footprint. 🌍
                    </div>
                    <div className="mr-12 whitespace-nowrap">
                        🌱 Featured Partner: Clean Travel Co. 🌿 - Sustainable travel at its best.
                    </div>
                </Marquee>
            </section>

            <section id="home" className="container mx-auto mt-10 p-4">
                <h2 className="text-3xl font-bold text-center text-teal-700 mb-6">
                    Adventure Experiences
                </h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {adventureData.map((adventure) => (
                        <div
                            key={adventure.id}
                            data-aos={getRandomAnimation()}
                            data-aos-duration="1200"
                            data-aos-delay="200"
                        >
                            <AdventureCard adventure={adventure} />
                        </div>
                    ))}
                </div>
            </section>

            <section
                className="container mx-auto mt-16 p-8 bg-gradient-to-br from-green-100 via-teal-50 to-blue-100 rounded-lg shadow-lg"
                data-aos="fade-up"
            >
                <h2 className="text-4xl font-extrabold text-center text-green-700 mb-12" data-aos="zoom-in">
                    🌍 Featured Destinations
                </h2>
                <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 text-center">
                    {featuredDestinations.map((item, index) => (
                        <div
                            key={index}
                            className="p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition"
                            data-aos="fade-up"
                            data-aos-delay={item.animationDelay}
                        >
                            {item.icon}
                            <h3 className="text-2xl font-semibold text-gray-800">{item.title}</h3>
                            <p className="text-gray-600 mt-4">{item.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section
                className="container mx-auto mt-16 p-8 bg-gradient-to-br from-blue-100 via-white to-green-100 rounded-lg shadow-xl overflow-hidden"
                data-aos="fade-up"
            >
                <h2
                    className="text-4xl font-extrabold text-center text-emerald-700 mb-12"
                    data-aos="zoom-in"
                >
                    💡 Why Choose Us?
                </h2>
                <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
                    {whyChooseUs.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-6 bg-white p-8 rounded-lg shadow-md hover:shadow-2xl transition"
                            data-aos={item.animationType}
                            data-aos-delay={item.animationDelay}
                        >
                            {item.icon}
                            <div>
                                <h3 className="text-2xl font-semibold text-gray-800">{item.title}</h3>
                                <p className="text-gray-600 mt-2">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <FAQSection />
        </div>
    );
};

export default Home;
