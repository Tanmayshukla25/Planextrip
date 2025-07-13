import React from "react";
import { FaInstagram } from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";
import girlImage from "../assets/girl.png"; // replace with your actual image path

const TourPromoSection = () => {
  return (
    <div className=" bg-gradient-to-br from-slate-500 to-slate-700 w-full">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Image */}
        <div className="md:w-1/2">
          <img
            src={girlImage}
            alt="tour girl"
            className="w-full h-auto object-cover rounded-xl shadow-2xl transition-transform transform hover:scale-105"
          />
        </div>

        {/* Text Content */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-purple-800 bg-gradient-to-r from-orange-600 via-red-600 to-fuchsia-700 bg-clip-text ">
            Grab The Best Tour Package <span className="text-indigo-800">!</span>
          </h2>
          <p className="text-white text-lg sm:text-xl font-medium">
            Looking for the perfect escape? 🏞️ Get unbeatable prices on our Kashmir tour packages!
          </p>
          <ul className="space-y-2 text-base sm:text-lg text-white">
            <li>✨ <span className="font-semibold">Limited Time Offer – Hurry, Seats Filling Fast!</span></li>
            <li>🧳 Adventure, comfort & memories—all bundled just for you.</li>
            <li>📅 <span className="font-semibold">Book Now & Save Big!</span></li>
          </ul>
        </div>
      </div>

      {/* Bottom Call to Action */}
      <div className="bg-gradient-to-br from-slate-500 to-slate-700 py-8 px-4 text-center flex flex-col sm:flex-row justify-center items-center gap-6">
        <h3 className="text-white text-2xl sm:text-3xl font-extrabold">
          Need A Customized Package?
        </h3>
        <div className="flex gap-4 flex-wrap justify-center">
          <button className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white px-6 py-2 rounded-full flex items-center gap-2 transition-all transform hover:scale-105 shadow-lg">
            Follow Us <FaInstagram />
          </button>
          <button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-6 py-2 rounded-full flex items-center gap-2 transition-all transform hover:scale-105 shadow-lg">
            Message Us <IoMdArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TourPromoSection;
