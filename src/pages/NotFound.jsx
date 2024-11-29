import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center p-10 bg-gradient-to-b from-green-100 via-emerald-50 to-green-200 text-center">
          
            <div className="max-w-xl mx-auto p-6 rounded-lg bg-white/80 shadow-md backdrop-blur-sm space-y-4">
                <img
                    src="https://i.ibb.co.com/kG7NtNh/safari.jpg"
                    alt="Mountain Adventure"
                    className="w-full h-64 object-cover object-top rounded-md"
                />
                <h1 className="text-7xl font-extrabold text-emerald-500">404</h1>
                <h2 className="text-3xl font-semibold text-gray-800">
                    Page Not Found
                </h2>
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
};

export default NotFound;
