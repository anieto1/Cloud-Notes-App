import React, { useContext } from "react";
import NotesContext from "../context/NotesContext";

function HomePage() {
  const { notes } = useContext(NotesContext);

  return (
    <div className="flex">

      {/* Main Content */}
      <div className="flex-1 p-4 bg-gray-100">
        <h1 className="text-3xl font-bold mb-4">All Notes</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {notes.map((note) => (
            <div key={note.id} className="bg-white p-4 rounded shadow hover:shadow-lg">
              <h3 className="font-bold text-lg">{note.title}</h3>
              <p className="text-sm text-gray-600">{note.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
