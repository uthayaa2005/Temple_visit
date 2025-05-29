import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <MapPin size={24} className="text-temple-gold" />
              <h3 className="text-xl font-heading font-bold">TamilNadu Temples</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Discover the ancient temples of Tamil Nadu with our comprehensive guide. 
              Explore the rich cultural heritage and spiritual destinations across the state.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-temple-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-temple-gold transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-temple-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-temple-gold transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4 border-b border-gray-700 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-temple-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/temples" className="text-gray-400 hover:text-temple-gold transition-colors">
                  Temples
                </Link>
              </li>
              <li>
                <Link to="/map" className="text-gray-400 hover:text-temple-gold transition-colors">
                  Map
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-400 hover:text-temple-gold transition-colors">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-gray-400 hover:text-temple-gold transition-colors">
                  Register
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Popular Temples */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4 border-b border-gray-700 pb-2">
              Popular Temples
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/temples/1" className="text-gray-400 hover:text-temple-gold transition-colors">
                  Meenakshi Amman Temple
                </Link>
              </li>
              <li>
                <Link to="/temples/2" className="text-gray-400 hover:text-temple-gold transition-colors">
                  Brihadeeswarar Temple
                </Link>
              </li>
              <li>
                <Link to="/temples/3" className="text-gray-400 hover:text-temple-gold transition-colors">
                  Rameshwaram Temple
                </Link>
              </li>
              <li>
                <Link to="/temples/4" className="text-gray-400 hover:text-temple-gold transition-colors">
                  Murugan Temple, Palani
                </Link>
              </li>
              <li>
                <Link to="/temples/5" className="text-gray-400 hover:text-temple-gold transition-colors">
                  Kapaleeshwarar Temple
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4 border-b border-gray-700 pb-2">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-temple-gold flex-shrink-0 mt-1" />
                <span className="text-gray-400">
                  123 Temple Street, Chennai, Tamil Nadu, India
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-temple-gold flex-shrink-0" />
                <span className="text-gray-400">+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-temple-gold flex-shrink-0" />
                <span className="text-gray-400">info@tamilnadutemples.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Tamil Nadu Temples Guide. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;