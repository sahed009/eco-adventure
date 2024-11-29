import React from "react";
import { Link } from "react-router-dom";
import { FaLeaf } from "react-icons/fa";
import slugify from "slugify";

const AdventureCard = ({ adventure }) => {
    const { title, image, ecoFriendlyFeatures } = adventure;
    const slug = slugify(title, { lower: true, strict: true });

    return (
        <div className="relative overflow-hidden rounded-lg shadow-lg bg-white/20 backdrop-blur-lg hover:scale-105 transform transition-transform duration-300">
            <img
                src={image}
                alt={title}
                loading="lazy"
                className="w-full h-72 object-cover rounded-lg group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                <ul className="space-y-2 text-sm text-white opacity-80">
                    {ecoFriendlyFeatures.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2">
                            <FaLeaf className="text-green-400" />
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
                <Link
                    to={`/adventure/${slug}`}
                    className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                >
                    Explore Now
                </Link>
            </div>
        </div>
    );
};

export default AdventureCard;
