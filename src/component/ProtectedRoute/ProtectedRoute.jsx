// src/component/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const userData = localStorage.getItem('user');
  const user = userData ? JSON.parse(userData).user : null;

  if (!user || !allowedRoles.includes(user.role)) {
    // Redirect to login or any fallback page
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
