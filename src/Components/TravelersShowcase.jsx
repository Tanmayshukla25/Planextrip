import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

// Import images
import Tirumala from "../assets/Tirumala.jpg";
import Pondicherry from "../assets/Pondicherry.jpeg";
import pillar from "../assets/pillar.png";
import dharamshala from "../assets/dharamshala.jpeg";
import hawamahal from "../assets/hawamahal.png";
import Thailand from "../assets/Thailand.avif";
import vietnam from "../assets/vietnam.jpeg";
import Hampi from "../assets/Hampi.jpg";
import Kedarnath from "../assets/Kedarnath.jpg";

// Image data with names
const images = [
  { src: Tirumala, name: "Tirumala" },
  { src: Pondicherry, name: "Pondicherry" },
  { src: pillar, name: "Pillar Temple" },
  { src: dharamshala, name: "Dharamshala" },
  { src: hawamahal, name: "Hawa Mahal" },
  { src: Thailand, name: "Thailand" },
  { src: vietnam, name: "Vietnam" },
  { src: Hampi, name: "Hampi" },
  { src: Kedarnath, name: "Kedarnath" },
];

// FAQs
const faqs = [
  {
    question: "How do I book a tour package with PlanNextTrip?",
    answer:
      "Booking a tour is easy! Just fill out the booking form on our website, or contact us via call or WhatsApp at +91-9876543210. Our team will guide you through the process step by step.",
  },
  {
    question: "Can I customize my travel itinerary?",
    answer:
      "Absolutely! We specialize in personalized trips. Share your preferences and we'll tailor the trip to your needs.",
  },
  {
    question: "What is included in the tour package cost?",
    answer:
      "Most packages include accommodations, transportation, guided tours, and some meals. Specifics will be detailed in your package.",
  },
];

const TravelShowcaseWithFAQ = () => {
  // Initialize openIndex to 0 to have the first FAQ open by default for a better first impression
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" bg-gradient-to-br from-slate-500 to-slate-700 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-extrabold text-center mb-16 relative"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
            Traveler's
          </span>{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
            Showcase
          </span>
        
        </motion.h2>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, rotate: 2 }} // Slightly less aggressive scale, added rotation
              className="relative overflow-hidden rounded-2xl shadow-xl group cursor-pointer border border-gray-700 hover:border-blue-400 transition-all duration-300"
            >
              <img
                src={img.src}
                alt={img.name}
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110" // Slower scale on image inside
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                <span className="text-white text-2xl font-bold tracking-wide transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  {img.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-start">
          {/* FAQ Text Info */}
          <div className="w-full md:w-1/3 order-2 md:order-1 text-center md:text-left">
            <h3 className="text-lg font-bold text-teal-400 mb-2 uppercase tracking-wider">
              FAQ
            </h3>
            <h4 className="text-3xl sm:text-4xl font-extrabold text-blue-300 mb-6 leading-tight">
              FREQUENTLY ASKED <br /> QUESTIONS!!
            </h4>
            <p className="text-base text-gray-300 leading-relaxed">
              Find quick answers to the most common questions our travelers ask.
              From booking details to tour customization, we've covered everything
              you need to know. If you still have queries, feel free to reach out
              — we're here to help you every step of the way!
            </p>
          </div>

          {/* Accordion */}
          <div className="w-full md:w-2/3 space-y-5 order-1 md:order-2">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`rounded-2xl border-2 transition-all duration-500 shadow-xl ${
                  index === openIndex
                    ? "border-blue-500 bg-gradient-to-br from-gray-700 to-gray-800"
                    : "border-gray-700 bg-gray-800 hover:border-blue-400"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className={`w-full px-7 py-5 text-left font-semibold flex justify-between items-center rounded-xl transition-all duration-300 ${
                    index === openIndex
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                      : "text-gray-200 hover:bg-gray-700 hover:text-white"
                  }`}
                >
                  <span className="text-lg sm:text-xl">{faq.question}</span>
                  {openIndex === index ? (
                    <IoIosArrowUp className="text-xl sm:text-2xl ml-4 flex-shrink-0 transform rotate-0 transition-transform duration-300" />
                  ) : (
                    <IoIosArrowDown className="text-xl sm:text-2xl ml-4 flex-shrink-0 transform rotate-180 transition-transform duration-300" />
                  )}
                </button>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, paddingLeft: 0, paddingRight: 0, paddingTop: 0, paddingBottom: 0 }}
                    animate={{ opacity: 1, height: "auto", paddingLeft: "1.75rem", paddingRight: "1.75rem", paddingTop: "1rem", paddingBottom: "1.75rem" }} // py-4 & px-6 converted to rem for animation
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="text-base text-gray-300 overflow-hidden" // Added overflow-hidden for smooth height transition
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelShowcaseWithFAQ;