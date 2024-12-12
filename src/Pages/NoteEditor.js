import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function NoteEditor({ notes, setNotes }) {
  const { id } = useParams(); // Get note ID from the route
  const navigate = useNavigate();
  const note = notes.find((note) => note.id === parseInt(id)); // Find the selected note

  const [content, setContent] = useState(note?.content || ""); // Local state for content

  // Auto-save content when it changes
  useEffect(() => {
    const saveNote = () => {
      setNotes((prevNotes) =>
        prevNotes.map((n) =>
          n.id === note.id ? { ...n, content: content } : n
        )
      );
    };
    const timeout = setTimeout(saveNote, 500); // Save after 500ms of inactivity

    return () => clearTimeout(timeout); // Cleanup timeout on unmount or content change
  }, [content, note, setNotes]);

  if (!note) return <p>Note not found!</p>; // Handle invalid note ID

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        height: "100vh",
        backgroundColor: "#fff",
      }}
    >
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)} // Go back to the previous page
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          backgroundColor: "#ccc",
          border: "none",
          padding: "10px 20px",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Back
      </button>

      {/* Note Editor */}
      <div
        style={{
          width: "8.5in",
          height: "11in",
          padding: "20px",
          backgroundColor: "#f9f9f9",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            outline: "none",
            resize: "none",
            fontSize: "16px",
            fontFamily: "Arial, sans-serif",
            padding: "10px",
            backgroundColor: "transparent",
          }}
          placeholder="Start writing your note..."
        />
      </div>
    </div>
  );
}

export default NoteEditor;
