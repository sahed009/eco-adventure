import React, { useState } from "react";
import Slider from "react-slick";
import data from "../data/adventures.json";
import { Link } from "react-scroll";

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 3000,
        beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
        arrows: false,
    };


    const currentData = data[currentSlide] || {};

    return (
        <div
            className="relative h-svh flex items-start md:items-center bg-cover bg-center py-5 sm:py-10 overflow-hidden"
            style={{
                backgroundImage: `url(${currentData.image})`,
            }}
        >
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="container mx-auto flex flex-col md:flex-row gap-8 md:gap-10 justify-between items-center px-4">

                
                <div className="w-full md:w-1/2 overflow-hidden rounded-lg">
                    <Slider {...settings} className="w-full">
                        {data.map((item, index) => (
                            <div key={item.id} className="px-2">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className={`w-full h-[30vh] sm:h-[50vh] md:h-[40vh] lg:h-[50vh] object-cover rounded-lg border-4 ${currentSlide === index
                                        ? "border-blue-500"
                                        : "border-transparent"
                                        }`}
                                />
                                <h3 className="text-center text-white font-bold mt-2">
                                    {item.title}
                                </h3>
                            </div>
                        ))}
                    </Slider>
                </div>


                
                <div className="w-full md:w-1/2 h-1/2 text-white space-y-6 bg-black/30 p-8 rounded-lg backdrop-blur-md">
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-emerald-400">
                        {currentData.title}
                    </h1>
                    <p className="text-sm sm:text-lg">{currentData.shortDescription}</p>
                    <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base">
                        {currentData.includedItems?.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>

                    <Link
                        to="home"
                        smooth={true}
                        duration={500}
                        className="btn bg-emerald-400 outline-none border-none shadow-xl hover:text-white hover:bg-white/40 hover:backdrop-blur-lg text-lg mt-4"
                    >
                        Learn More
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default Banner;
