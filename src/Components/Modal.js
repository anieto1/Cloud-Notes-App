import React, { useState } from "react";

function AddNoteModal({ isOpen, onClose, onAddNote, subjects }) {
  const [noteTitle, setNoteTitle] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");

  // Handle input change for note title
  const handleInputChange = (e) => {
    setNoteTitle(e.target.value);
  };

  // Handle subject selection
  const handleSubjectChange = (e) => {
    setSelectedSubject(e.target.value);
  };

  // Handle adding the note
  const handleAddNote = () => {
    if (noteTitle.trim() !== "") {
      onAddNote(noteTitle, selectedSubject); // Pass note title and subject
      setNoteTitle(""); // Reset input
      setSelectedSubject(""); // Reset subject
      onClose(); // Close the modal
    }
  };

  // Handle pressing Enter
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddNote();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "400px",
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>Add Note</h2>
        <input
          type="text"
          value={noteTitle}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Enter note title"
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "16px",
            marginBottom: "20px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
        <select
          value={selectedSubject}
          onChange={handleSubjectChange}
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "16px",
            marginBottom: "20px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        >
          <option value="">Select Subject (Optional)</option>
          {subjects.map((subject) => (
            <option key={subject} value={subject}>
              {subject}
            </option>
          ))}
        </select>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button
            onClick={onClose}
            style={{
              backgroundColor: "#ccc",
              color: "black",
              border: "none",
              padding: "10px 20px",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Cancel
          </button>
          <button
            onClick={handleAddNote}
            style={{
              backgroundColor: "#0073e6",
              color: "white",
              border: "none",
              padding: "10px 20px",
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

export default AddNoteModal;
