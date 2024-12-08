import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./Pages/LoginSignup/LoginPage";
import HomePage from "./Pages/HomePage";
import NoteEditor from "./Pages/NoteEditor";
import MainLayout from "./Components/MainLayout";

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

        {/* Main Layout with Sidebar */}
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
          <Route
            path="/new-folder"
            element={
              isAuthenticated ? <h2>New Folder Page</h2> : <Navigate to="/login" />
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
