import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo1.png";
import { FaTrophy, FaTicketAlt, FaInfoCircle, FaHeadset, FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-gray-50 shadow-md py-2" 
          : "bg-gray-50 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo & Branding */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className={`relative ${scrolled ? "h-10 w-10" : "h-12 w-12"} transition-all duration-300`}>
              <div className="absolute inset-0 bg-yellow-400 rounded-full animate-pulse opacity-70 group-hover:opacity-100"></div>
              <img 
                src={logo} 
                className="h-full w-full object-cover rounded-full border-2 border-yellow-400 relative z-10" 
                alt="Lucky Lotto" 
              />
            </div>
            <div>
              <span className="text-xl md:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-700 tracking-wide">
                ONE2MILLIONS
              </span>
              <div className="text-xs text-gray-600">CHANCE TO BE RICH</div>
            </div>
          </Link>

          {/* Mobile Toggle Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-gray-800 focus:outline-none"
          >
            {isOpen ? (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            )}
          </button>

          {/* Navbar Links - Desktop */}
          <div className="hidden md:flex items-center space-x-2">
            <ul className="flex space-x-1">
              <li>
                <Link 
                  to="/" 
                  className="flex items-center px-3 py-2 text-black font-medium hover:text-yellow-600 rounded-lg hover:bg-gray-100 transition duration-200"
                  style={{ textDecoration: 'none' }}
                >
                  <FaTicketAlt className="mr-2" />
                  <span>Play</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/results" 
                  className="flex items-center px-3 py-2 text-black font-medium hover:text-yellow-600 rounded-lg hover:bg-gray-100 transition duration-200"
                  style={{ textDecoration: 'none' }}
                >
                  <FaTrophy className="mr-2" />
                  <span>Results</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="flex items-center px-3 py-2 text-black font-medium hover:text-yellow-600 rounded-lg hover:bg-gray-100 transition duration-200"
                  style={{ textDecoration: 'none' }}
                >
                  <FaInfoCircle className="mr-2" />
                  <span>About</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="flex items-center px-3 py-2 text-black font-medium hover:text-yellow-600 rounded-lg hover:bg-gray-100 transition duration-200"
                  style={{ textDecoration: 'none' }}
                >
                  <FaHeadset className="mr-2" />
                  <span>Support</span>
                </Link>
              </li>
            </ul>

            {/* CTA Buttons */}
            <div className="flex items-center ml-6 space-x-3">
              <Link 
                to="/account" 
                className="text-gray-700 hover:text-yellow-600"
                style={{ textDecoration: 'none' }}
              >
                <FaUserCircle className="h-6 w-6" />
              </Link>
              <Link 
                to="/buy-tickets" 
                className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold px-4 py-2 rounded-lg shadow-md hover:shadow-yellow-500/50 hover:scale-105 transition transform duration-200"
                style={{ textDecoration: 'none' }}
              >
                Buy Tickets
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col space-y-2 pb-4">
            <li>
              <Link 
                to="/" 
                className="flex items-center px-3 py-2 text-black font-medium hover:text-yellow-600 rounded-lg hover:bg-gray-100 transition duration-200"
                onClick={() => setIsOpen(false)}
                style={{ textDecoration: 'none' }}
              >
                <FaTicketAlt className="mr-2" />
                <span>Play</span>
              </Link>
            </li>
            <li>
              <Link 
                to="/results" 
                className="flex items-center px-3 py-2 text-black font-medium hover:text-yellow-600 rounded-lg hover:bg-gray-100 transition duration-200"
                onClick={() => setIsOpen(false)}
                style={{ textDecoration: 'none' }}
              >
                <FaTrophy className="mr-2" />
                <span>Results</span>
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className="flex items-center px-3 py-2 text-black font-medium hover:text-yellow-600 rounded-lg hover:bg-gray-100 transition duration-200"
                onClick={() => setIsOpen(false)}
                style={{ textDecoration: 'none' }}
              >
                <FaInfoCircle className="mr-2" />
                <span>About</span>
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className="flex items-center px-3 py-2 text-black font-medium hover:text-yellow-600 rounded-lg hover:bg-gray-100 transition duration-200"
                onClick={() => setIsOpen(false)}
                style={{ textDecoration: 'none' }}
              >
                <FaHeadset className="mr-2" />
                <span>Support</span>
              </Link>
            </li>
            <li className="pt-2">
              <Link 
                to="/buy-tickets" 
                className="block text-center bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold px-4 py-3 rounded-lg shadow-md"
                onClick={() => setIsOpen(false)}
                style={{ textDecoration: 'none' }}
              >
                Buy Tickets
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;