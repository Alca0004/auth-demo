import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from 'react-router-dom';

import About from './pages/About';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

import Navigation from './components/Navigation';
import { AuthContainer, useAuth } from './components/Auth';

// if the users information is in data base then it will be redirected to dashboard

const AuthenticationRoute = ({ loggedInUser, children }: any) => {
  if (loggedInUser) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

// If its not a logged in user then it will be redirected to login page

const ProtectedRoute = ({ loggedInUser, children }: any) => {
  if (!loggedInUser) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

// This is the main component of the app

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
