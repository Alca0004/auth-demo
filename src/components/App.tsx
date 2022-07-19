import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from 'react-router-dom';

import About from '../About';
import Navigation from './Navigation';
import Landing from './Landing';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import { AuthContainer, useAuth } from './Auth';

const AuthenticationRoute = ({ loggedInUser, children }: any) => {
  if (loggedInUser) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

const ProtectedRoute = ({ loggedInUser, children }: any) => {
  if (!loggedInUser) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export function Content() {
  const { user } = useAuth();

  return (
    <Router>
      <div>
        <Navigation loggedInUser={user} />

        <hr />

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />

          <Route
            path="/login"
            element={
              <AuthenticationRoute loggedInUser={user}>
                <Login />
              </AuthenticationRoute>
            }
          />
          <Route
            path="/register"
            element={
              <AuthenticationRoute loggedInUser={user}>
                <Register />
              </AuthenticationRoute>
            }
          />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute loggedInUser={user}>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default function App() {
  return (
    <AuthContainer>
      <Content />
    </AuthContainer>
  );
}
