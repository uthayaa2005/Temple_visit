import React from 'react';
import { Link } from 'react-router-dom';
import templesData from '../data/templesData';
import { MapPin, Star, Navigation, Search, Users, Map, Utensils, Building, Info } from 'lucide-react';

const HomePage: React.FC = () => {
  // Get 3 featured temples
  const featuredTemples = templesData.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center">
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        <div className="container-custom relative h-full flex flex-col justify-center items-center text-center text-white z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading">
            Discover the Sacred Temples of Tamil Nadu
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl">
            Explore ancient temples, immerse yourself in rich cultural heritage, and plan your perfect spiritual journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/temples" className="btn bg-temple-red hover:bg-red-800 text-white px-8 py-3 rounded-md">
              Explore Temples
            </Link>
            <Link to="/map" className="btn bg-white hover:bg-gray-100 text-temple-red px-8 py-3 rounded-md">
              View Temple Map
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent opacity-70"></div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Your Complete Temple Guide</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover everything you need to know about Tamil Nadu's magnificent temples, their surroundings, and plan your perfect pilgrimage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-card hover:shadow-card-hover transition-all text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 text-primary-600">
                <Info size={32} />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2">Detailed Information</h3>
              <p className="text-gray-600">
                Comprehensive details about each temple's history, architecture, and significance.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-card hover:shadow-card-hover transition-all text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4 text-secondary-600">
                <Map size={32} />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2">Interactive Map</h3>
              <p className="text-gray-600">
                Visualize temple locations across Tamil Nadu with our interactive map tool.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-card hover:shadow-card-hover transition-all text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4 text-accent-600">
                <Building size={32} />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2">Nearby Hotels</h3>
              <p className="text-gray-600">
                Find comfortable accommodations close to each temple for a pleasant stay.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-card hover:shadow-card-hover transition-all text-center">
              <div className="w-16 h-16 bg-temple-red bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4 text-temple-red">
                <Utensils size={32} />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2">Local Cuisine</h3>
              <p className="text-gray-600">
                Discover authentic Tamil Nadu restaurants and specialty dishes near each temple.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Temples Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Featured Temples</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore some of the most magnificent temples in Tamil Nadu, each with their unique architecture, history, and spiritual significance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTemples.map(temple => (
              <div key={temple.id} className="card group">
                <div className="relative overflow-hidden h-60">
                  <img 
                    src={temple.image} 
                    alt={temple.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent p-4">
                    <div className="flex items-center text-white">
                      <MapPin size={16} className="mr-1" />
                      <span className="text-sm">{temple.location}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-semibold mb-2">{temple.name}</h3>
                  <p className="text-gray-700 mb-4 line-clamp-2">{temple.description.substring(0, 100)}...</p>
                  <Link 
                    to={`/temples/${temple.id}`} 
                    className="inline-flex items-center text-temple-red hover:text-temple-red font-medium"
                  >
                    Explore
                    <Navigation size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/temples" 
              className="btn btn-outline border-temple-red text-temple-red hover:bg-temple-red hover:text-white transition-colors"
            >
              View All Temples
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-700 to-primary-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Explore Tamil Nadu's Divine Heritage?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Create an account to save your favorite temples, plan your itinerary, and get personalized recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register" className="btn bg-white text-primary-700 hover:bg-gray-100 px-8 py-3 rounded-md">
              Sign Up Now
            </Link>
            <Link to="/map" className="btn bg-transparent border-2 border-white hover:bg-white/10 text-white px-8 py-3 rounded-md">
              Explore Temple Map
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">What Our Users Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from pilgrims and tourists who've explored Tamil Nadu's temples with our guide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-card hover:shadow-card-hover transition-all">
              <div className="flex items-center mb-4 text-yellow-500">
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
              </div>
              <p className="text-gray-700 mb-4 italic">
                "This guide made our temple tour so much easier! The detailed maps and hotel recommendations saved us hours of planning."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary-200 rounded-full flex items-center justify-center text-primary-700 font-semibold mr-3">
                  RS
                </div>
                <div>
                  <h4 className="font-medium">Rajesh Sharma</h4>
                  <p className="text-gray-500 text-sm">Delhi, India</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-card hover:shadow-card-hover transition-all">
              <div className="flex items-center mb-4 text-yellow-500">
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
              </div>
              <p className="text-gray-700 mb-4 italic">
                "The information about each temple's history and significance enhanced our spiritual journey. Highly recommended!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-secondary-200 rounded-full flex items-center justify-center text-secondary-700 font-semibold mr-3">
                  LP
                </div>
                <div>
                  <h4 className="font-medium">Lakshmi Patel</h4>
                  <p className="text-gray-500 text-sm">Mumbai, India</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-card hover:shadow-card-hover transition-all">
              <div className="flex items-center mb-4 text-yellow-500">
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
              </div>
              <p className="text-gray-700 mb-4 italic">
                "As a foreign tourist, this app was invaluable. The nearby food recommendations introduced us to amazing Tamil cuisine!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-accent-200 rounded-full flex items-center justify-center text-accent-700 font-semibold mr-3">
                  JM
                </div>
                <div>
                  <h4 className="font-medium">John Miller</h4>
                  <p className="text-gray-500 text-sm">London, UK</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;