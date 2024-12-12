import React from "react";

function NoteCard({ note, onClick }) {
  return (
    <div
      style={{
        width: "200px", // Smaller size for homepage
        height: "250px",
        backgroundColor: "#f9f9f9",
        padding: "10px",
        marginBottom: "20px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
      onClick={onClick} // Navigate to the editor when clicked
    >
      <h2 style={{ marginBottom: "10px", fontSize: "16px" }}>{note.title}</h2>
      <p style={{ marginBottom: "10px", color: "#555" }}>Subject: {note.subject}</p>
      <p style={{ flexGrow: 1, overflow: "hidden", textOverflow: "ellipsis" }}>
        {note.content ? note.content.slice(0, 50) + "..." : "No content yet."}
      </p>
    </div>
  );
}

export default NoteCard;
