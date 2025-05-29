import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import LoadingSpinner from './components/ui/LoadingSpinner';
import ProtectedRoute from './components/auth/ProtectedRoute';
import { useAuth } from './contexts/AuthContext';

// Lazy load page components for better performance
const HomePage = lazy(() => import('./pages/HomePage'));
const TemplesPage = lazy(() => import('./pages/TemplesPage'));
const TempleDetailsPage = lazy(() => import('./pages/TempleDetailsPage'));
const MapPage = lazy(() => import('./pages/MapPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const AdminDashboard = lazy(() => import('./pages/admin/AdminDashboard'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function App() {
  const { isAuthenticated, isAdmin } = useAuth();

  return (
    <Layout>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/temples" element={<TemplesPage />} />
          <Route path="/temples/:id" element={<TempleDetailsPage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          
          {/* Protected routes */}
          <Route 
            path="/admin/*" 
            element={
              <ProtectedRoute isAllowed={isAuthenticated && isAdmin} redirectPath="/login">
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          
          {/* 404 route */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;