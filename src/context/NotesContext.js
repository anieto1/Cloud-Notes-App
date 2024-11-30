import React, { createContext, useState, useEffect } from "react";

// Create the context
const NotesContext = createContext();

// Provider component
export const NotesProvider = ({ children }) => {
  // States for notes and user
  const [notes, setNotes] = useState([]);
  const [user, setUser] = useState(null);

  // Fetch notes when the app loads (mocked for now)
  useEffect(() => {
    const mockNotes = [
      { id: 1, title: "First Note", content: "This is the first note" },
      { id: 2, title: "Second Note", content: "This is the second note" },
    ];
    setNotes(mockNotes);
  }, []);

  // Values to provide to the app
  const value = {
    notes,
    setNotes,
    user,
    setUser,
  };

  return <NotesContext.Provider value={value}>{children}</NotesContext.Provider>;
};

export default NotesContext;
