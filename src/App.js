import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./Pages/LoginSignup/LoginPage";
import HomePage from "./Pages/HomePage";
import NoteEditor from "./Pages/NoteEditor";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        {/* Login Page */}
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

        {/* Home Page */}
        <Route
          path="/home"
          element={
            isAuthenticated ? <HomePage /> : <Navigate to="/login" />
          }
        />

        {/* Note Editor */}
        <Route
          path="/editor"
          element={
            isAuthenticated ? <NoteEditor /> : <Navigate to="/login" />
          }
        />

        {/* Default Route */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
