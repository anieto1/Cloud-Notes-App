import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/HomePage";
import NoteEditor from "./Pages/NoteEditor";

function App() {
  return (
    <Router>
      <div className="flex">
        {/* Sidebar Navbar */}
        <Navbar />

        {/* Main Content */}
        <div className="flex-1 p-4 bg-gray-100">
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/editor" element={<NoteEditor />} />
            <Route path="/new-folder" element={<h2>Create a New Folder Page</h2>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
