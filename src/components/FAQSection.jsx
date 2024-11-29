import React from "react";
import { FaQuestionCircle } from "react-icons/fa";
import "aos/dist/aos.css";

const FAQSection = () => {

    const faqData = [
        { question: "What is EcoAdventure?", answer: "EcoAdventure is an eco-friendly platform for adventure travel enthusiasts to explore sustainable travel options." },
        { question: "How do I book an adventure?", answer: "You can easily book an adventure by navigating through our adventure listings and clicking on the 'Book Now' button." },
        { question: "Are the adventures suitable for beginners?", answer: "Yes, we offer adventures for all skill levels. Each adventure has detailed information to help you choose the right one." },
        { question: "Can I cancel my booking?", answer: "Yes, you can cancel your booking up to 48 hours before the start of the adventure for a full refund." },
        { question: "What should I bring on my adventure?", answer: "We recommend packing appropriate clothing, a water bottle, sunscreen, and any necessary gear based on the type of adventure." },
        { question: "Is transportation provided for adventures?", answer: "Yes, transportation is provided for most of our adventures. Specific details will be mentioned in the adventure listing." },
        { question: "How do I become an EcoAdventure guide?", answer: "To become an EcoAdventure guide, you need to apply through our website and meet certain qualifications, including experience and eco-certifications." },
    ];

    return (
        <div className="py-12">
            <div className="container mx-auto p-6 grid lg:grid-cols-2 gap-12">
                {/* FAQ Accordion */}
                <div className="space-y-4">
                    {faqData.map((item, index) => (
                        <div key={index} className="collapse collapse-plus bg-gradient-to-b from-emerald-50 to-white shadow-md">
                            <input
                                type="radio"
                                name="my-accordion-3"
                                id={`faq-${index}`}
                                defaultChecked={index === 0}
                            />
                            <div className="collapse-title flex items-center gap-3">
                                <FaQuestionCircle size={24} className="text-teal-500" />
                                <span className=" text-lg font-medium">{item.question}</span>
                            </div>
                            <div className="collapse-content">
                                <p>{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>

                
                <div data-aos="fade-left" className="flex items-center justify-center">
                    <div className="  w-full h-full rounded-lg shadow-md  p-6">
                        <h3 className="text-2xl md:text-4xl font-bold mb-4">Ready for Your Next Adventure?</h3>
                        <p className="text-xl mb-10">Explore the most breathtaking and eco-friendly travel experiences tailored to your adventurous spirit.</p>
                        <img
                            src="https://i.ibb.co.com/7XspVcD/12478.jpg"
                            alt="Adventure Image"
                            className="w-full h-auto object-cover rounded-lg shadow-xl"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQSection;
