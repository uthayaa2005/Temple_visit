import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16 flex items-center justify-center">
      <div className="container-custom max-w-md text-center">
        <div className="mb-6 text-temple-red">
          <Search size={80} className="mx-auto opacity-70" />
        </div>
        <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
        <p className="text-xl text-gray-600 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/"
            className="btn bg-temple-red hover:bg-red-800 text-white inline-flex items-center justify-center"
          >
            <Home size={18} className="mr-2" />
            Return Home
          </Link>
          <Link 
            to="/temples"
            className="btn btn-outline border-temple-red text-temple-red hover:bg-temple-red hover:text-white transition-colors"
          >
            Explore Temples
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;