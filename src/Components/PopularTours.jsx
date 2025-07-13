import React, { useEffect } from "react";
import { motion } from "framer-motion";
import manali from "../assets/manali.webp"
import Jaisalmer from "../assets/Jaisalmer.jpeg"
import NorthGoa from "../assets/NorthGoa.webp"
import KotaUdaipur from "../assets/KotaUdaipur.jpeg"

const tours = [
  {
    id: 1,
    title: "Manali-Kullu-Kasol",
    description: "Explore the Magical Beauty of Himachal Pradesh with this 5-day gateway to manali, kullu and kasol.",
    price: "₹7999",
    image: manali,
  },
  {
    id: 2,
    title: "Jaisalmer-Loungewala",
    description: "Leave your footprints in the Thar Desert. Jaisalmer awaits: Craft your desert memories.",
    price: "₹7499",
    image: Jaisalmer,
  },
  {
    id: 3,
    title: "North-Goa | South-Goa",
    description: "Paradise beaches, vibrant nightlife, and Portuguese heritage. Experience the ultimate tropical getaway.",
    price: "₹8999",
    image: NorthGoa,
  },
  {
    id: 4,
    title: "Kota-Udaipur",
    description: "City of Lakes and Palaces. Discover the royal heritage and stunning architecture of Rajasthan.",
    price: "₹6999",
    image: KotaUdaipur,
  },
];

const PopularTours = () => {
  // AOS-like scroll animation setup
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe all elements with scroll-animate class
    const animateElements = document.querySelectorAll('.scroll-animate');
    animateElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full px-4 md:px-16 py-10 bg-gradient-to-br from-slate-500 to-slate-700 text-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
      </div>

      {/* Header with attractive styling and scroll animation */}
      <motion.div 
        className="relative z-10 mb-12 scroll-animate"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div 
          className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4 shadow-lg"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 200 }}
          viewport={{ once: true }}
        >
          ✨ TRENDING DESTINATIONS ✨
        </motion.div>
        
        <motion.h2 
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-fuchsia-700 bg-clip-text text-transparent mb-4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          OUR POPULAR TOURS
        </motion.h2>
        
        <motion.p 
          className="text-xl text-gray-700 font-medium"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          🌈 EXPLORE THE WORLD with unforgettable experiences
        </motion.p>
      </motion.div>

      {/* Tours grid with enhanced styling and scroll animations */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        {tours.map((tour, index) => (
          <motion.div
            key={tour.id}
            className="relative rounded-2xl overflow-hidden shadow-xl group bg-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105"
            initial={{ opacity: 0, y: 80, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.15,
              ease: "easeOut",
              type: "spring",
              stiffness: 100
            }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ 
              scale: 1.05,
              y: -12,
              transition: { duration: 0.3 }
            }}
          >
            {/* Image with enhanced effects */}
            <div className="relative overflow-hidden">
              <motion.img
                src={tour.image}
                alt={tour.title}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              />
              
              {/* Gradient overlay - enhanced */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
              
              {/* Floating elements on hover */}
              <motion.div 
                className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3, type: "spring" }}
                viewport={{ once: true }}
              >
                <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
                  <div className="w-6 h-6 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">♥</span>
                  </div>
                </div>
              </motion.div>

              {/* Enhanced content overlay */}
              <motion.div 
                className="absolute bottom-0 left-0 right-0 text-white p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                viewport={{ once: true }}
              >
                <div className="transform group-hover:translate-y-0 translate-y-2 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-300 transition-colors">
                    {tour.title}
                  </h3>
                  <p className="text-sm mb-4 opacity-90 group-hover:opacity-100 transition-opacity">
                    {tour.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <motion.span 
                      className="bg-gradient-to-r from-red-500 to-pink-500 px-4 py-2 rounded-full font-bold text-sm shadow-lg transform group-hover:scale-105 transition-transform"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.6, type: "spring" }}
                      viewport={{ once: true }}
                    >
                      Starting {tour.price}
                    </motion.span>
                    <motion.div 
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ x: 20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.7 }}
                      viewport={{ once: true }}
                    >
                      <button className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-white/30 transition-all">
                        Book Now →
                      </button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Shine effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
          </motion.div>
        ))}
      </div>

      {/* Enhanced View More button with scroll animation */}
      <motion.div 
        className="mt-12 relative z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.button 
          className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 hover:from-red-600 hover:via-pink-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg"
          whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
          whileTap={{ scale: 0.95 }}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1, type: "spring", stiffness: 200 }}
          viewport={{ once: true }}
        >
          <span className="flex items-center gap-2">
            View More Destinations
            <motion.span 
              className="transform group-hover:translate-x-1 transition-transform"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              →
            </motion.span>
          </span>
        </motion.button>
      </motion.div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .scroll-animate {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .scroll-animate.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
};

export default PopularTours;