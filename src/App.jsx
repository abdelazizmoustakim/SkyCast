import { useState } from 'react';
import Navbar from './component/Navbar/Navbar';
import Sidebar from "./component/Sidebar/Sidebare";
import Hero from "./component/Hero/Hero";

function App() {
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200'>
      <Navbar />

      {/* Flexbox container to align Sidebar and Hero section */}
      <div className='flex'>
        <Sidebar />
        
        {/* Hero section should take the remaining space */}
        <div className="flex-grow">
          <Hero />
        </div>
      </div>
    </div>
  );
}

export default App;
