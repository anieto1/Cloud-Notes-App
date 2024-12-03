import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./Pages/LoginSignup/LoginPage";
import HomePage from "./Pages/HomePage";
import NoteEditor from "./Pages/NoteEditor";
import MainLayout from "./Components/MainLayout"; // Import the MainLayout

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        {/* Login Page - Without Navbar */}
        <Route
          path="/login"
          element={
            isAuthenticated ? (
              <Navigate to="/home" />
            ) : (
              <LoginPage onAuthenticate={() => setIsAuthenticated(true)} />
            )
          }
        />

        {/* Main Layout with Navbar */}
        <Route element={<MainLayout />}>
          <Route
            path="/home"
            element={
              isAuthenticated ? <HomePage /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/editor"
            element={
              isAuthenticated ? <NoteEditor /> : <Navigate to="/login" />
            }
          />
        </Route>

        {/* Default Redirect */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
