import React, { useState } from "react";

function Modal({ isOpen, onClose, subjects, onAddNote }) {
  const [noteTitle, setNoteTitle] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");

  const handleAddNote = () => {
    if (noteTitle.trim() && selectedSubject) {
      onAddNote(noteTitle, selectedSubject);
      setNoteTitle("");
      setSelectedSubject("");
      onClose();
    } else {
      alert("Please enter a note title and select a subject.");
    }
  };

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "8px",
          width: "400px",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>Create New Note</h2>

        <label style={{ display: "block", marginBottom: "10px" }}>
          Note Title:
          <input
            type="text"
            value={noteTitle}
            onChange={(e) => setNoteTitle(e.target.value)}
            style={{
              width: "100%",
              padding: "8px",
              marginTop: "5px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </label>

        <label style={{ display: "block", marginBottom: "20px" }}>
          Subject:
          <select
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
            style={{
              width: "100%",
              padding: "8px",
              marginTop: "5px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          >
            <option value="">Select a subject</option>
            {subjects.map((subject, index) => (
              <option key={index} value={subject}>
                {subject}
              </option>
            ))}
          </select>
        </label>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button
            onClick={onClose}
            style={{
              padding: "10px 20px",
              backgroundColor: "#ccc",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Cancel
          </button>
          <button
            onClick={handleAddNote}
            style={{
              padding: "10px 20px",
              backgroundColor: "#0059b3",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Add Note
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
