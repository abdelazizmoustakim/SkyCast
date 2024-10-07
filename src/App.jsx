import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router components
import Navbar from './component/Navbar/Navbar';
import Sidebar from './component/Sidebar/Sidebare';
import Hero from './component/Hero/Hero';
import Profile from './pages/Profile/Profile'; // Import the Profile component
import Contact from './pages/Contact/Contact';
import Footer from "./component/Footer/Footer"
function App() {
  return (
    <Router>
      <div className='bg-white dark:bg-gray-900 dark:text-white duration-200'>
        <Navbar />

        {/* Flexbox container to align Sidebar and content */}
        <div className='flex'>
          <Sidebar />

          {/* Main content area - renders based on the route */}
          <div className="flex-grow">
            <Routes>
              {/* Home Page Route */}
              <Route path="/" element={<Hero />} />
              <Route path="/contact" element={<Contact/>} />
              {/* Profile Page Route */}
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
      
    </Router>
  );
}

export default App;

