import React, { useState } from 'react';
import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import { LayoutDashboard, MapPin, Users, Settings, LogOut, Menu, X } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import AdminHome from './AdminHome';
import ManageTemples from './ManageTemples';
import ManageUsers from './ManageUsers';
import AdminSettings from './AdminSettings';

const AdminDashboard: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Close sidebar when location changes
  React.useEffect(() => {
    setIsSidebarOpen(false);
  }, [location]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar for larger screens */}
      <aside className="hidden md:flex md:flex-col w-64 bg-gray-900 text-white fixed inset-y-0 pt-20">
        <div className="flex items-center justify-center border-b border-gray-800 py-4">
          <MapPin size={24} className="text-temple-gold mr-2" />
          <h2 className="text-xl font-semibold">Admin Panel</h2>
        </div>
        <nav className="flex-1 px-2 py-4 space-y-1">
          <Link
            to="/admin"
            className={`flex items-center px-4 py-3 rounded-md transition-colors ${
              isActive('/admin') 
                ? 'bg-gray-800 text-white' 
                : 'text-gray-300 hover:bg-gray-800'
            }`}
          >
            <LayoutDashboard size={20} className="mr-3" />
            Dashboard
          </Link>
          <Link
            to="/admin/temples"
            className={`flex items-center px-4 py-3 rounded-md transition-colors ${
              isActive('/admin/temples') 
                ? 'bg-gray-800 text-white' 
                : 'text-gray-300 hover:bg-gray-800'
            }`}
          >
            <MapPin size={20} className="mr-3" />
            Manage Temples
          </Link>
          <Link
            to="/admin/users"
            className={`flex items-center px-4 py-3 rounded-md transition-colors ${
              isActive('/admin/users') 
                ? 'bg-gray-800 text-white' 
                : 'text-gray-300 hover:bg-gray-800'
            }`}
          >
            <Users size={20} className="mr-3" />
            Manage Users
          </Link>
          <Link
            to="/admin/settings"
            className={`flex items-center px-4 py-3 rounded-md transition-colors ${
              isActive('/admin/settings') 
                ? 'bg-gray-800 text-white' 
                : 'text-gray-300 hover:bg-gray-800'
            }`}
          >
            <Settings size={20} className="mr-3" />
            Settings
          </Link>
        </nav>
        <div className="p-4 border-t border-gray-800">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-temple-gold rounded-full flex items-center justify-center text-gray-900 font-semibold mr-3">
              {user?.name.charAt(0).toUpperCase()}
            </div>
            <div>
              <p className="font-medium">{user?.name}</p>
              <p className="text-sm text-gray-400">{user?.email}</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center w-full px-4 py-2 text-gray-300 hover:bg-gray-800 rounded-md transition-colors"
          >
            <LogOut size={20} className="mr-3" />
            Logout
          </button>
        </div>
      </aside>
      
      {/* Mobile sidebar */}
      <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden ${isSidebarOpen ? 'block' : 'hidden'}`} onClick={toggleSidebar}></div>
      
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-900 text-white transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden pt-20`}>
        <div className="flex items-center justify-between border-b border-gray-800 py-4 px-4">
          <div className="flex items-center">
            <MapPin size={24} className="text-temple-gold mr-2" />
            <h2 className="text-xl font-semibold">Admin Panel</h2>
          </div>
          <button 
            onClick={toggleSidebar}
            className="text-white"
          >
            <X size={24} />
          </button>
        </div>
        <nav className="flex-1 px-2 py-4 space-y-1">
          <Link
            to="/admin"
            className={`flex items-center px-4 py-3 rounded-md transition-colors ${
              isActive('/admin') 
                ? 'bg-gray-800 text-white' 
                : 'text-gray-300 hover:bg-gray-800'
            }`}
          >
            <LayoutDashboard size={20} className="mr-3" />
            Dashboard
          </Link>
          <Link
            to="/admin/temples"
            className={`flex items-center px-4 py-3 rounded-md transition-colors ${
              isActive('/admin/temples') 
                ? 'bg-gray-800 text-white' 
                : 'text-gray-300 hover:bg-gray-800'
            }`}
          >
            <MapPin size={20} className="mr-3" />
            Manage Temples
          </Link>
          <Link
            to="/admin/users"
            className={`flex items-center px-4 py-3 rounded-md transition-colors ${
              isActive('/admin/users') 
                ? 'bg-gray-800 text-white' 
                : 'text-gray-300 hover:bg-gray-800'
            }`}
          >
            <Users size={20} className="mr-3" />
            Manage Users
          </Link>
          <Link
            to="/admin/settings"
            className={`flex items-center px-4 py-3 rounded-md transition-colors ${
              isActive('/admin/settings') 
                ? 'bg-gray-800 text-white' 
                : 'text-gray-300 hover:bg-gray-800'
            }`}
          >
            <Settings size={20} className="mr-3" />
            Settings
          </Link>
        </nav>
        <div className="p-4 border-t border-gray-800">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-temple-gold rounded-full flex items-center justify-center text-gray-900 font-semibold mr-3">
              {user?.name.charAt(0).toUpperCase()}
            </div>
            <div>
              <p className="font-medium">{user?.name}</p>
              <p className="text-sm text-gray-400">{user?.email}</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center w-full px-4 py-2 text-gray-300 hover:bg-gray-800 rounded-md transition-colors"
          >
            <LogOut size={20} className="mr-3" />
            Logout
          </button>
        </div>
      </aside>
      
      {/* Main content */}
      <div className="flex-1 md:ml-64 pt-20">
        <header className="bg-white shadow-sm py-4 px-4 md:px-6 flex items-center justify-between">
          <button 
            className="md:hidden text-gray-700"
            onClick={toggleSidebar}
          >
            <Menu size={24} />
          </button>
          <h1 className="text-xl font-semibold md:text-2xl">
            {location.pathname === '/admin' && 'Dashboard'}
            {location.pathname === '/admin/temples' && 'Manage Temples'}
            {location.pathname === '/admin/users' && 'Manage Users'}
            {location.pathname === '/admin/settings' && 'Settings'}
          </h1>
          <div className="flex items-center">
            <Link to="/" className="text-sm text-gray-700 hover:text-temple-red">
              View Site
            </Link>
          </div>
        </header>
        
        <main className="p-4 md:p-6">
          <Routes>
            <Route path="/" element={<AdminHome />} />
            <Route path="/temples" element={<ManageTemples />} />
            <Route path="/users" element={<ManageUsers />} />
            <Route path="/settings" element={<AdminSettings />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;