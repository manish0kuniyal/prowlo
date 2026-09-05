import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/layout/LandingPage";
import Dashboard from "./components/dashboard/Dashboard";
import ProtectedRoute from "./components/layout/auth/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;