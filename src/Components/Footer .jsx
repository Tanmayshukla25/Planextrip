import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";
import footerlogo from "../assets/LogoImage.png";

const Footer = () => {
  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white">
      {/* Main Footer Section */}
      <div className="max-w-7xl mx-auto py-16 px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        {/* Branding and Socials */}
        <div className="flex flex-col items-start">
          <div className="w-[200px] mb-4">
            <img src={footerlogo} alt="PlaNexTrip Logo" className="max-w-full h-auto" />
          </div>
          <p className="text-base text-gray-300 leading-relaxed mb-6">
            Your one-stop destination for seamless hotel bookings, convenient car rentals, and unforgettable tour packages. Let’s make your travel dreams a reality!
          </p>
          <div className="flex gap-5 mt-auto"> {/* Use mt-auto to push social icons to the bottom */}
            <a
              href="#"
              aria-label="Facebook"
              className="bg-gray-700 hover:bg-blue-700 transition-all duration-300 p-3 rounded-full shadow-lg transform hover:scale-110"
            >
              <FaFacebookF className="text-white text-xl" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="bg-gray-700 hover:bg-pink-600 transition-all duration-300 p-3 rounded-full shadow-lg transform hover:scale-110"
            >
              <FaInstagram className="text-white text-xl" />
            </a>
            <a
              href="#"
              aria-label="Whatsapp"
              className="bg-gray-700 hover:bg-green-600 transition-all duration-300 p-3 rounded-full shadow-lg transform hover:scale-110"
            >
              <FaWhatsapp className="text-white text-xl" />
            </a>
          </div>
        </div>

        {/* Explore Section */}
        <div>
          <h2 className="text-xl font-extrabold text-red-500 mb-6 border-b-2 border-red-500 pb-2 inline-block">EXPLORE</h2>
          <ul className="space-y-4 text-gray-300 text-base">
            <li className="hover:text-red-400 transition-colors duration-300 cursor-pointer">Privacy Policy</li>
            <li className="hover:text-red-400 transition-colors duration-300 cursor-pointer">Refund and Cancellation Policy</li>
            <li className="hover:text-red-400 transition-colors duration-300 cursor-pointer">Terms and Conditions</li>
            <li className="hover:text-red-400 transition-colors duration-300 cursor-pointer">About Us</li>
          </ul>
        </div>

        {/* Help Center */}
        <div>
          <h2 className="text-xl font-extrabold text-red-500 mb-6 border-b-2 border-red-500 pb-2 inline-block">HELP CENTER</h2>
          <ul className="space-y-4 text-gray-300 text-base">
            <li className="flex items-start gap-3">
              <MdLocationOn className="text-red-400 text-2xl mt-1 flex-shrink-0" />
              <span>123, Near Raj Marriage Garden, Ramganjmandi – 326519 (IN)</span>
            </li>
            <li className="flex items-center gap-3">
              <MdPhone className="text-red-400 text-xl flex-shrink-0" />
              <span>+91 9376775193</span>
            </li>
            <li className="flex items-center gap-3">
              <MdEmail className="text-red-400 text-xl flex-shrink-0" />
              <span>info@planextrip.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-950 text-center text-sm text-gray-400 py-4 px-6 border-t border-gray-700">
        ©2025. <span className="font-bold text-white">PlaNexTrip</span> – The Travel Company. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;