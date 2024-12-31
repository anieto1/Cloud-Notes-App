import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function NoteEditor({ notes, setNotes }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const note = notes.find((note) => note.id === parseInt(id));

  const [content, setContent] = useState(note?.content || ""); // Typed text

  // Handle typing
  const handleChange = (e) => {
    setContent(e.target.value);
  };

  // Save the content when leaving the page
  const handleSave = () => {
    const updatedNotes = notes.map((n) =>
      n.id === parseInt(id) ? { ...n, content } : n
    );
    setNotes(updatedNotes);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        height: "100vh",
        backgroundColor: "#fff",
        position: "relative",
      }}
    >
      {/* Back Button */}
      <button
        onClick={() => {
          handleSave(); // Save changes before navigating back
          navigate(-1);
        }}
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          backgroundColor: "#0073e6",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "14px",
        }}
      >
        Back
      </button>

      {/* Text Area for Typing */}
      <textarea
        value={content}
        onChange={handleChange}
        style={{
          width: "8.5in",
          height: "11in",
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "20px",
          fontSize: "16px",
          lineHeight: "1.5",
          fontFamily: "Arial, sans-serif",
          resize: "none",
          outline: "none",
          marginTop: "60px", // Adds space below the back button
        }}
        placeholder="Start writing your note here..."
      />
    </div>
  );
}

export default NoteEditor;
