import React from 'react';
import { FaUser } from 'react-icons/fa6'; // Import the user icon
import { MdDriveFileRenameOutline } from 'react-icons/md'; // Import the rename icon

const Profile = () => {
  const firstName = "John";
  const lastName = "Doe";
  const email = "johndoe@example.com";
  const password = "••••••••"; // Masked password for display

  return (
    <div className="min-h-screen bg-whitesmoke dark:bg-gray-900 p-8">
      {/* Profile section container */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-10">
        
        {/* Profile icon - very large with a rounded border */}
        <div className="flex items-center space-x-6 mb-8">
          <div className="flex-shrink-0">
            <div className="w-32 h-32 rounded-full border-4 border-gray-300 dark:border-gray-700 flex items-center justify-center">
              <FaUser className="text-6xl text-gray-600 dark:text-gray-300" />
            </div>
          </div>

          {/* Profile info */}
          <div>
            <h1 className="text-3xl font-bold dark:text-white">{firstName} {lastName}</h1>
            <p className="text-lg dark:text-gray-300">{email}</p>
          </div>
        </div>

        {/* Additional Profile Sections */}
        <div className="space-y-6">
          {/* First Name Section */}
          <div className="flex items-center space-x-2">
            <h2 className="text-xl font-semibold dark:text-white">First Name</h2>
            <MdDriveFileRenameOutline className="text-xl text-gray-600 dark:text-gray-300 cursor-pointer" />
          </div>
          <p className="text-lg dark:text-gray-300">{firstName}</p>

          {/* Last Name Section */}
          <div className="flex items-center space-x-2">
            <h2 className="text-xl font-semibold dark:text-white">Last Name</h2>
            <MdDriveFileRenameOutline className="text-xl text-gray-600 dark:text-gray-300 cursor-pointer" />
          </div>
          <p className="text-lg dark:text-gray-300">{lastName}</p>

          {/* Email Section */}
          <div className="flex items-center space-x-2">
            <h2 className="text-xl font-semibold dark:text-white">Email</h2>
            <MdDriveFileRenameOutline className="text-xl text-gray-600 dark:text-gray-300 cursor-pointer" />
          </div>
          <p className="text-lg dark:text-gray-300">{email}</p>

          {/* Password Section */}
          <div className="flex items-center space-x-2">
            <h2 className="text-xl font-semibold dark:text-white">Password</h2>
            <MdDriveFileRenameOutline className="text-xl text-gray-600 dark:text-gray-300 cursor-pointer" />
          </div>
          <p className="text-lg dark:text-gray-300">{password}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
