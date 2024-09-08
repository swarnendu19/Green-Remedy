import React, { useState, useEffect } from "react";
import LoadingAni from '../components/LoadingAni'; // Adjust path as needed

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);  
  }, []);

  return (
    <>
      {loading ? (
        <LoadingAni />
      ) : (
        <div className="relative min-h-screen bg-cover bg-center bg-[url('/homebg.jpg')]">
          {/* Navbar */}
          <nav className="fixed top-0 left-0 right-0 bg-opacity-60 bg-white p-4 shadow-lg px-12">
            <div className="container mx-auto flex items-center justify-between">
              {/* Title */}
              <h1 className="text-2xl font-bold text-green-950">Green Remedy</h1>

              {/* Search Input */}
              <div className="flex flex-1 max-w-md mx-4">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full p-2 border rounded-l-md border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-800"
                />
                <button className="bg-green-800 text-white p-1 rounded-r-md hover:bg-green-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>

              {/* Menu Items */}
              <div className="hidden md:flex space-x-4">
                <a href="#home" className="text-green-800 hover:bg-green-700 px-4 py-2 rounded-lg hover:text-white">Home</a>
                <a href="#about" className="text-green-800 hover:bg-green-700 px-4 py-2 rounded-lg hover:text-white">About</a>
                <a href="#contact" className="text-green-800 hover:bg-green-700 px-4 py-2 rounded-lg hover:text-white">Contact Us</a>
              </div>

              {/* Login Button */}
              <a href="#login" className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-600">
                Login
              </a>
            </div>
          </nav>

          {/* Main Content */}
          <div className="flex items-center justify-center min-h-screen">
            <div className="text-center text-white px-6 py-4 bg-green-800 bg-opacity-80 rounded-lg">
              <h2 className="text-4xl font-bold mb-4">Welcome to Green Remedy</h2>
              <p className="text-lg mb-6">
                Discover the healing power of herbs and natural remedies with our extensive database and resources.
              </p>
              <a href="#learn-more" className="bg-green-700 text-white px-6 py-2 rounded-md hover:bg-green-300 hover:text-green-950 border border-1 border-green-300">
                Learn More
              </a>
            </div>
          </div>

        </div>
      )}
    </>
  );
}

export default Home;
