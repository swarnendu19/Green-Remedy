import React, { useState, useEffect } from "react";
import LoadingAni from '../components/LoadingAni';
import About from '../components/About';
import Contact from "../components/ContactUs";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom"

function Home() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()

  const handleLoginButtonClicked = ()=>{
    navigate('/login')
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  }, []);



  return (
    <>
      {loading ? (
        <LoadingAni />
      ) : (
        <>
          <div className="relative min-h-screen bg-cover bg-center bg-[url('/homebg.jpg')]">
            {/* Navbar */}
            <nav className="fixed top-0 left-0 right-0 bg-opacity-70 bg-white p-4 shadow-lg px-12">
              <div className="container mx-auto flex items-center justify-between">
                <h1 className="text-2xl font-bold text-green-950">Green Remedy</h1>

                <div className="flex flex-1 max-w-md mx-4">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full bg-white text-green-700 p-2 border rounded-l-md border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-800"
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

                <div className="hidden md:flex space-x-4">
                  <a href="#home" className="text-lg font-semibold text-green-800 hover:bg-green-700 px-4 py-2 rounded-lg hover:text-white">Home</a>
                  <a href="#about" className="text-lg font-semibold text-green-800 hover:bg-green-700 px-4 py-2 rounded-lg hover:text-white">About</a>
                  <a href="#contact" className="text-lg font-semibold text-green-800 hover:bg-green-700 px-4 py-2 rounded-lg hover:text-white">Contact Us</a>
                </div>

                <button 
                onClick={handleLoginButtonClicked}
                className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-600">
                  Login
                </button>
              </div>
            </nav>

            {/* Main Content */}
            <div className="flex items-center justify-center min-h-screen slide-up">
              <div className="text-center text-white px-6 py-4 bg-green-800 bg-opacity-80 rounded-lg">
                <h2 className="text-4xl font-bold mb-4">Welcome to Green Remedy</h2>
                <p className="text-lg mb-6">
                  Discover the healing power of herbs and natural remedies with our extensive database and resources.
                </p>
                <Link to="/tulsi"
                  className="bg-green-700 text-white px-6 py-2 rounded-md hover:bg-green-300 hover:text-green-950 border border-1 border-green-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div id="about" className="">
            <About />
          </div>

          {/* contact us Section */}
          <div id="contact" className="">
            <Contact />
          </div>

          {/* contact us Section */}
          <div id="footer" className="">
            <Footer />
          </div>
        </>
      )}
    </>
  );
}

export default Home;
