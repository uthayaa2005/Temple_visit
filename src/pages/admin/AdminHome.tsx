import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Users, Eye, ThumbsUp, ArrowUpRight } from 'lucide-react';
import templesData from '../../data/templesData';

const AdminHome: React.FC = () => {
  // Sample data for stats
  const totalTemples = templesData.length;
  const totalUsers = 230;
  const totalViews = 12_547;
  const totalReviews = 842;

  // Recent activity data
  const recentActivity = [
    { id: 1, action: 'User Registration', user: 'Priya Sharma', time: '2 hours ago' },
    { id: 2, action: 'Temple Review', user: 'Rajesh Kumar', temple: 'Meenakshi Amman Temple', time: '5 hours ago' },
    { id: 3, action: 'Temple Data Updated', user: 'Admin', temple: 'Brihadeeswarar Temple', time: '1 day ago' },
    { id: 4, action: 'New Temple Added', user: 'Admin', temple: 'Ekambareswarar Temple', time: '2 days ago' },
    { id: 5, action: 'User Login', user: 'Amit Singh', time: '2 days ago' },
  ];

  // Popular temples data
  const popularTemples = templesData.slice(0, 4);

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-primary-100 text-primary-600 mr-4">
              <MapPin size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">Total Temples</p>
              <h3 className="text-2xl font-bold">{totalTemples}</h3>
            </div>
          </div>
          <div className="mt-4">
            <Link to="/admin/temples" className="text-sm text-primary-600 hover:text-primary-700 inline-flex items-center">
              View All
              <ArrowUpRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-secondary-100 text-secondary-600 mr-4">
              <Users size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">Total Users</p>
              <h3 className="text-2xl font-bold">{totalUsers}</h3>
            </div>
          </div>
          <div className="mt-4">
            <Link to="/admin/users" className="text-sm text-secondary-600 hover:text-secondary-700 inline-flex items-center">
              View All
              <ArrowUpRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-accent-100 text-accent-600 mr-4">
              <Eye size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">Total Page Views</p>
              <h3 className="text-2xl font-bold">{totalViews.toLocaleString()}</h3>
            </div>
          </div>
          <div className="mt-4">
            <span className="text-sm text-green-600 inline-flex items-center">
              +12.5% from last month
            </span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-temple-red bg-opacity-10 text-temple-red mr-4">
              <ThumbsUp size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">Total Reviews</p>
              <h3 className="text-2xl font-bold">{totalReviews}</h3>
            </div>
          </div>
          <div className="mt-4">
            <span className="text-sm text-green-600 inline-flex items-center">
              +8.2% from last month
            </span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold">Recent Activity</h2>
          </div>
          <div className="p-6">
            <ul className="divide-y divide-gray-200">
              {recentActivity.map(activity => (
                <li key={activity.id} className="py-3 flex items-start">
                  <div className="w-2 h-2 rounded-full bg-temple-red mt-2 mr-3"></div>
                  <div>
                    <p className="text-gray-800">
                      <span className="font-medium">{activity.action}</span>
                      {activity.temple && <span> - {activity.temple}</span>}
                    </p>
                    <div className="flex items-center mt-1">
                      <span className="text-sm text-gray-500">By {activity.user}</span>
                      <span className="mx-2 text-gray-300">•</span>
                      <span className="text-sm text-gray-500">{activity.time}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Popular Temples */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold">Popular Temples</h2>
          </div>
          <div className="p-6">
            <ul className="space-y-4">
              {popularTemples.map(temple => (
                <li key={temple.id} className="flex items-center">
                  <div className="h-12 w-12 rounded-md overflow-hidden mr-4 flex-shrink-0">
                    <img 
                      src={temple.image} 
                      alt={temple.name} 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-medium text-gray-800">{temple.name}</h3>
                    <p className="text-sm text-gray-500">{temple.location}</p>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Eye size={14} className="mr-1" />
                    {Math.floor(Math.random() * 2000) + 500}
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Link 
                to="/admin/temples" 
                className="text-sm text-primary-600 hover:text-primary-700 inline-flex items-center"
              >
                View All Temples
                <ArrowUpRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
        <div className="flex flex-wrap gap-4">
          <Link 
            to="/admin/temples" 
            className="btn bg-primary-600 hover:bg-primary-700 text-white"
          >
            Add New Temple
          </Link>
          <Link 
            to="/admin/users" 
            className="btn bg-secondary-600 hover:bg-secondary-700 text-white"
          >
            Manage Users
          </Link>
          <Link 
            to="/admin/settings" 
            className="btn btn-outline"
          >
            Update Settings
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;