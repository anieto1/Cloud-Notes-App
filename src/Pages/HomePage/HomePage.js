import React from "react";
import { useNavigate } from "react-router-dom";
import NoteCard from "../../Components/NoteCard";
import "./HomePage.css"; // Link to CSS file for clean styling

function HomePage({ notes }) {
  const navigate = useNavigate();

  return (
    <div className="homepage-container">
      {/* Top Left Header */}
      <h1 className="homepage-title">All Notes</h1>

      {/* Notes Grid */}
      <div className="notes-grid">
        {notes.length > 0 ? (
          notes.map((note) => (
            <NoteCard
              key={note.id}
              note={note}
              onClick={() => navigate(`/editor/${note.id}`)}
            />
          ))
        ) : (
          <p className="no-notes">No notes available.</p>
        )}
      </div>
    </div>
  );
}

export default HomePage;
