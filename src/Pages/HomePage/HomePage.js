import React from "react";
import { useNavigate } from "react-router-dom";
import NoteCard from "../../Components/NoteCard";

function HomePage({ notes }) {
  const navigate = useNavigate();

  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <h1 style={{ marginBottom: "20px", fontSize: "24px", fontWeight: "bold" }}>
        All Notes
      </h1>

      {/* Notes List */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {notes.length > 0 ? (
          notes.map((note) => (
            <NoteCard
              key={note.id}
              note={note}
              onClick={() => navigate(`/editor/${note.id}`)}
            />
          ))
        ) : (
          <p>No notes available.</p>
        )}
      </div>
    </div>
  );
}

export default HomePage;
