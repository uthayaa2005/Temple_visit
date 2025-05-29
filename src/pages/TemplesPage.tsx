import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Search, Filter, X } from 'lucide-react';
import templesData, { Temple } from '../data/templesData';

const TemplesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTemples, setFilteredTemples] = useState<Temple[]>(templesData);
  const [selectedLocation, setSelectedLocation] = useState<string>('');
  const [selectedDeity, setSelectedDeity] = useState<string>('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Get unique locations and deities for filters
  const uniqueLocations = Array.from(new Set(templesData.map(temple => temple.location.split(',')[0])));
  const uniqueDeities = Array.from(new Set(templesData.map(temple => temple.deity.split(' and ')[0])));

  // Filter temples based on search term and filters
  useEffect(() => {
    let result = templesData;

    if (searchTerm) {
      const lowercasedSearch = searchTerm.toLowerCase();
      result = result.filter(
        temple => 
          temple.name.toLowerCase().includes(lowercasedSearch) || 
          temple.location.toLowerCase().includes(lowercasedSearch) ||
          temple.deity.toLowerCase().includes(lowercasedSearch)
      );
    }

    if (selectedLocation) {
      result = result.filter(temple => temple.location.includes(selectedLocation));
    }

    if (selectedDeity) {
      result = result.filter(temple => temple.deity.includes(selectedDeity));
    }

    setFilteredTemples(result);
  }, [searchTerm, selectedLocation, selectedDeity]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedLocation('');
    setSelectedDeity('');
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4 text-gray-900">Explore Tamil Nadu Temples</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the ancient and magnificent temples of Tamil Nadu, each with their unique architecture, history, and spiritual significance.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-8 bg-white rounded-lg shadow-md p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search temples by name, location, or deity..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50"
            >
              <Filter size={18} className="mr-2" />
              Filters
            </button>
            {(selectedLocation || selectedDeity || searchTerm) && (
              <button 
                onClick={clearFilters}
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50 text-temple-red"
              >
                <X size={18} className="mr-2" />
                Clear All
              </button>
            )}
          </div>

          {/* Filter Options */}
          {isFilterOpen && (
            <div className="mt-4 pt-4 border-t border-gray-200 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Filter by Location
                </label>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="">All Locations</option>
                  {uniqueLocations.map(location => (
                    <option key={location} value={location}>{location}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Filter by Deity
                </label>
                <select
                  value={selectedDeity}
                  onChange={(e) => setSelectedDeity(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="">All Deities</option>
                  {uniqueDeities.map(deity => (
                    <option key={deity} value={deity}>{deity}</option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredTemples.length} of {templesData.length} temples
          </p>
        </div>

        {/* Temples Grid */}
        {filteredTemples.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTemples.map(temple => (
              <Link 
                key={temple.id} 
                to={`/temples/${temple.id}`}
                className="card group hover:transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative overflow-hidden h-52">
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
                  <p className="text-gray-500 mb-3 text-sm">{temple.deity}</p>
                  <p className="text-gray-700 mb-4 line-clamp-2">{temple.description.substring(0, 120)}...</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">
                      {temple.timings.split(',')[0]}
                    </span>
                    <span className="inline-flex items-center text-temple-red font-medium">
                      Details
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow-md">
            <div className="text-gray-500 mb-4">
              <Search size={64} className="mx-auto opacity-40" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No temples found</h3>
            <p className="text-gray-600 mb-4">
              We couldn't find any temples matching your search criteria.
            </p>
            <button 
              onClick={clearFilters}
              className="btn bg-temple-red hover:bg-red-800 text-white"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TemplesPage;