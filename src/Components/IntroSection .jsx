import React from 'react';
import GirlWithLuggage from '../assets/girl-travel.webp';
import { IoSparkles } from 'react-icons/io5';
import { motion } from 'framer-motion';
import { MdArrowForwardIos } from "react-icons/md";
const IntroSection = () => {
const sentence = "Hamare Rastoon Mein, Aapki Manzil.!";

    const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.4,
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      damping: 10,
      stiffness: 80,
    },
  },
};

  return (
    <div className="relative w-full min-h-[600px] bg-gradient-to-br from-slate-800 to-slate-900 flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-10">
      
      {/* Left Side Image Section */}
      <div className="relative w-full md:w-1/2 flex justify-center items-center">
        <div className="relative group">
          <img
            src={GirlWithLuggage}
            alt="Traveler"
            className="z-10   transform group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      {/* Right Side Text Section */}
      <div className="text-white w-full md:w-1/2 text-center md:text-left mt-8 md:mt-0">
     <motion.h1
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="text-white text-3xl sm:text-4xl md:text-5xl font-bold text-center mt-6 tracking-wide"
    >
      {sentence.split(" ").map((word, index) => (
        <motion.span
          key={index}
          variants={wordVariants}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </motion.h1>

        <p className="text-lg text-gray-300 mb-8">
          Experience personalized travel like never before
        </p>

         <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-full shadow-lg hover:from-orange-400 hover:to-red-500 transition-all duration-300 transform hover:scale-105 flex items-center gap-3">
      <IoSparkles className="text-lg" />
      <span>Need a Customized Package?</span>
      <MdArrowForwardIos className="text-sm" />
    </button>
      </div>
    </div>
  );
};

export default IntroSection;