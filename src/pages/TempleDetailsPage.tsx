import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Clock, Info, History, Building, Home, Utensils, Map as MapIcon } from 'lucide-react';
import templesData, { Temple, Amenity } from '../data/templesData';
import LoadingSpinner from '../components/ui/LoadingSpinner';

const TempleDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [temple, setTemple] = useState<Temple | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'overview' | 'history' | 'amenities'>('overview');
  const [selectedAmenityType, setSelectedAmenityType] = useState<'hotel' | 'food' | 'attraction'>('hotel');

  useEffect(() => {
    // Simulate loading data
    setLoading(true);
    const timer = setTimeout(() => {
      if (id) {
        const foundTemple = templesData.find(t => t.id === parseInt(id));
        setTemple(foundTemple || null);
      }
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 pb-16 flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (!temple) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 pb-16">
        <div className="container-custom">
          <div className="text-center py-12 bg-white rounded-lg shadow-md">
            <div className="text-temple-red mb-4">
              <Info size={64} className="mx-auto opacity-70" />
            </div>
            <h3 className="text-2xl font-semibold mb-2">Temple Not Found</h3>
            <p className="text-gray-600 mb-6">
              We couldn't find the temple you're looking for.
            </p>
            <Link 
              to="/temples"
              className="btn bg-temple-red hover:bg-red-800 text-white"
            >
              Browse All Temples
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const AmenityCard: React.FC<{ amenity: Amenity }> = ({ amenity }) => (
    <div className="bg-white rounded-lg shadow-card overflow-hidden group">
      {amenity.image && (
        <div className="h-40 overflow-hidden">
          <img 
            src={amenity.image} 
            alt={amenity.name} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <div className="p-4">
        <h4 className="font-semibold text-lg mb-1">{amenity.name}</h4>
        <div className="flex items-center mb-2">
          <div className="flex text-yellow-500 mr-2">
            {[...Array(5)].map((_, i) => (
              <svg 
                key={i}
                className={`w-4 h-4 ${i < Math.floor(amenity.rating) ? 'text-yellow-500' : 'text-gray-300'}`} 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-sm text-gray-600">{amenity.rating.toFixed(1)}</span>
        </div>
        <p className="text-sm text-gray-500 mb-2">Distance: {amenity.distance}</p>
        <p className="text-sm text-gray-700 line-clamp-2">{amenity.description}</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      {/* Hero Section */}
      <div className="relative h-80 sm:h-96 md:h-[500px] mb-8">
        <div className="absolute inset-0">
          <img 
            src={temple.image} 
            alt={temple.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 text-white">
          <div className="container-custom">
            <div className="flex items-center text-temple-gold mb-3">
              <MapPin size={20} className="mr-2" />
              <span>{temple.location}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-2">{temple.name}</h1>
            <p className="text-xl md:text-2xl opacity-90 mb-4">{temple.deity}</p>
            <div className="flex flex-wrap gap-4 mt-4">
              <Link 
                to={`/map?temple=${temple.id}`} 
                className="btn bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border border-white/40 inline-flex items-center"
              >
                <MapIcon size={18} className="mr-2" />
                View on Map
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom">
        {/* Tabs Navigation */}
        <div className="bg-white rounded-lg shadow-md mb-8 overflow-hidden">
          <div className="flex flex-wrap border-b">
            <button
              className={`px-6 py-4 font-medium text-sm sm:text-base inline-flex items-center ${
                activeTab === 'overview' 
                  ? 'text-temple-red border-b-2 border-temple-red' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              onClick={() => setActiveTab('overview')}
            >
              <Info size={18} className="mr-2" />
              Overview
            </button>
            <button
              className={`px-6 py-4 font-medium text-sm sm:text-base inline-flex items-center ${
                activeTab === 'history' 
                  ? 'text-temple-red border-b-2 border-temple-red' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              onClick={() => setActiveTab('history')}
            >
              <History size={18} className="mr-2" />
              History & Architecture
            </button>
            <button
              className={`px-6 py-4 font-medium text-sm sm:text-base inline-flex items-center ${
                activeTab === 'amenities' 
                  ? 'text-temple-red border-b-2 border-temple-red' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              onClick={() => setActiveTab('amenities')}
            >
              <Building size={18} className="mr-2" />
              Nearby Amenities
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <h2 className="text-2xl font-bold mb-4">About {temple.name}</h2>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {temple.description}
                    </p>
                    
                    <h3 className="text-xl font-semibold mb-3">Visitor Information</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                      <div className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <Clock size={18} className="text-primary-600 mr-2" />
                          <h4 className="font-medium">Timings</h4>
                        </div>
                        <p className="text-gray-700">{temple.timings}</p>
                      </div>
                      <div className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <Info size={18} className="text-primary-600 mr-2" />
                          <h4 className="font-medium">Entry Fee</h4>
                        </div>
                        <p className="text-gray-700">{temple.entryFee}</p>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-3">Best Time to Visit</h3>
                    <p className="text-gray-700 mb-6">
                      {temple.bestTimeToVisit}
                    </p>
                  </div>
                  
                  {/* Quick Links */}
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4 pb-2 border-b border-gray-200">
                      Quick Information
                    </h3>
                    <ul className="space-y-4">
                      <li className="flex">
                        <MapPin size={20} className="text-primary-600 mr-3 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-medium">Location</h4>
                          <p className="text-gray-700">{temple.location}</p>
                        </div>
                      </li>
                      <li className="flex">
                        <Clock size={20} className="text-primary-600 mr-3 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-medium">Timings</h4>
                          <p className="text-gray-700">{temple.timings}</p>
                        </div>
                      </li>
                      <li className="flex">
                        <Info size={20} className="text-primary-600 mr-3 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-medium">Deity</h4>
                          <p className="text-gray-700">{temple.deity}</p>
                        </div>
                      </li>
                      <li className="flex">
                        <Home size={20} className="text-secondary-600 mr-3 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-medium">Nearby Hotels</h4>
                          <p className="text-gray-700">{temple.nearbyHotels.length} options available</p>
                        </div>
                      </li>
                      <li className="flex">
                        <Utensils size={20} className="text-accent-600 mr-3 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-medium">Nearby Food</h4>
                          <p className="text-gray-700">{temple.nearbyFood.length} options available</p>
                        </div>
                      </li>
                    </ul>
                    <div className="mt-6 pt-4 border-t border-gray-200">
                      <Link 
                        to={`/map?temple=${temple.id}`} 
                        className="btn bg-temple-red hover:bg-red-800 text-white w-full flex items-center justify-center"
                      >
                        <MapIcon size={18} className="mr-2" />
                        View on Map
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* History & Architecture Tab */}
            {activeTab === 'history' && (
              <div className="animate-fade-in">
                <h2 className="text-2xl font-bold mb-4">History</h2>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  {temple.history}
                </p>
                
                <h2 className="text-2xl font-bold mb-4">Architecture</h2>
                <p className="text-gray-700 leading-relaxed">
                  {temple.architecture}
                </p>
              </div>
            )}

            {/* Nearby Amenities Tab */}
            {activeTab === 'amenities' && (
              <div className="animate-fade-in">
                <div className="flex flex-wrap gap-4 mb-6 border-b pb-4">
                  <button
                    className={`px-4 py-2 rounded-md text-sm font-medium ${
                      selectedAmenityType === 'hotel' 
                        ? 'bg-primary-100 text-primary-700' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    onClick={() => setSelectedAmenityType('hotel')}
                  >
                    <Home size={16} className="inline mr-1" />
                    Hotels ({temple.nearbyHotels.length})
                  </button>
                  <button
                    className={`px-4 py-2 rounded-md text-sm font-medium ${
                      selectedAmenityType === 'food' 
                        ? 'bg-primary-100 text-primary-700' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    onClick={() => setSelectedAmenityType('food')}
                  >
                    <Utensils size={16} className="inline mr-1" />
                    Restaurants ({temple.nearbyFood.length})
                  </button>
                  <button
                    className={`px-4 py-2 rounded-md text-sm font-medium ${
                      selectedAmenityType === 'attraction' 
                        ? 'bg-primary-100 text-primary-700' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    onClick={() => setSelectedAmenityType('attraction')}
                  >
                    <MapIcon size={16} className="inline mr-1" />
                    Attractions ({temple.nearbyAttractions.length})
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {selectedAmenityType === 'hotel' && 
                    temple.nearbyHotels.map(hotel => (
                      <AmenityCard key={hotel.id} amenity={hotel} />
                    ))
                  }
                  
                  {selectedAmenityType === 'food' && 
                    temple.nearbyFood.map(food => (
                      <AmenityCard key={food.id} amenity={food} />
                    ))
                  }
                  
                  {selectedAmenityType === 'attraction' && 
                    temple.nearbyAttractions.map(attraction => (
                      <AmenityCard key={attraction.id} amenity={attraction} />
                    ))
                  }
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Temple Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {temple.id > 1 && (
            <Link 
              to={`/temples/${temple.id - 1}`}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <div>
                <div className="text-sm text-gray-500">Previous Temple</div>
                <div className="font-medium">{templesData[temple.id - 2]?.name}</div>
              </div>
            </Link>
          )}
          
          {temple.id < templesData.length && (
            <Link 
              to={`/temples/${temple.id + 1}`}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-center justify-end ml-auto"
            >
              <div className="text-right">
                <div className="text-sm text-gray-500">Next Temple</div>
                <div className="font-medium">{templesData[temple.id]?.name}</div>
              </div>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default TempleDetailsPage;