import React from 'react';
import { FaUserGraduate } from "react-icons/fa";
import { GrUserManager } from "react-icons/gr";

const Footer = () => {
  return (
    <footer className="py-8 mt-10 shadow-lg bg-white dark:bg-gray-800">
      {/* First Section: Title and Rights Statement */}
      <div className="w-full text-center">
        <h1 className="text-7xl font-bold transition-transform duration-300 text-gray-800 dark:text-white">
          Skycast
        </h1>
      </div>

      {/* Vertical Layout: About Me and What I Do Section */}
      <div className="flex flex-col items-center md:flex-row md:justify-around mt-8">
        
        {/* About Me Section */}
        <div className="md:w-1/2 text-center px-4">
          <h2 className="text-3xl font-extrabold mb-2 flex items-center justify-center text-gray-800 dark:text-white">
            <FaUserGraduate className="text-primary text-3xl mr-2" />
            About Me
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300">
            Hi, I'm <span className="font-semibold">Abdelaziz Moustakim</span>, a <span className="font-semibold">Full-stack developer</span> and <span className="font-semibold">Computer science student</span> dedicated to creating seamless web experiences using modern technologies. I'm also an aspiring <span className="font-semibold">software engineer</span>.
          </p>
        </div>

        {/* Vertical Divider */}
        <div className="border-l border-gray-600 h-auto my-8 hidden md:block"></div>

        {/* What I Do Section */}
        <div className="md:w-1/2 text-center px-4">
          <h3 className="text-3xl font-extrabold mb-2 flex items-center justify-center text-gray-800 dark:text-white">
            <GrUserManager className="text-primary text-3xl mr-2" />
            What I Do
          </h3>
          <p className="max-w-md mx-auto text-lg text-gray-700 dark:text-gray-300">
            I specialize in building responsive web applications, mastering both front-end and back-end technologies, and delivering user-friendly interfaces that enhance the overall user experience.
          </p>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="flex justify-center space-x-4 mt-8">
        <a href="#" className="text-gray-400 hover:text-gray-600 dark:hover:text-white transition duration-300">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="text-gray-400 hover:text-gray-600 dark:hover:text-white transition duration-300">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="text-gray-400 hover:text-gray-600 dark:hover:text-white transition duration-300">
          <i className="fab fa-github"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
