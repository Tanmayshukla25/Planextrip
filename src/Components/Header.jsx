import React, { useState } from 'react';
import { FaPhoneVolume, FaUserPlus, FaHome, FaCar, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDestinationsHovered, setIsDestinationsHovered] = useState(false); // New state for Destinations hover

  const handleNavLinkClick = (linkName) => {
    setActiveLink(linkName);
    setMobileMenuOpen(false);
    setIsDestinationsHovered(false); // Close dropdown on link click
  };

  return (
    <div className="bg-gradient-to-r from-emerald-800 via-teal-800 to-cyan-900 text-white">
      {/* Top Bar */}
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 bg-opacity-20 py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 hover:text-orange-300 transition-colors cursor-pointer">
              <FaPhoneVolume className="text-orange-300" />
              <span>+91 93767-75193</span>
            </div>
            <div className="flex items-center space-x-2 hover:text-orange-300 transition-colors cursor-pointer">
              <MdEmail className="text-orange-300" />
              <span>info@planextrip.com</span>
            </div>
          </div>
          <button className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-4 py-1 rounded-full font-semibold hover:from-orange-300 hover:to-red-400 transition-all duration-300 transform hover:scale-105 shadow-lg hidden sm:flex items-center">
            <FaUserPlus className="mr-2" />
            Join Us as Travel Partner!
          </button>
        </div>
      </div>

      {/* Main Header */}
      <div className="py-4 px-4 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div
              className="w-40 h-16 bg-white rounded-lg shadow-md p-2 cursor-pointer hover:shadow-xl transition-shadow duration-300"
              aria-label="PlanexTrip Logo - Click to go to homepage"
              role="link"
              tabIndex="0"
              onClick={() => handleNavLinkClick('home')}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleNavLinkClick('home');
                }
              }}
            >
              <div className="w-full h-full bg-gradient-to-r from-emerald-500 to-teal-600 rounded flex items-center justify-center text-white font-bold text-xl">
                PlanexTrip
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <ul className="flex items-center space-x-6">
              <li>
                <a
                  href="#"
                  onClick={() => handleNavLinkClick('home')}
                  className={`flex items-center space-x-1 font-medium transition-colors duration-300 ${
                    activeLink === 'home'
                      ? 'text-orange-400 font-bold border-b-2 border-orange-400'
                      : 'hover:text-orange-300'
                  }`}
                >
                  <FaHome />
                  <span>Home</span>
                </a>
              </li>

              {/* Custom Destinations Dropdown */}
              <li
                className="relative"
                onMouseEnter={() => setIsDestinationsHovered(true)}
                onMouseLeave={() => setIsDestinationsHovered(false)}
              >
                <button
                  onClick={() => handleNavLinkClick('destination')} // Still set active on click
                  className={`flex items-center space-x-1 font-medium px-4 py-2 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-orange-400 ${
                    activeLink === 'destination' || isDestinationsHovered
                      ? 'text-orange-400 font-bold border-b-2 border-orange-400'
                      : 'hover:text-orange-300'
                  }`}
                >
                  Destinations
                </button>
                {isDestinationsHovered && (
                  <ul className="absolute left-0 mt-2 w-48 bg-slate-800 rounded-md shadow-lg py-1 z-10">
                    <li className="px-4 py-2 hover:bg-slate-700 cursor-pointer" onClick={() => handleNavLinkClick('destination')}>Plan International</li>
                    <li className="px-4 py-2 hover:bg-slate-700 cursor-pointer" onClick={() => handleNavLinkClick('destination')}>South Beauty</li>
                    <li className="px-4 py-2 hover:bg-slate-700 cursor-pointer" onClick={() => handleNavLinkClick('destination')}>North-Snow</li>
                    <li className="px-4 py-2 hover:bg-slate-700 cursor-pointer" onClick={() => handleNavLinkClick('destination')}>Rajasthan</li>
                    <li className="px-4 py-2 hover:bg-slate-700 cursor-pointer" onClick={() => handleNavLinkClick('destination')}>Madhya Pradesh</li>
                  </ul>
                )}
              </li>

              <li>
                <a
                  href="#"
                  onClick={() => handleNavLinkClick('cabs')}
                  className={`flex items-center space-x-1 font-medium transition-colors duration-300 ${
                    activeLink === 'cabs'
                      ? 'text-orange-400 font-bold border-b-2 border-orange-400'
                      : 'hover:text-orange-300'
                  }`}
                >
                  <FaCar />
                  <span>Cabs</span>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  onClick={() => handleNavLinkClick('contact')}
                  className={`flex items-center space-x-1 font-medium transition-colors duration-300 ${
                    activeLink === 'contact'
                      ? 'text-orange-400 font-bold border-b-2 border-orange-400'
                      : 'hover:text-orange-300'
                  }`}
                >
                  <FaEnvelope />
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </nav>

          {/* Search Input */}
          <div className="relative hidden sm:block">
            <div
              className="flex items-center"
              onMouseEnter={() => setIsSearchOpen(true)}
              onMouseLeave={() => setIsSearchOpen(false)}
            >
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  isSearchOpen ? 'w-64 opacity-100' : 'w-0 opacity-0'
                }`}
              >
                <input
                  type="text"
                  placeholder="Search Destination..."
                  className="w-full px-4 py-2 border-2 border-opacity-30 rounded-l-lg focus:outline-none focus:bg-opacity-30 backdrop-blur-sm text-black"
                />
              </div>
              <div
                className={`bg-orange-400 text-black p-3 ${
                  isSearchOpen ? 'rounded-r-lg' : 'rounded-lg'
                } hover:bg-orange-300 transition-all duration-300 transform hover:scale-110 shadow-lg cursor-pointer`}
              >
                <IoSearchSharp className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              className="p-2 focus:outline-none focus:ring-2 focus:ring-orange-400 rounded-md"
            >
              {mobileMenuOpen ? (
                <FaTimes className="text-white text-2xl" />
              ) : (
                <FaBars className="text-white text-2xl" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav
          id="mobile-menu"
          className="md:hidden bg-slate-900 bg-opacity-90 px-4 py-4 space-y-4 text-center transition-all duration-300"
        >
          <ul className="space-y-4">
            <li>
              <a
                href="#"
                onClick={() => handleNavLinkClick('home')}
                className={`block py-1 ${
                  activeLink === 'home' ? 'text-orange-400 font-semibold' : 'hover:text-orange-300'
                }`}
              >
                Home
              </a>
            </li>
            <li>
              {/* For mobile, you might want to keep it simple or expand on click */}
              <a
                href="#"
                onClick={() => handleNavLinkClick('destination')}
                className={`block py-1 ${
                  activeLink === 'destination' ? 'text-orange-400 font-semibold' : 'hover:text-orange-300'
                }`}
              >
                Destinations
              </a>
              {/* If you want a mobile accordion, that would be a separate state */}
            </li>
            <li>
              <a
                href="#"
                onClick={() => handleNavLinkClick('cabs')}
                className={`block py-1 ${
                  activeLink === 'cabs' ? 'text-orange-400 font-semibold' : 'hover:text-orange-300'
                }`}
              >
                Cabs
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => handleNavLinkClick('contact')}
                className={`block py-1 ${
                  activeLink === 'contact' ? 'text-orange-400 font-semibold' : 'hover:text-orange-300'
                }`}
              >
                Contact
              </a>
            </li>
            <li>
              <button className="w-full mt-3 bg-gradient-to-r from-orange-400 to-red-500 text-white py-2 rounded-full font-semibold hover:from-orange-300 hover:to-red-400 transition duration-300">
                <FaUserPlus className="inline mr-2" />
                Join as Travel Partner
              </button>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Header;