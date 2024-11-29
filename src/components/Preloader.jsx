import React from "react";
import { FaLeaf, FaMountain, FaWater } from "react-icons/fa";

const Preloader = () => (
    <div className="fixed inset-0 bg-gradient-to-b from-green-300 via-emerald-200 to-teal-100 flex items-center justify-center z-50">
        <div className="relative text-center">


            <div className="absolute -top-16 left-10 animate-bounce-slow">
                <FaLeaf className="text-green-500 text-4xl opacity-75" />
            </div>
            <div className="absolute top-0 right-10 animate-bounce-slower">
                <FaLeaf className="text-emerald-600 text-5xl opacity-60 rotate-45" />
            </div>
            <div className="absolute bottom-10 left-16 animate-bounce-fast">
                <FaLeaf className="text-teal-500 text-4xl opacity-70 -rotate-12" />
            </div>
            <div className="absolute bottom-10 right-20 animate-bounce">
                <FaLeaf className="text-green-400 text-5xl opacity-80 rotate-90" />
            </div>


            <div className="relative inline-block">
                <div className="animate-spin-slow w-20 h-20 rounded-full border-t-4 border-emerald-600 border-opacity-50"></div>
                <FaMountain className="absolute inset-0 m-auto text-teal-600 text-5xl animate-pulse" />
            </div>


            <p className="mt-8 text-xl font-bold text-emerald-800">
                Preparing Your Eco Adventure...
            </p>
            <p className="mt-2 text-md text-emerald-600">
                Connecting with nature in moments.
            </p>
        </div>
    </div>
);

export default Preloader;
