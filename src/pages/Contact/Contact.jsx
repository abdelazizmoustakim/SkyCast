import React from 'react';
import { TbMessage2Question } from 'react-icons/tb'; // Import the contact icon
import { MdSend } from "react-icons/md"; 
const Contact = () => {
  return (
    <div className="min-h-screen bg-whitesmoke dark:bg-gray-900 p-8">
      {/* Contact section container */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-10">
        
        {/* Contact icon - very large with a rounded border */}
        <div className="flex items-center space-x-6 mb-8">
          <div className="flex-shrink-0">
            <div className="w-32 h-32 rounded-full border-4 border-gray-300 dark:border-gray-700 flex items-center justify-center">
              <TbMessage2Question className="text-6xl text-gray-600 dark:text-gray-300" />
            </div>
          </div>

          {/* Contact form header */}
          <div>
            <h1 className="text-3xl font-bold dark:text-white">Get in Touch</h1>
            <p className="text-lg dark:text-gray-300">We'd love to hear from you!</p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-6">
          {/* Name Section */}
          <div>
            <label htmlFor="name" className="block text-lg font-semibold dark:text-white mb-2">Name</label>
            <input
              type="text"
              id="name"
              className="form-input"
              placeholder="Enter your name"
            />
          </div>

          {/* Email Section */}
          <div>
            <label htmlFor="email" className="block text-lg font-semibold dark:text-white mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="form-input"
              placeholder="Enter your email"
            />
          </div>

          {/* Message Section */}
          <div>
            <label htmlFor="message" className="block text-lg font-semibold dark:text-white mb-2">Message</label>
            <textarea
              id="message"
              rows="5"
              className="form-input resize-none"
              placeholder="Write your message..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
                type="submit"
                className="bg-gradient-to-r from-primary to-brandBlue text-white py-3 px-8 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center space-x-2"
            >
                <span>Send</span>
                <MdSend className="text-xl" />
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Contact;
