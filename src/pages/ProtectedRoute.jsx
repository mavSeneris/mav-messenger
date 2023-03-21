import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import {Routes, Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ path, element }) => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
      <Route
        path={path}
        element={isAuthenticated ? element : <Navigate to="/login" />}
      />
  );
};

export default ProtectedRoute;