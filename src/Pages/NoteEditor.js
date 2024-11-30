import React, { useContext, useState } from "react";
import NotesContext from "../context/NotesContext";
import { useNavigate } from "react-router-dom";

function NoteEditor() {
  const { notes, setNotes } = useContext(NotesContext);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSaveNote = () => {
    const newNote = {
      id: Date.now(),
      title,
      content,
    };
    setNotes([...notes, newNote]);
    navigate("/home");
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Create a New Note</h2>
      <div className="bg-white p-4 shadow rounded">
        <input
          type="text"
          placeholder="Title"
          className="w-full p-2 mb-4 border rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          className="w-full p-2 mb-4 border rounded"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={handleSaveNote}
        >
          Save Note
        </button>
      </div>
    </div>
  );
}

export default NoteEditor;
