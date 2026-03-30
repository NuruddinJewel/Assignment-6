import React from 'react';
import { FiShoppingCart } from "react-icons/fi";
const Navbar = () => {
    return (
        <div>
            <nav className="navbar bg-base-100 shadow-sm px-8 py-4 flex items-center justify-between">
                {/* Logo */}
                <div className="flex-none">
                    <h1 className="text-3xl font-bold text-[#8B5CF6]">DigiTools</h1>
                </div>

                {/* Center Navigation Links */}
                <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
                    <li className="cursor-pointer hover:text-black">Products</li>
                    <li className="cursor-pointer hover:text-black">Features</li>
                    <li className="cursor-pointer hover:text-black">Pricing</li>
                    <li className="cursor-pointer hover:text-black">Testimonials</li>
                    <li className="cursor-pointer hover:text-black">FAQ</li>
                </ul>

                {/* Right Side Actions */}

                <div className="flex items-center gap-6">
                    <FiShoppingCart className="text-xl cursor-pointer text-gray-700 hover:text-[#8B5CF6] active:scale-90 transition-all" />
                    <button className="text-gray-700 font-medium hover:text-black cursor-pointer active:scale-95 active:translate-y-px transition-all duration-200">
                        Login
                    </button>
                    <button className="bg-linear-to-r from-[#8B5CF6] to-[#6D28D9] text-white px-8 py-2.5 rounded-full font-semibold shadow-md hover:shadow-lg hover:opacity-95 active:scale-95 active:translate-y-px transition-all duration-200 cursor-pointer">
                        Get Started
                    </button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;