import React, { useContext } from "react";
import NotesContext from "../context/NotesContext";

function HomePage() {
  const { notes } = useContext(NotesContext);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">My Notes</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {notes.map((note) => (
          <div
            key={note.id}
            className="bg-white p-4 shadow rounded hover:shadow-lg"
          >
            <h3 className="font-bold text-lg">{note.title}</h3>
            <p className="text-sm text-gray-600">{note.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
