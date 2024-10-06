import React from 'react';
import DarkMode from './DarkMode';
import { FaRegUser } from "react-icons/fa";
const Navbar = () => {
    return (
        <nav className="w-full bg-transparent py-4 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="flex justify-between items-center w-full">
                    {/* Logo Section */}
                    <div className="flex items-center space-x-4 mr-10">
                        <a
                            href="#"
                            className="text-3xl font-bold text-indigo-600 hover:text-indigo-800 transition-colors duration-300 mr-50"
                        >
                            SKYCAST
                        </a>
                    </div>


                    {/* Search & Other Options */}
                    <div className="flex items-center space-x-4 ml-auto">
                        {/* Search Bar */}
                        <div className="hidden sm:block relative">
                            <input
                                type="text"
                                placeholder="Search"
                                className="pl-4 pr-10 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-300"
                            />
                            <span className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                <svg
                                    className="h-5 w-5 text-gray-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M16 17l-4-4m0 0a6 6 0 111.67-1.67L16 17z"
                                    />
                                </svg>
                            </span>
                        </div>

                        {/* Sign In Button */}
                        <a
                            href="/#"
                            className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition-colors duration-300"
                        >
                            Sign In
                        </a>
                        <a
                            href="/#"
                            className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition-colors duration-300"
                        >
                            Sign Up
                        </a>
                        {/* User Icon */}
                        <a
                            href="/#"
                            className="flex items-center justify-center bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition-colors duration-300"
                        >
                            <FaRegUser className="text-lg" /> {/* Adjusted size */}
                        </a>

                        {/* DarkMode Toggle */}
                        <DarkMode />
                    </div>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;