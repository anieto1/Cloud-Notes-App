import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./Pages/LoginSignup/LoginPage";
import HomePage from "./Pages/HomePage";
import NoteEditor from "./Pages/NoteEditor";
import MainLayout from "./Components/MainLayout";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [notes, setNotes] = useState([]); // Array to store notes
  const [subjects, setSubjects] = useState(["Math", "Science", "History"]); // Example subjects

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
        <Route
          element={
            <MainLayout
              notes={notes}
              setNotes={setNotes}
              subjects={subjects}
            />
          }
        >
          <Route
            path="/home"
            element={isAuthenticated ? <HomePage notes={notes} /> : <Navigate to="/login" />}
          />
          <Route
            path="/editor"
            element={isAuthenticated ? <NoteEditor /> : <Navigate to="/login" />}
          />
        </Route>

        {/* Default Redirect */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
