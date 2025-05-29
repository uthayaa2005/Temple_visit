import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, LogOut, MapPin, Info, Home } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close menu when location changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container-custom flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link 
          to="/"
          className="flex items-center space-x-2"
        >
          <div className="text-temple-red">
            <MapPin size={28} strokeWidth={2} />
          </div>
          <span className="font-heading text-xl md:text-2xl font-bold text-temple-red">
            TamilNadu Temples
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={`flex items-center space-x-1 font-medium ${
              location.pathname === '/' 
                ? 'text-temple-red' 
                : 'text-gray-700 hover:text-temple-red'
            } transition-colors`}
          >
            <Home size={18} />
            <span>Home</span>
          </Link>
          <Link 
            to="/temples" 
            className={`flex items-center space-x-1 font-medium ${
              location.pathname.includes('/temples') && !location.pathname.includes('/map')
                ? 'text-temple-red' 
                : 'text-gray-700 hover:text-temple-red'
            } transition-colors`}
          >
            <Info size={18} />
            <span>Temples</span>
          </Link>
          <Link 
            to="/map" 
            className={`flex items-center space-x-1 font-medium ${
              location.pathname === '/map' 
                ? 'text-temple-red' 
                : 'text-gray-700 hover:text-temple-red'
            } transition-colors`}
          >
            <MapPin size={18} />
            <span>Map</span>
          </Link>
          
          {isAuthenticated ? (
            <div className="relative group">
              <button className="flex items-center space-x-1 font-medium text-gray-700 hover:text-temple-red transition-colors">
                <User size={18} />
                <span>{user?.name}</span>
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {user?.isAdmin && (
                  <Link to="/admin\" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Admin Dashboard
                  </Link>
                )}
                <button 
                  onClick={logout}
                  className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                >
                  <LogOut size={16} className="mr-2" />
                  <span>Logout</span>
                </button>
              </div>
            </div>
          ) : (
            <Link 
              to="/login" 
              className="btn btn-primary"
            >
              Login
            </Link>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <Link 
              to="/"
              className={`flex items-center space-x-2 py-2 px-4 rounded-md ${
                location.pathname === '/' ? 'bg-primary-100 text-primary-700' : ''
              }`}
            >
              <Home size={20} />
              <span>Home</span>
            </Link>
            <Link 
              to="/temples"
              className={`flex items-center space-x-2 py-2 px-4 rounded-md ${
                location.pathname.includes('/temples') && !location.pathname.includes('/map') ? 'bg-primary-100 text-primary-700' : ''
              }`}
            >
              <Info size={20} />
              <span>Temples</span>
            </Link>
            <Link 
              to="/map"
              className={`flex items-center space-x-2 py-2 px-4 rounded-md ${
                location.pathname === '/map' ? 'bg-primary-100 text-primary-700' : ''
              }`}
            >
              <MapPin size={20} />
              <span>Map</span>
            </Link>
            
            {isAuthenticated ? (
              <>
                {user?.isAdmin && (
                  <Link 
                    to="/admin"
                    className="flex items-center space-x-2 py-2 px-4 rounded-md"
                  >
                    <User size={20} />
                    <span>Admin Dashboard</span>
                  </Link>
                )}
                <button 
                  onClick={logout}
                  className="flex items-center space-x-2 py-2 px-4 rounded-md text-left w-full"
                >
                  <LogOut size={20} />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <Link 
                to="/login"
                className="btn btn-primary w-full justify-center"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;