import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import { MapPin, Search, Info } from 'lucide-react';
import templesData, { Temple } from '../data/templesData';
import LoadingSpinner from '../components/ui/LoadingSpinner';

// Custom marker icon
const createTempleIcon = () => {
  return L.divIcon({
    html: `<div class="flex items-center justify-center w-8 h-8">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#a61c1c" stroke="#a61c1c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="temple-marker">
        <path d="M12 2 L2 7 L5 7 L5 21 L19 21 L19 7 L22 7 Z" />
        <path d="M9 21V12M15 21V12M12 7v5M5 7v14M19 7v14" />
      </svg>
    </div>`,
    className: 'temple-marker-container',
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30]
  });
};

// Component to handle map center and zoom
const MapController: React.FC<{ center: [number, number], zoom: number }> = ({ center, zoom }) => {
  const map = useMap();
  useEffect(() => {
    map.flyTo(center, zoom, { duration: 1.5 });
  }, [center, zoom, map]);
  return null;
};

const MapPage: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTemples, setFilteredTemples] = useState<Temple[]>(templesData);
  const [selectedTemple, setSelectedTemple] = useState<Temple | null>(null);
  const [mapCenter, setMapCenter] = useState<[number, number]>([10.7905, 78.7047]); // Center of Tamil Nadu
  const [mapZoom, setMapZoom] = useState(7);
  const [searchParams] = useSearchParams();
  const templeIconRef = useRef(createTempleIcon());

  // Handle temple ID from URL
  useEffect(() => {
    const templeIdParam = searchParams.get('temple');
    if (templeIdParam) {
      const templeId = parseInt(templeIdParam);
      const temple = templesData.find(t => t.id === templeId);
      if (temple) {
        setSelectedTemple(temple);
        setMapCenter([temple.coordinates.lat, temple.coordinates.lng]);
        setMapZoom(12);
      }
    }
  }, [searchParams]);

  // Filter temples based on search term
  useEffect(() => {
    if (searchTerm) {
      const lowercasedSearch = searchTerm.toLowerCase();
      const filtered = templesData.filter(
        temple => 
          temple.name.toLowerCase().includes(lowercasedSearch) || 
          temple.location.toLowerCase().includes(lowercasedSearch) ||
          temple.deity.toLowerCase().includes(lowercasedSearch)
      );
      setFilteredTemples(filtered);
    } else {
      setFilteredTemples(templesData);
    }
  }, [searchTerm]);

  // Simulate loading map
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleTempleSelect = (temple: Temple) => {
    setSelectedTemple(temple);
    setMapCenter([temple.coordinates.lat, temple.coordinates.lng]);
    setMapZoom(12);
  };

  const handleMapReset = () => {
    setSelectedTemple(null);
    setMapCenter([10.7905, 78.7047]);
    setMapZoom(7);
    setSearchTerm('');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 pb-16 flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="flex flex-col h-[calc(100vh-80px)]">
        <div className="bg-white p-4 border-b border-gray-200 shadow-sm">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <h1 className="text-2xl font-bold">Tamil Nadu Temples Map</h1>
              <div className="relative flex-grow ml-0 md:ml-6">
                <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for temples..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <button 
                onClick={handleMapReset}
                className="btn btn-outline whitespace-nowrap"
              >
                Reset Map
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row flex-grow">
          {/* Sidebar */}
          <div className="w-full md:w-80 lg:w-96 h-60 md:h-full overflow-y-auto bg-white border-t md:border-t-0 md:border-r border-gray-200">
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-4">
                {filteredTemples.length} Temples
                {searchTerm && ` matching "${searchTerm}"`}
              </h2>
              
              {filteredTemples.length > 0 ? (
                <div className="space-y-3">
                  {filteredTemples.map(temple => (
                    <div 
                      key={temple.id}
                      className={`p-3 rounded-lg cursor-pointer transition-colors ${
                        selectedTemple?.id === temple.id 
                          ? 'bg-primary-100 border border-primary-200' 
                          : 'hover:bg-gray-100 border border-gray-100'
                      }`}
                      onClick={() => handleTempleSelect(temple)}
                    >
                      <h3 className="font-medium text-gray-900">{temple.name}</h3>
                      <div className="flex items-center text-gray-500 text-sm mt-1">
                        <MapPin size={14} className="mr-1" />
                        <span>{temple.location}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <div className="text-gray-400 mb-2">
                    <Info size={48} className="mx-auto" />
                  </div>
                  <p className="text-gray-600">No temples found matching your search</p>
                </div>
              )}
            </div>
          </div>

          {/* Map */}
          <div className="flex-grow relative">
            <MapContainer 
              center={mapCenter} 
              zoom={mapZoom} 
              style={{ height: '100%', width: '100%' }}
              zoomControl={false}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              
              {filteredTemples.map(temple => (
                <Marker 
                  key={temple.id}
                  position={[temple.coordinates.lat, temple.coordinates.lng]}
                  icon={templeIconRef.current}
                  eventHandlers={{
                    click: () => handleTempleSelect(temple)
                  }}
                >
                  <Popup className="custom-popup">
                    <div className="p-1">
                      <img 
                        src={temple.image} 
                        alt={temple.name} 
                        className="w-full h-32 object-cover rounded-t-lg"
                      />
                      <div className="p-3">
                        <h3 className="font-semibold text-gray-900">{temple.name}</h3>
                        <div className="flex items-center text-gray-500 text-sm mt-1 mb-2">
                          <MapPin size={14} className="mr-1" />
                          <span>{temple.location}</span>
                        </div>
                        <a 
                          href={`/temples/${temple.id}`}
                          className="text-sm text-temple-red font-medium hover:underline"
                        >
                          View Details
                        </a>
                      </div>
                    </div>
                  </Popup>
                </Marker>
              ))}
              
              <MapController center={mapCenter} zoom={mapZoom} />
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapPage;