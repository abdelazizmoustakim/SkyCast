import React from 'react';
import { FaRegUser } from "react-icons/fa";
import { TiWeatherCloudy } from "react-icons/ti";
import { MdFavoriteBorder } from "react-icons/md";
import { GrContact } from "react-icons/gr";
import { RiHome2Line } from "react-icons/ri";

// Update MenuLinks to include icons
const MenuLinks = [
    { id: 1, name: 'Home', link: '#home', icon: <RiHome2Line className="inline-block mr-2 text-xl" /> },
    { id: 2, name: 'Weather', link: '#weather', icon: <TiWeatherCloudy className="inline-block mr-2 text-xl" /> },
    { id: 3, name: 'Favorites', link: '#favorites', icon: <MdFavoriteBorder className="inline-block mr-2 text-xl" /> },
    { id: 4, name: 'Profile', link: '#profile', icon: <FaRegUser className="inline-block mr-2 text-xl" /> },
    { id: 5, name: 'Contact', link: '#contact', icon: <GrContact className="inline-block mr-2 text-xl" /> }
];

const Sidebar = () => {
    return (
        <aside className="w-64 h-[calc(100vh-4rem)] bg-white dark:bg-gray-900 dark:text-white fixed duration-200 relative z-40">
            <nav className="mt-6">
                <ul className="space-y-7"> {/* Increased space between links */}
                    {MenuLinks.map((link) => (
                        <li key={link.id}>
                            <a
                                href={link.link}
                                className="flex items-center py-3 px-4 font-bold text-lg rounded hover:bg-gray-700 dark:hover:bg-gray-700 transition duration-200"
                            >
                                {link.icon} {/* Render the icon */}
                                {link.name} {/* Render the link name */}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
