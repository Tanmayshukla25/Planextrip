import React, { useState, useEffect, useRef } from "react";
import { MapPin, Calendar, Users, Star, ArrowRight, Heart, Share2 } from "lucide-react";

// Sample tour data with enhanced details
const tours = [
  {
    id: 1,
    title: "Rajasthan Heritage",
    price: 5999,
    originalPrice: 7999,
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=500&h=300&fit=crop",
    rating: 4.8,
    reviews: 234,
    tag: "Featured",
    duration: "7 Days",
    location: "Jaipur, Udaipur, Jodhpur",
    group: "2-15 People",
    description: "Exploring Rajasthan's majestic forts, vibrant culture, and desert landscapes for unforgettable experiences.",
    highlights: ["Desert Safari", "Palace Tours", "Cultural Shows"]
  },
  {
    id: 2,
    title: "North-Snow Adventure",
    price: 7999,
    originalPrice: 9999,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop",
    rating: 4.9,
    reviews: 189,
    tag: "Best Seller",
    duration: "5 Days",
    location: "Shimla, Manali",
    group: "2-12 People",
    description: "Discovering Himachal's snowy landscapes, serene beauty, and thrilling winter adventures together.",
    highlights: ["Snow Activities", "Mountain Views", "Adventure Sports"]
  },
  {
    id: 3,
    title: "South-Beauty Explorer",
    price: 11999,
    originalPrice: 14999,
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=500&h=300&fit=crop",
    rating: 4.7,
    reviews: 156,
    tag: "Popular",
    duration: "9 Days",
    location: "Kerala, Tamil Nadu",
    group: "2-20 People",
    description: "Exploring South India's stunning beaches, temples, culture, and lush landscapes together.",
    highlights: ["Backwaters", "Temple Tours", "Beach Relaxation"]
  },
  {
    id: 4,
    title: "Plan International",
    price: 21999,
    originalPrice: 29999,
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&h=300&fit=crop",
    rating: 5.0,
    reviews: 89,
    tag: "Premium",
    duration: "12 Days",
    location: "Dubai, Singapore",
    group: "2-8 People",
    description: "Exploring international destinations' breathtaking landscapes, rich culture, and unforgettable experience.",
    highlights: ["Luxury Hotels", "City Tours", "Shopping"]
  },
];

const TourPackages = () => {
  const [favorites, setFavorites] = useState(new Set());
  const [hoveredCard, setHoveredCard] = useState(null);
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [headerVisible, setHeaderVisible] = useState(false);
  const cardRefs = useRef([]);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.dataset.type === 'header') {
              setHeaderVisible(true);
            } else {
              const cardId = parseInt(entry.target.dataset.cardId);
              setVisibleCards(prev => new Set([...prev, cardId]));
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    // Observe header
    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    // Observe cards
    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const toggleFavorite = (id) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavorites(newFavorites);
  };

  const getTagColor = (tag) => {
    switch (tag) {
      case "Featured": return "bg-gradient-to-r from-purple-500 to-pink-500";
      case "Best Seller": return "bg-gradient-to-r from-orange-500 to-red-500";
      case "Popular": return "bg-gradient-to-r from-green-500 to-teal-500";
      case "Premium": return "bg-gradient-to-r from-yellow-500 to-orange-500";
      default: return "bg-gradient-to-r from-gray-500 to-gray-600";
    }
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-slate-500 to-slate-700 min-h-screen">
      {/* Enhanced Header */}
      <div 
        ref={headerRef}
        data-type="header"
        className={`max-w-7xl mx-auto text-center mb-16 transition-all duration-1000 ${
          headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className={`inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-gray-600 mb-6 shadow-sm transition-all duration-700 delay-200 ${
          headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}>
          <MapPin className="w-4 h-4" />
          Discover Amazing Destinations
        </div>
        
        <h1 className={`text-1xl md:text-5xl pb-5 font-bold  bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent mb-6 transition-all duration-700 delay-300 ${
          headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}>
          Featured Tour
          <span className="block bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Packages
          </span>
        </h1>
        
        <p className={`text-xl text-white max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-500 ${
          headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}>
          Embark on extraordinary journeys crafted for unforgettable experiences
        </p>
      </div>

      {/* Enhanced Cards Flex Layout */}
      <div className="flex flex-wrap justify-center gap-6 max-w-10xl mx-auto">
        {tours.map((tour, index) => (
          <div
            key={tour.id}
            ref={(el) => cardRefs.current[index] = el}
            data-card-id={tour.id}
            className={`group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex-shrink-0 w-80 ${
              hoveredCard === tour.id ? 'scale-105' : ''
            } ${
              visibleCards.has(tour.id) 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
            onMouseEnter={() => setHoveredCard(tour.id)}
            onMouseLeave={() => setHoveredCard(null)}
            style={{
              transitionDelay: visibleCards.has(tour.id) ? `${index * 150}ms` : '0ms',
              transitionDuration: '800ms'
            }}
          >
            {/* Image Container */}
            <div className="relative h-64 overflow-hidden">
              <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Tag Badge */}
              <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-white text-sm font-semibold ${getTagColor(tour.tag)} shadow-lg`}>
                {tour.tag}
              </div>
              
              {/* Action Buttons */}
              <div className="absolute top-4 right-4 flex gap-2">
                <button
                  onClick={() => toggleFavorite(tour.id)}
                  className={`p-2 rounded-full backdrop-blur-sm transition-all duration-300 ${
                    favorites.has(tour.id) 
                      ? 'bg-red-500 text-white' 
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${favorites.has(tour.id) ? 'fill-current' : ''}`} />
                </button>
                <button className="p-2 rounded-full bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm transition-all duration-300">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
              
              {/* Price Badge */}
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl px-3 py-2 shadow-lg">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-gray-900">₹{tour.price.toLocaleString()}</span>
                  <span className="text-sm text-gray-500 line-through">₹{tour.originalPrice.toLocaleString()}</span>
                </div>
                <div className="text-xs text-green-600 font-semibold">
                  Save ₹{(tour.originalPrice - tour.price).toLocaleString()}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              {/* Title and Rating */}
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                  {tour.title}
                </h3>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold text-gray-900">{tour.rating}</span>
                  </div>
                  <span className="text-sm text-gray-600">({tour.reviews} reviews)</span>
                </div>
              </div>

              {/* Trip Details */}
              <div className="grid grid-cols-1 gap-2 text-sm">
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span>{tour.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>{tour.location}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Users className="w-4 h-4" />
                  <span>{tour.group}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {tour.description}
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-2">
                {tour.highlights.map((highlight, i) => (
                  <span key={i} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                    {highlight}
                  </span>
                ))}
              </div>

              {/* Book Button */}
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group">
                <span>Book Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced View More Button */}
      <div className="flex justify-center mt-16">
        <button className="group bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-3">
          <span>Explore More Destinations</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

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
        
        /* Smooth scroll animations */
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .animate-on-scroll.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* Staggered animation delays */
        .animate-on-scroll:nth-child(1) { transition-delay: 0.1s; }
        .animate-on-scroll:nth-child(2) { transition-delay: 0.2s; }
        .animate-on-scroll:nth-child(3) { transition-delay: 0.3s; }
        .animate-on-scroll:nth-child(4) { transition-delay: 0.4s; }
      `}</style>
    </section>
  );
};

export default TourPackages;