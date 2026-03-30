import React from 'react';
import { GoDotFill } from "react-icons/go";
import { BsPlay } from "react-icons/bs"; // Using a React Icon for the play button
import banner from '../assets/banner.png';

const Banner = () => {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between px-10 py-20 bg-white max-w-7xl mx-auto gap-10">

            {/* Left Content Column */}
            <div className="flex-1 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-[#8B5CF6] text-sm font-semibold border border-purple-200">
                    <GoDotFill className="text-purple-600 animate-pulse" />
                    <span>New: AI-Powered Tools Available</span>
                </div>

                {/* Hero Heading */}
                <h1 className="text-6xl font-extrabold text-[#1F2937] leading-[1.1]">
                    Supercharge Your <br /> Digital Workflow
                </h1>

                <p className="text-gray-500 text-lg max-w-lg leading-relaxed">
                    Access premium AI tools, design assets, templates, and productivity
                    software—all in one place. Start creating faster today.
                </p>

                {/* Action Buttons */}
                <div className="flex items-center gap-4 pt-4">
                    <button className="bg-[#8B5CF6] hover:bg-[#7C3AED] active:scale-95 transition-all duration-200 text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-purple-200 cursor-pointer">
                        Explore Products
                    </button>
                    <button className="flex items-center gap-2 border border-purple-400 text-purple-700 px-8 py-3 rounded-full font-bold hover:bg-purple-50 active:bg-purple-100 active:translate-y-px transition-all cursor-pointer">
                        <BsPlay className="text-2xl" />
                        Watch Demo
                    </button>
                </div>
            </div>

            {/* Right Image Column */}
            <div className="flex-1 flex justify-end">
                <div className="w-full max-w-125 rounded-2xl overflow-hidden">
                    <img
                        src={banner}
                        alt="Digital Workflow Banner"
                        className="w-full h-auto object-cover"
                    />
                </div>
            </div>

        </section>
    );
};

export default Banner;